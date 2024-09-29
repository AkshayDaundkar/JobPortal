import { Avatar, Indicator } from "@mantine/core";
import { IconAffiliate, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-black bg-mine-shaft-950 text-white h-20 px-6 flex justify-between items-center font-['poppins']">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAffiliate className="h-8 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">Career Connect</div>
      </div>
      <NavLinks />
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2">
          <div>Akshay</div>
          <div>
            <Avatar src="avatar.png" alt="it's me" />
          </div>
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" size={8} offset={6} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};
export default Header;
