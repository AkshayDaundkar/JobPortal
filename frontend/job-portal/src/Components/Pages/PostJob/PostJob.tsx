import { Button, TagsInput } from "@mantine/core";
import { fields } from "../../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";

const PostJob = () => {
  const select = fields;
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold mb-5">post job</div>
      <div className="flex flex-col gap-5">
        {/* Job title and company */}
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>

        {/* Experience and Job Type */}
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>

        {/* Location and Salary */}
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>

        {/* Tags */}
        <TagsInput
          withAsterisk
          label="Skills"
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[" ", ",", "|"]}
        />

        {/* Mantine Text Editor */}
        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/5">
          <div className="text-sm">Job Description</div>
          <TextEditor />
        </div>
        <div className="flex gap-5">
          <Button color="brightSun.4" variant="light">
            Publish Job
          </Button>
          <Button color="brightSun.4" variant="outline">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
