import Marquee from "react-fast-marquee";
import { companies } from "../../../Data/Data";

const Companies = () => {
  return (
    <div className="mt-20 pb-5 text-center">
      <div className="text-4xl font-semibold text-mine-shaft-100 mb-14">
        Trusted by <span className="text-bright-sun-400">1000+</span> companies
      </div>
      <Marquee pauseOnHover>
        {companies.map((company, index) => (
          <div
            key={index}
            className="mx-8 py-1 px-2 hover:bg-mine-shaft-900  rounded-xl cursor-pointer"
          >
            <img
              src={`/companies/${company}.png`}
              alt={company}
              className="h-14"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
