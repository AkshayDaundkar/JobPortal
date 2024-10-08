import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "./CompanyPage/CompanyProfile";
import SimilarCompanies from "./CompanyPage/SimilarCompanies";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Button
        leftSection={<IconArrowLeft size={20} />}
        color="brightSun.4"
        variant="light"
        my={'md'}
        mx={'md'}
        onClick={()=>{navigate(-1)}}
      >
        Back
      </Button>

      <div className="flex gap-5 justify-around">
        <CompanyProfile />
        <SimilarCompanies />
      </div>
    </div>
  );
};

export default CompanyPage;
