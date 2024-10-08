import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const CompanyProfile = () => {
  return (
    <div className="w-3/4">
      {/* banner and avatar */}
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="" className="rounded-t-2xl" />
        <img
          src="Icons/Google.png"
          alt=""
          className="rounded-3xl w-48 h-48 absolute left-3 border-mine-shaft-950 bg-mine-shaft-950 border-8 -bottom-1/4 p-2"
        />
      </div>

      {/* Profile details */}
      <div className="px-3 mt-20">
        {/* user details */}
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar2.png" />
            <Avatar src="avatar3.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>

        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" /> Software Engineer &bull; Google
        </div>

        {/* location */}
        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> New York, United
          States
        </div>
      </div>
      <Divider mx={"xs"} size={"xs"} my={"xl"} />

      {/* Overview */}
      <div>
      <Tabs variant="outline" radius={'lg'} defaultValue={'about'}>
      <Tabs.List className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employees">Employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompanyJobs /></Tabs.Panel>
      <Tabs.Panel value="employees"><CompanyEmployees /></Tabs.Panel>
    </Tabs>
      </div>
    </div>
  );
};

export default CompanyProfile;
