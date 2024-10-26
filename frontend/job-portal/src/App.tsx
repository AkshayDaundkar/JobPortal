import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import HomePage from "./Components/Pages/HomePage";
import FindJobs from "./Components/Pages/FindJobs";
import FindTalentPage from "./Components/Pages/FindTalentsPage/FindTalentPage";
import TalentProfilePage from "./Components/Pages/FindTalentsPage/TalentProfilePage/TalentProfilePage";
import PostJobPage from "./Components/Pages/PostJobPage";
import JobDescPage from "./Components/Pages/JobDescription/JobDescPage";
import ApplyJobPage from "./Components/Pages/ApplyJobPage";
import CompanyPage from "./Components/Pages/CompanyPage";
import PostedJobsPage from "./Components/Pages/PostedJobsPage";
import JobHistoryPage from "./Components/Pages/JobHistoryPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Pages/LandingPage/Footer";
import { Notifications } from "@mantine/notifications";
import { Provider, useSelector } from "react-redux";
import Store from "./Store";
import AppRoutes from "./Components/Pages/AppRoutes";

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins ,sans-serif",
    primaryColor: "bright-sun",
    primaryShade: 4,
    colors: {
      "bright-sun": [
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

      "mine-shaft": [
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
  });
  return (
    <Provider store={Store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
        <AppRoutes />
      </MantineProvider>
    </Provider>
  );
}

export default App;
