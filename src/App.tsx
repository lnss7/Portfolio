import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/tailwind.css";
import theme from "./theme";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import CertificatesSection from "./sections/CertificatesSection";
import LanguagesSection from "./sections/LanguagesSection";
import SoftSkillsSection from "./sections/SoftSkillsSection";
import ContactSection from "./sections/ContactSection";
import Header from "./layout/Header";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <EducationSection />
    <CertificatesSection />
    <SkillsSection />
    <LanguagesSection />
    <SoftSkillsSection />
    <ContactSection />
  </ThemeProvider>
);

export default App;
