import { Button, Divider, Text } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobListCard = (props: any) => {
  return (
    <Link
      to={"/jobs"}
      className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-200 ease-in-out"
    >
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
            <div className="font-semibold">{props.jobTitle}</div>

            {/* subheading */}
            <div className="text-xs text-mine-shaft-300">
              {" "}
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>

        {/* bookmark button */}
        <div>
          {props.saved ? (
            <IconBookmarkFilled className="text-bright-sun-400 cursor-pointer" />
          ) : (
            <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
          )}
        </div>
      </div>

      {/* experience */}
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-sm pb-2">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      {/* description */}
      <div>
        <Text
          lineClamp={3}
          className="!text-xs !text-justify !text-mine-shaft-300"
        >
          {props.description}
        </Text>
      </div>

      <Divider size={"xs"} color="mineShaft.7" />

      {/* pay */}
      <div className="flex justify-between text-mine-shaft-400">
        {/* salary */}
        <div className="font-semibold text-mine-shaft-200">
          ₹{props.package}
        </div>

        {/* posted date */}
        <div className="flex gap-1 text-xs items-center">
          <IconClockHour3 stroke={1.5} className="h-5 w-5" />
          {props.applied
            ? "Applied "
            : props.offered
            ? "Interviewed "
            : "Posted "}
          {props.postedDaysAgo} days ago
        </div>
      </div>

      {/* for Offered Tab */}
      {props.offered && (
        <div>
          <Divider size={"xs"} color="mineShaft.7" />
          <div className="flex gap-2 mt-3">
            <Button color="brightSun.4" fullWidth variant="outline">
              Accept
            </Button>

            <Button color="brightSun.4" fullWidth variant="light">
              Reject
            </Button>
          </div>
        </div>
      )}

      {props.interviewing &&
        <div >
            <Divider size={"xs"} color="mineShaft.7" />
            <div className="flex gap-2 mt-2">
            <IconCalendarMonth stroke={1.5} className=" text-bright-sun-400" />
            Sun, 25 Aug &bull; <span className="text-mine-shaft-400">10 AM - 11 AM</span>
            </div>
        </div>
      }
    </Link>
  );
};

export default JobListCard;
