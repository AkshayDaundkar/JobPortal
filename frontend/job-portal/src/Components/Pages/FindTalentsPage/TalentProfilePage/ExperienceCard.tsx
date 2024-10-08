
const ExperienceCard = (props:any) => {
  return (
    <div className="flex flex-col gap-2">
      {/* icon and heading */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          {/* image */}
          <div className="p-2 bg-mine-shaft-900 rounded-md">
            <img
              className="h-7"
              src={`/Icons/${props.company}.png`}
              alt={props.company}
            />
          </div>

          {/* heading and subheading */}
          <div>
            {/* heading */}
            <div className="font-semibold">{props.title}</div>

            {/* subheading */}
            <div className="text-sm text-mine-shaft-300">
              {" "}
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>

        {/* date */}
        <div className="text-sm text-mine-shaft-300">
          {props.startDate} - {props.endDate}
        </div>
      </div>

      {/* description */}
      <div className="text-sm text-mine-shaft-300 text-justify">
       {props.description}
      </div>
    </div>
  );
};

export default ExperienceCard;
