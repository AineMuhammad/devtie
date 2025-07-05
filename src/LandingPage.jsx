import React, { useEffect } from "react";
import {
  useScrollTrigger,
  Fab,
  Zoom,
  Box,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import TechnologiesTools from "./components/TechnologiesTools";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StaffAugmentation from "./components/StaffAugmentation";
import theme from "./theme";

// Scroll to top component
function ScrollToTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const LandingPage = () => {
  // Add smooth scrolling for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          const headerHeight = 64; // Fixed header height
          window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - headerHeight, // Adjust for header height
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="landing-page">
        <div id="back-to-top-anchor" />
        <Header />
        <main style={{ paddingTop: "64px" }}>
          <HeroSection />
          <WhyChooseUs />
          <OurServices />
          <StaffAugmentation />
          <TechnologiesTools />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop>
          <Fab
            color="primary"
            size="medium"
            aria-label="scroll back to top"
            sx={{
              boxShadow:
                "0 10px 15px -3px rgba(124, 58, 237, 0.3), 0 4px 6px -2px rgba(124, 58, 237, 0.2)",
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollToTop>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
