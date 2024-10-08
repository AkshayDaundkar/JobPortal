import { Tabs } from "@mantine/core";
import { activeJobs, drafts } from "../../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJobs = () => {
  return (
    <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div>
        <Tabs
          autoContrast
          variant="pills"
          radius={"sm"}
          defaultValue={"active"}
        >
          <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900">
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="drafts">Drafts [2]</Tabs.Tab>
          </Tabs.List>

          {/* Active Jobs */}
          <Tabs.Panel value="active">
            <div className="flex flex-col gap-3 mt-5">
              {activeJobs.map(
                (job, index) =>
                  index < 4 && <PostedJobCard key={index} {...job} />
              )}
            </div>
          </Tabs.Panel>

          {/* Drafts */}
          <Tabs.Panel value="drafts">
            <div className="flex flex-col gap-3 mt-5">
              {drafts.map((job, index) => (
                <PostedJobCard key={index} {...job} />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobs;
