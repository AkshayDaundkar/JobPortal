import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
//@ts-ignore
import DOMPurify from "dompurify";
import { card, desc, skills } from "../../Data/JobDescData";

const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-2/3">
      {/* Card */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          {/* image */}
          <div className="p-3 bg-mine-shaft-900 rounded-xl">
            <img
              className="h-14"
              src={`/Icons/Google.png`}
              alt={props.company}
            />
          </div>

          {/* heading and subheading */}
          <div>
            {/* heading */}
            <div className="font-semibold text-2xl">Google Engineer III</div>

            {/* subheading */}
            <div className="text-lg text-mine-shaft-300">
              {" "}
              Google &bull; 3 Days Ago &bull; 48 Applicants
            </div>
          </div>
        </div>

        {/* Apply and bookmark button */}
        <div className="flex flex-col gap-2 items-center">
          <Link to={props.edit ? "/" : "/apply-job"}>
            <Button size="sm" color="brightSun.4" variant="light">
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>
          {props.edit ? (
            <Button size="sm" color="red.4" variant="light">
              Delete
            </Button>
          ) : (
            <IconBookmark className="text-bright-sun-400 cursor-pointer" />
          )}
        </div>
      </div>
      <Divider my={"xl"} />

      {/* action icons */}
      <div className="flex justify-between">
        {card.map((item: any, index: any) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              className="!h-12 !w-12 "
              color={"brightSun.4"}
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
        {/* <div></div> */}
      </div>
      <Divider my={"xl"} />

      {/* Required Skills Section */}
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill: any, index: any) => (
            <ActionIcon
              key={index}
              className="!h-fit !w-fit font-medium !text-sm"
              p={"xs"}
              color={"brightSun.4"}
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my={"xl"} />

      {/* inner html element */}
      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider my={"xl"} />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        {/* Card */}
        <div className="flex justify-between mb-3 text-justify">
          <div className="flex gap-2 items-center">
            {/* image */}
            <div className="p-3 bg-mine-shaft-900 rounded-xl">
              <img
                className="h-14"
                src={`/Icons/Google.png`}
                alt={props.company}
              />
            </div>

            {/* heading and subheading */}
            <div>
              {/* heading */}
              <div className="font-semibold text-lg">Google</div>

              {/* subheading */}
              <div className="text-lg text-mine-shaft-300"> 10k+ Employees</div>
            </div>
          </div>

          {/* button */}

          <Link to={"/company"}>
            <Button color="brightSun.4" variant="light">
              Company Page
            </Button>
          </Link>
        </div>

        {/* company description */}
        <div className="text-mine-shaft-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eius
          aut. Consequuntur corrupti alias, dolorum eveniet animi dicta, error
          quae minus ipsam sed quisquam repellendus illo amet perferendis
          accusantium. Consequuntur impedit saepe iusto soluta ad, accusantium
          animi ab dolor aspernatur!
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
