import { talents } from "../../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>

        <Sort />
      </div>

      <div className="flex mt-10 flex-wrap gap-5 justify-between">
        {talents.map((talent) => (
          <TalentCard {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
