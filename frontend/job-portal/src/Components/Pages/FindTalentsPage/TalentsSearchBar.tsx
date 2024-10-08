import { Divider, Input, RangeSlider } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import { useState } from "react";
import { searchFields } from "../../../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";

const TalentsSearchBar = () => {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return (
    <div className="flex px-5 py-8">
      {/* user icon and input field */}
      <div className="flex items-center">
        <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
          <IconUserCircle size={20} />
        </div>
        <Input
          variant="unstyled"
          placeholder="Talent Name"
          className="[&_input]:!placeholder-mine-shaft-300"
        />
      </div>

      {searchFields.map((item, index) => (
        <>
          <div key={index} className="w-1/5">
            <MultiInput {...item} />
          </div>
          <Divider size={"xs"} orientation="vertical" mr={"xs"} />
        </>
      ))}

      {/* slider */}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-12 text-sm">
        <div className="flex justify-between">
          <div>Salary</div>
          <div>
            ₹{value[0]} LPA - ₹{value[1]} LPA
          </div>
        </div>

        <RangeSlider
          size={"xs"}
          color="brightSun.4"
          value={value}
          onChange={setValue}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default TalentsSearchBar;
