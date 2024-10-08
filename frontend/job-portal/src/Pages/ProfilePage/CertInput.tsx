import { Button, TextInput } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertInput = (props: any) => {
  const select = fields;

  //   setting certificate issue date
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  return (
    <div className="flex flex-col gap-3">
      <div>Add Certificate</div>

      {/* Title and Company Name */}
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Enter Title" />
        <SelectInput {...select[1]} />
      </div>

      {/* Certificate issue Date and id */}
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          minDate={new Date()}
          label="Issue Date"
          placeholder="Pick date"
          value={issueDate}
          onChange={setIssueDate}
        />
        <TextInput label="Id" withAsterisk placeholder="Enter Id" />
      </div>

      {/* Save and Cancel Buttons */}
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

export default CertInput;
