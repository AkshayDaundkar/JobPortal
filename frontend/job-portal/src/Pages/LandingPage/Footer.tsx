import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconAffiliate,
} from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="pt-20 pb-5 flex gap-5 justify-around font-['poppins'] bg-mine-shaft-950">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-3 text-bright-sun-400">
          {/* Logo */}
          <IconAffiliate className="h-6 w-6" stroke={2} />
          <div className="text-xl font-semibold">CareerConnect</div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          Job portal with user profiles, skill updates, certifications, work
          experience and admin job postings.
        </div>

        {/* social links */}
        <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandX />
          </div>
        </div>
      </div>

      {footerLinks.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="text-lg font-semibold mb-4 text-bright-sun-400">
            {item.title}
          </div>
          {item.links.map((link, index) => (
            <div
              key={index}
              className="text-mine-shaft-300 mb-1 text-sm hover:text-bright-sun-400 cursor-pointer
                        hover:translate-x-2 transition duration-300 ease-in-out"
            >
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Footer;
