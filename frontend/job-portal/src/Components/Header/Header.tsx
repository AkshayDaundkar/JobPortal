import { IconAffiliate, IconBell, IconSettings } from "@tabler/icons-react";
import { Button, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state: any) => state.user);
  const location = useLocation();
  return location.pathname !== "/signup" && location.pathname !== "/login" ? (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAffiliate className="h-10 w-10" stroke={1.8} />
        <div className="text-3xl font-semibold">CareerConnect</div>
      </div>

      {NavLinks()}

      <div className="flex items-center gap-3">
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="bright-sun.4">
              Login
            </Button>
          </Link>
        )}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="bright-sun.4" size={8} offset={6} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>

        {/*<div className="bg-mine-shaft-900 p-1.5 rounded-full"> 
                    <IconSettings stroke={1.5}/>
                </div>*/}
      </div>
    </div>
  ) : null;
};

export default Header;
