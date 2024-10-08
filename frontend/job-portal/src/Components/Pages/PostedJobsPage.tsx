import { Divider } from "@mantine/core";
import PostedJobDescription from "./PostedJobsPage/PostedJobDescription";
import PostedJobs from "./PostedJobsPage/PostedJobs";

function PostedJobsPage() {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4">
      <div className="flex gap-5 ">
        <PostedJobs />
        <Divider size={"xs"} mx={"md"} />
        <PostedJobDescription />
      </div>
    </div>
  );
}

export default PostedJobsPage;
