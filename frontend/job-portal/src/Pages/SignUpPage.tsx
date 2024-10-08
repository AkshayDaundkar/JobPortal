import { IconAffiliate } from "@tabler/icons-react";
import SignUp from "./SignUpLogin/SignUp";
import Login from "./SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
      <div
        className={`w-[100vw] h-[100vh] flex transition-all ease-in-out duration-1000 [&>*]:flex-shrink-0 ${
          location.pathname == "/signup"
            ? "-translate-x-[50%]"
            : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`w-1/2 h-full transition-all ease-in-out duration-1000 bg-mine-shaft-900 ${
            location.pathname == "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          } flex flex-col items-center gap-3 justify-center`}
        >
          {/* Logo and Title */}
          <div className="flex gap-3 items-center text-bright-sun-400">
            <IconAffiliate className="h-16 w-16" stroke={2} />
            <div className="text-6xl font-semibold">CareerConnect</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find the Job made for you.
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
