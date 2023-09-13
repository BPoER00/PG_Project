import FamiliaProvider from "@/context/Familia.Context.js";
import Default from "@/components/Globales/Default";
import FamiliaActions from "@/components/Familia/FamiliaActions";

function page() {
  return (
    <FamiliaProvider>
      <Default>
        <FamiliaActions />
      </Default>
    </FamiliaProvider>
  );
}

export default page;
