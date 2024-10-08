import { Indicator } from "@mantine/core";
import { IconBell, IconAffiliate, IconSettings } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();
  // eslint-disable-next-line
  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="w-full bg-mine-shaft-950 h-20 text-white flex px-6 justify-between items-center font-['poppins']">
      <div className="flex gap-3 text-bright-sun-400">
        <IconAffiliate className="h-8 w-8" stroke={2} />
        <Link to="/">
          <div className="text-3xl font-semibold">CareerConnect</div>
        </Link>
      </div>

      <NavLinks />

      <div className="flex gap-5 items-center">
        <ProfileMenu />

        {/* Settings logo */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>

        {/* Bell logo */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" withBorder processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
