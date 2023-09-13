import ReactLoading from "react-loading";

function LoadingBar() {
  return (
    <div className="flex items-center justify-center">
      <div className="col-span-12">
        <div className="lg:overflow-visible">
          <ReactLoading type="spin" color="#000" height={50} width={50} />
        </div>
      </div>
    </div>
  );
}

export default LoadingBar;