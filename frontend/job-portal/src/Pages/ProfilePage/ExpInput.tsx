import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );

  //   start date
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  //   end date
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  //   currently working at this company?
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "New " : "Edit "} Experience
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        withAsterisk
        label="Summary"
        placeholder="Enter Summary..."
        autosize
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={endDate || undefined}
          label="Start Date"
          placeholder="Pick date"
          value={startDate}
          onChange={setStartDate}
        />
        <MonthPickerInput
          withAsterisk
          disabled={checked}
          minDate={startDate || undefined}
          label="End Date"
          placeholder="Pick date"
          value={endDate}
          onChange={setEndDate}
        />
      </div>
      <Checkbox
        autoContrast
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="Currently working here ?"
      />
      <div className="flex gap-5 pt-1">
        <Button
          onClick={() => props.setEdit(false)}
          color="brightSun.4"
          variant="outline"
        >
          Save
        </Button>
        <Button
          color="red.4"
          onClick={() => props.setEdit(false)}
          variant="light"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
