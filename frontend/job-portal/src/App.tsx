import { createTheme, Divider, MantineProvider } from "@mantine/core";

// Mantine Styles
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./Components/Pages/FindJobs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Pages/LandingPage/Footer";
import FindTalents from "./Components/Pages/FindTalents";
import PostJobPage from "./Components/Pages/PostJobPage";
import JobDescPage from "./Components/Pages/JobDescription/JobDescPage";
import TalentProfilePage from "./Components/Pages/FindTalentsPage/TalentProfilePage/TalentProfilePage";
import ApplyJobPage from "./Components/Pages/ApplyJobPage";
import CompanyPage from "./Components/Pages/CompanyPage";
import PostedJobsPage from "./Components/Pages/PostedJobsPage";
import JobHistoryPage from "./Components/Pages/JobHistoryPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import ProfilePage from "./Components/Pages/ProfilePage";

import "@mantine/tiptap/styles.css";

function App() {
  const theme = createTheme({
    colors: {
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
    fontFamily: "poppins,sans-serif",
    focusRing: "never",
    primaryColor: "brightSun",
    primaryShade: 4,
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider size={"xs"} />
          <Routes>
            <Route path="/find-talent" element={<FindTalents />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/jobs" element={<JobDescPage />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/posted-jobs" element={<PostedJobsPage />} />
            <Route path="/job-history" element={<JobHistoryPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
