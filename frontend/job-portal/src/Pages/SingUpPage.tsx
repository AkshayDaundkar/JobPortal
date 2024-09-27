import { IconAffiliate } from "@tabler/icons-react";
import Singup from "../SingupLogin/Singup";

const SingUpPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-[poppins] ">
      <div className="w-[100vw] h-[100vh] flex">
        <div className="w-1/2 h-full rounded-r-[200px] bg-mine-shaft-900 flex flex-col items-center gap-5 justify-center">
          <div className="flex-col gap-1 items-center text-bright-sun-400">
            <IconAffiliate className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold">Career Connect</div>
            <div className="text-2xl text-mine-shaft-200 font-semibold">
              Find Jobs that are Made for you
            </div>
          </div>
        </div>
        <Singup />
      </div>
    </div>
  );
};

export default SingUpPage;
