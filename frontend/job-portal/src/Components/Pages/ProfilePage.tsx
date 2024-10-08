import { profile } from "../../Data/TalentData";
import Profile from "./ProfilePage/Profile";

const ProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] pt-5">
      <Profile {...profile} />
    </div>
  );
};

export default ProfilePage;
