"use client";
import React, { useRef, useState, useEffect } from "react";
import { createWorker } from "tesseract.js";

const page = () => {
  const videoRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [ocrText, setOcrText] = useState("");
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const initializeTesseract = async () => {
      const tesseractWorker = await createWorker();
      await tesseractWorker.loadLanguage("eng");
      await tesseractWorker.initialize("eng");
      setWorker(tesseractWorker);
    };
    initializeTesseract();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const takePhoto = async () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL("image/png");
    setImageData(imageDataUrl);

    console.log(imageDataUrl);
    // Realizar OCR en la imagen
    await performOcr(canvas);
  };

  const performOcr = async (canvas) => {
    if (worker) {
      const {
        data: { text },
      } = await worker.recognize(canvas);

      const extractedNumbers = text.match(/\d+/g);
      const numbersString = extractedNumbers ? extractedNumbers.join("") : "";

      setOcrText(numbersString);
    }
  };

  // Escuchar eventos de teclado en el documento
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Obtener la tecla presionada en minúsculas
      const key = event.key.toLowerCase();
      if (key === "c") {
        // Iniciar la cámara cuando se presiona la tecla "c"
        startCamera();
      } else if (key === "t") {
        // Tomar una foto cuando se presiona la tecla "t"
        takePhoto();
      }
    };

    // Agregar el evento de escucha de teclado al documento
    document.addEventListener("keydown", handleKeyDown);

    // Eliminar el evento de escucha de teclado al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={startCamera}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Iniciar Cámara (tecla "c")
      </button>
      <button
        onClick={takePhoto}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Tomar Foto (tecla "t")
      </button>
      {imageData && <img src={imageData} alt="Capturada" className="mb-4" />}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Texto Extraído:</h2>
        <p className="text-lg">{ocrText}</p>
      </div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="mt-4 border border-gray-300"
      ></video>
    </div>
  );
};

export default page;
