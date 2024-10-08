import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  // modal hook - by mantine
  const [opened, { open, close }] = useDisclosure(false);

  const [value, setValue] = useState<Date | null>(null);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-200 ease-in-out">
      {/* icon and heading */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          {/* image */}
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar
              size={"lg"}
              className="h-15 w-15"
              src={`${props.image}.png`}
              alt=""
            />
          </div>

          {/* heading and subheading */}
          <div>
            {/* heading */}
            <div className="font-semibold text-lg">{props.name}</div>

            {/* subheading */}
            <div className="text-xs text-mine-shaft-300">
              {" "}
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>

        {/* bookmark button */}
        <div>
          <IconHeart className="text-mine-shaft-300 cursor-pointer" />
        </div>
      </div>

      {/* experience */}
      <div className="flex gap-2">
        {props.topSkills?.map((skill: any, index: any) => (
          <div
            className="py-1 p-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* description */}
      <div>
        <Text
          lineClamp={3}
          className="!text-xs !text-justify !text-mine-shaft-300"
        >
          {props.about}
        </Text>
      </div>

      <Divider size={"xs"} color="mineShaft.7" />

      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between text-mine-shaft-400">
          {/* salary */}
          <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
          </div>

          {/* posted date */}
          <div className="flex gap-1 text-xs items-center">
            <IconMapPin stroke={1.5} className="h-5 w-5" />
            {props.location}
          </div>
        </div>
      )}

      <Divider size={"xs"} color="mineShaft.7" />

      {/* Profile and Schedule buttons */}
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {props.invited && (
          <>
            <div>

              <Button color="brightSun.4" fullWidth variant="outline">
                Accept
              </Button>
            </div>
            
            <div>
              <Button color="brightSun.4" fullWidth variant="light">
                Reject
              </Button>
            </div>
          </>
        )}
        
        {!props.invited && (
          <>
          <Link to={"/talent-profile"}>
          <Button color="brightSun.4" fullWidth variant="outline">
            Profile
          </Button>
        </Link>
        <div>
          {props.schedule ? (
            <Button
              rightSection={<IconCalendarMonth className="w-5 h-5" />}
              color="brightSun.4"
              fullWidth
              variant="light"
              onClick={open}
            >
              Schedule
            </Button>
          ) : (
            <Button color="brightSun.4" fullWidth variant="light">
              Message
            </Button>
          )}
        </div>
        </>
        )}

        
      </div>

      {/* Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        {/* Date Input */}
        <div className="flex flex-col gap-4">
          <DateInput
            minDate={new Date()}
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button color="brightSun.4" fullWidth variant="light">
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
