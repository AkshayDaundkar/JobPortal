import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import CertCard from "./CertCard";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../../../Data/Profile";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";

const Profile = (props: any) => {
  const select = fields;
  const [edit, setEdit] = useState([false, false, false, false, false]);

  // editing about section
  const [about, setAbout] = useState(props.about);

  // editing skill section
  const [skills, setSkills] = useState(props.skills);

  // add experience
  const [addExp, setAddExp] = useState(false);

  // add certification
  const [addCert, setAddCert] = useState(false);

  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  return (
    // Left section - 2/3rd of the screen
    <div className="w-4/5 mx-auto">
      {/* banner and avatar */}
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="" className="rounded-t-2xl" />
        <img
          src="avatar.png"
          alt=""
          className="rounded-full w-48 h-48 -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
        />
      </div>

      {/* Profile details */}
      <div className="px-3 mt-24">
        {/* user details */}
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <ActionIcon
            onClick={() => handleEdit(0)}
            variant="subtle"
            color="brightSun.4"
            size={"lg"}
          >
            {/* if edit of the particular index is true then change the logo from pencil to floppy disk */}
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>

        {edit[0] ? (
          // {/* Job title and company */}
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase className="h-5 w-5" /> {props.role} &bull;{" "}
              {props.company}
            </div>
            {/* location */}
            <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
              <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
            </div>
          </>
        )}
      </div>
      <Divider mx={"xs"} size={"xs"} my={"xl"} />

      {/* About section */}
      <div className="px-3 ">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About
          <ActionIcon
            onClick={() => handleEdit(1)}
            variant="subtle"
            color="brightSun.4"
            size={"lg"}
          >
            {/* if edit of the particular index is true then change the logo from pencil to floppy disk */}
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>

        {/* on edit mode -> show text area else show the text */}
        {edit[1] ? (
          <Textarea
            autosize
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {about}
          </div>
        )}
      </div>

      <Divider mx={"xs"} my={"xl"} />

      {/* Skills section */}
      <div className="px-3 ">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills
          <ActionIcon
            onClick={() => handleEdit(2)}
            variant="subtle"
            color="brightSun.4"
            size={"lg"}
          >
            {/* if edit of the particular index is true then change the logo from pencil to floppy disk */}
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            withAsterisk
            onChange={setSkills}
            value={skills}
            label="Skills"
            placeholder="Enter skill"
            clearable
            acceptValueOnBlur
            splitChars={[" ", ",", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills?.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider mx={"xs"} my={"xl"} />

      {/* Experience Cards */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setAddExp(true)}
              variant="subtle"
              color="brightSun.4"
              size={"lg"}
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleEdit(3)}
              variant="subtle"
              color="brightSun.4"
              size={"lg"}
            >
              {/* if edit of the particular index is true then change the logo from pencil to floppy disk */}
              {edit[3] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {props.experience?.map((exp: any, index: any) => (
            <ExperienceCard key={index} {...exp} edit={edit[3]} />
          ))}
          {/* if plus button in experience field is clicked, then show Input fields for adding experience. */}
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>

      <Divider mx={"xs"} my={"xl"} />

      {/* Certifications Cards */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certification
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setAddCert(true)}
              variant="subtle"
              color="brightSun.4"
              size={"lg"}
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleEdit(4)}
              variant="subtle"
              color="brightSun.4"
              size={"lg"}
            >
              {/* if edit of the particular index is true then change the logo from pencil to floppy disk */}
              {edit[4] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {props.certifications?.map((certificate: any, index: any) => (
            <CertCard key={index} {...certificate} edit={edit[4]} />
          ))}
          {addCert && <CertInput setEdit={setAddCert} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
