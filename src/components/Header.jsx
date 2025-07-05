import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  useTheme,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "why-choose-us",
        "services",
        "technologies",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Add offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: `${theme.palette.background.paper}CC`,
        backdropFilter: "blur(10px)",
        borderBottom: "none",
        borderTop: "none",
        borderRadius: 0,
        boxShadow: `0 4px 20px -4px rgba(106, 53, 224, 0.15)`,
        zIndex: 1200,
        transition: "all 0.3s ease",
        "&:hover": {
          bgcolor: `${theme.palette.background.paper}`,
          boxShadow: `0 4px 25px -4px rgba(106, 53, 224, 0.25)`,
        },
        "&::before": {
          display: "none",
        },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: "64px",
            transition: "all 0.3s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Home", href: "#hero" },
              { label: "Why Us", href: "#why-choose-us" },
              { label: "Services", href: "#services" },
              { label: "Technologies", href: "#technologies" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Button
                key={item.href}
                color="inherit"
                href={item.href}
                sx={{
                  color:
                    activeSection === item.href.substring(1)
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  fontWeight: 500,
                  px: 3,
                  py: 2,
                  fontSize: "0.8rem",
                  position: "relative",
                  ...(activeSection === item.href.substring(1) && {
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }),
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "12px",
                    left: "50%",
                    width:
                      activeSection === item.href.substring(1) ? "20px" : "0px",
                    height: "2px",
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  },
                  "&:hover": {
                    color: theme.palette.primary.main,
                    bgcolor: "transparent",
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    "&::after": {
                      width: "20px",
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
