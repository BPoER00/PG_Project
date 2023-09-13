"use client";
import { useFamilia } from "@/context/Familia.Context.js";

//components
import Steps from "./Steps.js";
import FamiliaList from "./FamiliaList.js";
import FamiliaNew from "./FamiliaNew.js";

function FamiliaActions() {
  const { paginate } = useFamilia();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <FamiliaList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <FamiliaNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default FamiliaActions;
