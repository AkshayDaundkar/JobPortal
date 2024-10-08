import { Avatar } from "@mantine/core";
import { work } from "../../../Data/Data";

const Working = () => {
  return (
    <div className="flex flex-col gap-3 mt-20 pb-5 text-center">
      {/* Title */}
      <div className="text-4xl font-semibold text-mine-shaft-100 mb-3">
        How it <span className="text-bright-sun-400">works</span>
      </div>

      {/* description */}
      <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-10">
        Effortlessly navigate through the process and land your dream job.
      </div>

      {/* content */}
      <div className="flex items-center justify-around">
        {/* Left side image*/}
        <div className="relative">
          <img src="Working/Girl.png" alt="girl" className="w-[30rem]" />
          <div className="w-36 top-[15%] right-0 absolute flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
            <Avatar className="!h-16 !w-16" src={"avatar1.png"} alt="it's me" />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% completed</div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-10">
          {/* Work items */}
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-3 bg-bright-sun-300 rounded-full">
                <img
                  className="h-12 w-12"
                  src={`Working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.desc}.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
