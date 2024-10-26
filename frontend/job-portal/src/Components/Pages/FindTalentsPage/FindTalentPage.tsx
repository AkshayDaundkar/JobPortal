import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Talents from "./Talents";

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider size="sm" mx="md" />
      <Talents />
    </div>
  );
};
export default FindTalentPage;
