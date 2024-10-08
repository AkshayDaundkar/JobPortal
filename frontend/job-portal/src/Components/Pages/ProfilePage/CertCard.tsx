import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const CertCard = (props: any) => {
  return (
    //   icon and heading
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        {/* image */}
        <div className="p-2 bg-mine-shaft-900 rounded-md">
          <img
            className="h-7"
            src={`/Icons/${props.issuer}.png`}
            alt={props.issuer}
          />
        </div>

        {/* heading and subheading */}
        <div>
          {/* heading */}
          <div className="font-semibold">{props.name}</div>
          <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
        </div>
      </div>

      {/* date */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">{props.issueDate}</div>
          <div className="text-sm text-mine-shaft-300">
            {props.certificateId}
          </div>
        </div>
        {props.edit&&<ActionIcon
            
            variant="subtle"
            color="red.8"
            size={"lg"}
          >
            <IconTrash stroke={1.5} className="h-4/5 w-4/5"/>
            
          </ActionIcon>}
      </div>
    </div>
  );
};

export default CertCard;
