import {
  IconAffiliate,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (
    <div className="pt-20 pb-5 flex gap-5 justify-around  bg-mine-shaft-950 font-['poppins']">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-3 items-center text-bright-sun-400">
          <IconAffiliate className="h-6 w-6" stroke={2.5} />
          <div className="text-xl font-semibold">Career Connect</div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          Job Portal with user profiles, skills, updates, certifications,work
          experience , admin job postings
        </div>
        <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer  hover:[&>div]:bg-mine-shaft-700 ">
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandGithub />
          </div>
        </div>
      </div>

      {footerLinks.map((data, index) => (
        <div key={index}>
          <div className="text-lg font-semibold mb-4 text-bright-sun-400 ">
            {data.title}
          </div>
          {data.links.map((link, index) => (
            <div
              key={index}
              className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
            >
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
