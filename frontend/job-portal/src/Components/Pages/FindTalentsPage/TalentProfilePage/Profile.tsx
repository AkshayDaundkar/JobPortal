import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertCard from "./CertCard";

const Profile = (props: any) => {
  return (
    // Left section - 2/3rd of the screen
    <div className="w-2/3">
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
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" /> {props.role} &bull;{" "}
          {props.company}
        </div>

        {/* location */}
        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
        </div>
      </div>
      <Divider mx={"xs"} size={"xs"} my={"xl"} />

      {/* About section */}
      <div className="px-3 ">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>

      <Divider mx={"xs"} my={"xl"} />

      {/* Skills section */}
      <div className="px-3 ">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider mx={"xs"} my={"xl"} />

      {/* Experience Cards */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience?.map((exp: any, index: any) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <Divider mx={"xs"} my={"xl"} />

      {/* Certifications Cards */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certification</div>
        <div className="flex flex-col gap-8">
          {props.certifications?.map((certificate: any, index: any) => (
            <CertCard key={index} {...certificate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
