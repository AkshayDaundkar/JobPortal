import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
        <>
          <div key={index} className="w-1/5">
            <MultiInput {...item} />
          </div>
          <Divider size={"xs"} orientation="vertical" mr={"xs"} />
        </>
      ))}
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

export default SearchBar;
