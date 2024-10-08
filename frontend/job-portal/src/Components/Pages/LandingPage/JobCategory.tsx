import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="flex flex-col gap-3 mt-20 pb-5 text-center">
      {/* Title */}
      <div className="text-4xl font-semibold text-mine-shaft-100 mb-3">
        Browse <span className="text-bright-sun-400">Job</span> category
      </div>

      <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-5">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>

      <Carousel
        slideSize="22%"
        slideGap="md"
        loop
        dragFree
        nextControlIcon={<IconArrowRight className=" h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className=" h-8 w-8" />}
        className="[&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 
        hover:[&_button]:opacity-100"
      >
        {/* job carousel */}
        {jobCategory.map((category, index) => (
          <Carousel.Slide>
            <div
              key={index}
              className="flex flex-col gap-2 items-center w-64 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 my-5 transition duration-150 ease-in-out"
            >
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.name}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.desc}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {category.jobs}+ new jobs posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
