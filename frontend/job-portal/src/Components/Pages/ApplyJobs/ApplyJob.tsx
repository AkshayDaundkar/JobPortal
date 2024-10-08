import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJob = (props: any) => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [second, setSecond] = useState(5);

  //   useNavigate
  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(!submit);
    let x = 5;
    setInterval(() => {
      x--;
      setSecond(x);
      if (x == 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };

  return (
    <>
      <LoadingOverlay
        className="!fixed z-[1000]"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="w-2/3 mx-auto">
        {/* Card */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            {/* image */}
            <div className="p-3 bg-mine-shaft-900 rounded-xl">
              <img
                className="h-14"
                src={`/Icons/Google.png`}
                alt={props.company}
              />
            </div>

            {/* heading and subheading */}
            <div>
              {/* heading */}
              <div className="font-semibold text-2xl">Google Engineer III</div>

              {/* subheading */}
              <div className="text-lg text-mine-shaft-300">
                {" "}
                Google &bull; 3 Days Ago &bull; 48 Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my={"xl"} />
        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>

        {/* Input Fields */}

        <div className="flex flex-col gap-5">
          {/* Name and email */}
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              label="Full Name"
              placeholder="Enter Name"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              withAsterisk
            />
            <TextInput
              label="Email"
              placeholder="Enter Email"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              withAsterisk
            />
          </div>

          {/* number and Personal Website */}
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              label="Phone Number"
              placeholder="Enter your phone number"
              withAsterisk
              hideControls
              min={0}
              max={9999999999}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              clampBehavior="strict"
            />
            <TextInput
              label="Personal Website"
              placeholder="Personal Url"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              withAsterisk
            />
          </div>

          {/* File Input and Text Area */}
          <div className="flex flex-col gap-5">
            <FileInput
              label="Attach your CV"
              placeholder="Your CV"
              leftSectionPointerEvents="none"
              leftSection={<IconPaperclip stroke={1.5} />}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              withAsterisk
            />
            <Textarea
              placeholder="Write something about yourself..."
              label="Cover Letter"
              autosize
              minRows={4}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              withAsterisk
            />

            {/* if preview is true, then you can either edit or submit. Else preview only */}
            {!preview ? (
              <Button
                color="brightSun.4"
                variant="light"
                onClick={handlePreview}
              >
                Preview
              </Button>
            ) : (
              <div className="flex gap-10 [&>*]:w-1/2">
                <Button
                  fullWidth
                  color="brightSun.4"
                  variant="outline"
                  onClick={handlePreview}
                >
                  Edit
                </Button>
                <Button
                  fullWidth
                  color="brightSun.4"
                  variant="light"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Notification
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted!"
        mt={"md"}
        withBorder
        className={`!border-bright-sun-400 z-[1001] !fixed top-0 left-[40%]  transition duration-300 ease-in-out ${
          submit ? "translate-y-5" : "-translate-y-24"
        }`}
        withCloseButton={false}
      >
        Redirecting to Find Jobs in {second} seconds...
      </Notification>
    </>
  );
};

export default ApplyJob;
