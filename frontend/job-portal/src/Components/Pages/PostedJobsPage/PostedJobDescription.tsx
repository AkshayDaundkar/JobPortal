import { Badge, Divider, Tabs } from "@mantine/core";
import JobDesc from "../JobDescription/JobDesc";
import { talents } from "../../../Data/TalentData";
import TalentCard from "../FindTalentsPage/TalentCard";

const PostedJobDescription = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      {/* Role */}
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" ml={"sm"} size="sm" color="brightSun.4">
          Badge
        </Badge>
      </div>

      {/* Location */}
      <div className="font-medium text-mine-shaft-300 mb-5">
        New York, United States
      </div>

      <div>
        <Tabs
          autoContrast
          variant="pills"
          radius={"lg"}
          defaultValue={"overview"}
        >
          {/* Tabs */}
          <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 mb-5 [&_button]:p-3 [&_button]:font-medium [&_button]:text-sm">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Divider size={"xs"} my={"md"} />

          {/* Job Description */}
          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc edit />
          </Tabs.Panel>

          {/* Applicants */}
          <Tabs.Panel value="applicants">
            <div className="flex mt-10 flex-wrap gap-5 justify-around">
              {talents.map(
                (talent, index) =>
                  index < 6 && <TalentCard key={index} {...talent} schedule />
              )}
            </div>
          </Tabs.Panel>

          {/* Invited */}
          <Tabs.Panel value="invited">
            <div className="flex mt-10 flex-wrap gap-5  justify-around">
              {talents.map(
                (talent, index) =>
                  index < 6 && <TalentCard key={index} {...talent} invited />
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDescription;
