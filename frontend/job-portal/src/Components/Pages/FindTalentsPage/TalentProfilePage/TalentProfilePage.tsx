import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { profile } from "../../../../Data/TalentData";
import Profile from "./Profile";
import RecommendTalent from "./RecommendTalent";

const TalentProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Link to={"/find-talent"} className="my-5 inline-block p-4">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-5 justify-around">
        {/* Left Section */}
        <Profile {...profile} />

        {/* Right Section */}
        <RecommendTalent />
      </div>
    </div>
  );
};

export default TalentProfilePage;
