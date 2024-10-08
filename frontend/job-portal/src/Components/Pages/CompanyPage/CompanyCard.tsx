import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
  return (
    <div>
      <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-4">
        <div className="flex gap-2 items-center">
          {/* image */}
          <div className="p-2 bg-mine-shaft-900 rounded-md">
            <img className="h-7" src={`/Icons/${props.name}.png`} alt="" />
          </div>

          {/* heading and subheading */}
          <div>
            {/* heading */}
            <div className="font-semibold">{props.name}</div>

            {/* subheading */}
            <div className="text-xs text-mine-shaft-300">
              {" "}
              {props.employees} Applicants
            </div>
          </div>

          <ActionIcon
            color="brightSun.4"
            variant="subtle"
            
          >
            <IconExternalLink />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
