import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJobs = () => {
  return (
    <div className="flex items-center px-16">
      {/* Left section */}
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400 gap-3 leading-tight">
          Find your <span>Dream</span> <span>Job</span> with Us.
        </div>

        <div className="text-mine-shaft-300 text-lg">
          Good life begins with a good company. Start explore thousands of jobs
          in one place.
        </div>

        {/* search fields */}
        <div className="flex gap-3 mt-5">
          <TextInput
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
            className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
          />
          <TextInput
            variant="unstyled"
            label="Job Type"
            placeholder="Fulltime"
            className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
          />
          <div className=" flex items-center justify-center h-full w-20 text-bright-sun-400 p-2 hover:text-bright-sun-500 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="Boy.png" alt="job image" />

          {/* card1 */}
          <div className="absolute top-[50%] -right-10 w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center text-mine-shaft-100">10k+ got Jobs</div>
            <Avatar.Group>
              <Avatar src="avatar.png" />
              <Avatar src="avatar1.png" />
              <Avatar src="avatar2.png" />
              <Avatar>+9k</Avatar>
            </Avatar.Group>
          </div>

          {/* card2 */}
          <div className="flex flex-col gap-3 absolute top-[28%] -left-5 w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="flex gap-2 items-center">
                <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                    <img src="Google.png" alt="google" />
                </div>
                <div className="text-sm text-mine-shaft-100">
                    <div>Software Engineer</div>
                    <div className="text-mine-shaft-200 text-xs">New York</div>
                </div>
            </div>
            <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around">
                <span>1 day ago</span>
                <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJobs;
