import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { Divider } from "@mantine/core";
import Footer from "./LandingPage/Footer";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import PostJobPage from "./PostJobPage";
import TalentProfilePage from "./FindTalentsPage/TalentProfilePage/TalentProfilePage";
import JobHistoryPage from "./JobHistoryPage";
import PostedJobsPage from "./PostedJobsPage";
import CompanyPage from "./CompanyPage";
import FindTalentPage from "./FindTalentsPage/FindTalentPage";
import ApplyJobPage from "./ApplyJobPage";
import JobDescPage from "./JobDescription/JobDescPage";
import FindJobs from "./FindJobs";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider size="xs" mx="md" />
        <Routes>
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/jobs" element={<JobDescPage />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/posted-job" element={<PostedJobsPage />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route path="/talent-profile" element={<TalentProfilePage />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUpPage />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <SignUpPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
