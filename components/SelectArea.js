import { useContext } from "react";
import AreaContext from "../context/AreaContext";
import { useRouter } from "next/router";

export default function SelectArea() {
  const { area, setArea } = useContext(AreaContext);
  const router = useRouter();
  return (
    <select
      className="overflow-hidden text-xs md:text-base bg-transparent border-none w-full ml-auto"
      id="area"
      name="area"
      onChange={(e) => setArea(e.target.value)}
      value={area}
    >
      <option value="all">
        {router.locale === "en" ? "All Areas" : "Tutte le aree"}
      </option>
      <option value="hvar">Hvar Area</option>
      <option value="split">Split Area</option>
    </select>
  );
}
