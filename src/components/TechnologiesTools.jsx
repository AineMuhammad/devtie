import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Tooltip,
  useTheme,
} from "@mui/material";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TechIcon = ({ name, icon, index }) => {
  const theme = useTheme();
  const iconRef = useRef(null);
  const isInView = useInView(iconRef, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={iconRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: "100%" }}
    >
      <Paper
        elevation={isHovered ? 8 : 2}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: 200, md: 240 },
          height: { xs: 220, md: 260 },
          borderRadius: 4,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "translateY(3vh)" : "translateY(0)",
          position: "relative",
          overflow: "hidden",
          zIndex: isHovered ? 10 : 1,
          border: isHovered
            ? "none"
            : `1px solid ${theme.palette.primary.main}1A`,
          outline: "none",
          boxShadow: isHovered
            ? `0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px ${theme.palette.primary.main}33`
            : `0 4px 12px ${theme.palette.primary.main}14, 0 2px 4px ${theme.palette.primary.main}0A`,
          bgcolor: theme.palette.background.paper,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered
              ? `linear-gradient(135deg, ${theme.palette.primary.light}22 0%, ${theme.palette.primary.light}08 100%)`
              : theme.palette.background.paper,
            transition: "all 0.4s ease",
            zIndex: 0,
            border: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}1A, transparent)`,
            transition: "all 0.6s ease",
            zIndex: 1,
            border: "none",
          },
          "&:hover::after": {
            left: "100%",
            border: "none",
          },
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            mb: 3,
            color: isHovered
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
            transition: "all 0.4s ease",
            position: "relative",
            zIndex: 2,
          }}
          component={motion.div}
          animate={{
            rotate: isHovered ? [0, 5, 0, -5, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            duration: isHovered ? 0.6 : 0.3,
            ease: "easeInOut",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            color: isHovered
              ? theme.palette.primary.main
              : theme.palette.text.primary,
            transition: "color 0.4s ease",
            position: "relative",
            zIndex: 2,
            mb: 2,
            ...(isHovered && {
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }),
          }}
        >
          {name}
        </Typography>

        {/* Animated particles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{
                    position: "absolute",
                    width: `${Math.random() * 12 + 4}px`,
                    height: `${Math.random() * 12 + 4}px`,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    zIndex: 1,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </Paper>
    </motion.div>
  );
};

const TechnologiesTools = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const headerContainerRef = useRef(null);
  const horizontalRef = useRef(null);
  const pinWrapperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const headerContainer = headerContainerRef.current;
    const horizontalWrapper = horizontalRef.current;
    const pinWrapper = pinWrapperRef.current;

    // Initial state - header is invisible
    gsap.set(headerContainer, { opacity: 0, visibility: "hidden" });

    // Create a timeline for the heading animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      heading,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    ).fromTo(
      subheading,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.6"
    );

    // Function to ensure header is completely hidden
    const hideHeaderCompletely = () => {
      gsap.killTweensOf(headerContainer);
      gsap.set(headerContainer, { opacity: 0, visibility: "hidden" });
      document.body.classList.remove("in-tech-horizontal-scroll");
    };

    // Function to ensure header is completely visible
    const showHeaderCompletely = () => {
      gsap.killTweensOf(headerContainer);
      gsap.set(headerContainer, { opacity: 1, visibility: "visible" });
    };

    // Variable to track if we're in horizontal scroll mode
    let isInHorizontalScroll = false;

    // Show/hide header based on scroll position relative to the section
    const headerTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 100px", // When the top of the section is 100px from the top of the viewport
      end: "bottom top", // When the bottom of the section reaches the top of the viewport
      onEnter: () => {
        // Show header when entering the section
        showHeaderCompletely();
      },
      onLeave: () => {
        // Hide header when leaving the section (scrolling down)
        // Only if we're not in horizontal scroll
        if (!isInHorizontalScroll) {
          hideHeaderCompletely();
        }
      },
      onEnterBack: () => {
        // Show header when scrolling back up into the section
        showHeaderCompletely();
      },
      onLeaveBack: () => {
        // Hide header when scrolling back above the section
        hideHeaderCompletely();
      },
      // Add markers for debugging (remove in production)
      markers: false,
    });

    // Horizontal scroll effect
    if (horizontalWrapper && pinWrapper) {
      // Calculate the total width needed for scrolling with extra padding
      const totalScrollWidth = horizontalWrapper.scrollWidth;
      const extraPadding = window.innerWidth * 0.5; // Reduce extra padding

      // Create a timeline for horizontal scrolling
      const horizontalScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapper,
          start: "top 30%", // Start earlier
          end: () => `+=${totalScrollWidth + extraPadding}`, // Add less extra space
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false,
          onEnter: () => {
            // When entering horizontal scroll, set flag and show header
            isInHorizontalScroll = true;
            showHeaderCompletely();
            // Add class to body to indicate we're in horizontal scroll
            document.body.classList.add("in-tech-horizontal-scroll");
          },
          onLeave: () => {
            // When leaving horizontal scroll, reset flag and check if we should hide header
            isInHorizontalScroll = false;
            document.body.classList.remove("in-tech-horizontal-scroll");
            if (!headerTrigger.isActive) {
              hideHeaderCompletely();
            }
          },
          onEnterBack: () => {
            // When entering horizontal scroll from below, set flag and show header
            isInHorizontalScroll = true;
            showHeaderCompletely();
            // Add class to body to indicate we're in horizontal scroll
            document.body.classList.add("in-tech-horizontal-scroll");
          },
          onLeaveBack: () => {
            // When leaving horizontal scroll going up, reset flag
            isInHorizontalScroll = false;
            document.body.classList.remove("in-tech-horizontal-scroll");
          },
          onUpdate: (self) => {
            // During horizontal scroll, always show header
            if (self.isActive) {
              showHeaderCompletely();
              document.body.classList.add("in-tech-horizontal-scroll");
            }
          },
        },
      });

      horizontalScrollTl.to(horizontalWrapper, {
        x: () => -(totalScrollWidth - window.innerWidth),
        ease: "none",
      });
    }

    // Add a scroll listener as a fallback to ensure header visibility is correct
    const handleScroll = () => {
      // If we're in horizontal scroll or body has the class, always show header
      if (
        isInHorizontalScroll ||
        document.body.classList.contains("in-tech-horizontal-scroll")
      ) {
        showHeaderCompletely();
      }
      // Otherwise, follow the headerTrigger state
      else if (headerTrigger.isActive) {
        showHeaderCompletely();
      } else {
        hideHeaderCompletely();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
      // Remove class from body
      document.body.classList.remove("in-tech-horizontal-scroll");
    };
  }, []);

  const technologies = [
    {
      name: "React",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      ),
    },
    {
      name: "AWS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M2 12h20"></path>
          <path d="M7 5l-5 7 5 7"></path>
          <path d="M17 5l5 7-5 7"></path>
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M22 12.5c0-1.2-.5-2.3-1.3-3.1-.8-.8-1.9-1.3-3.1-1.3H5.5c-1.2 0-2.3.5-3.1 1.3-.8.8-1.3 1.9-1.3 3.1 0 1.2.5 2.3 1.3 3.1.8.8 1.9 1.3 3.1 1.3h12.1c1.2 0 2.3-.5 3.1-1.3.8-.8 1.3-1.9 1.3-3.1z"></path>
          <path d="M7 12.5h1"></path>
          <path d="M11 12.5h1"></path>
          <path d="M15 12.5h1"></path>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M16.5 9.4l-9-5.19"></path>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M12 2v20"></path>
          <path d="M17 5H7.5a2.5 2.5 0 0 0 0 5h9a2.5 2.5 0 0 1 0 5H7"></path>
        </svg>
      ),
    },
    {
      name: "GraphQL",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M12 2L2 7l10 5 10-5z"></path>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
    {
      name: "Flutter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="100%"
          height="100%"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
  ];

  return (
    <Box
      id="technologies"
      ref={sectionRef}
      sx={{
        py: 8,
        pt: 16,
        pb: 4,
        background: theme.palette.background.default,
        backgroundSize: "100% 200%",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}33, transparent)`,
        },
      }}
    >
      {/* Decorative elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.light}60 0%, ${theme.palette.primary.light}00 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        sx={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.main}44 0%, ${theme.palette.primary.main}00 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Header section - now with controlled visibility */}
      <Box
        ref={headerContainerRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          pt: 8,
          pb: 2,
          background: `linear-gradient(to bottom, ${theme.palette.background.default} 80%, ${theme.palette.background.default}00)`,
          pointerEvents: "none", // Allow clicking through the header
          opacity: 0, // Start invisible
          visibility: "hidden", // Start hidden
          ".in-tech-horizontal-scroll &": {
            opacity: "1 !important",
            visibility: "visible !important",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography
              ref={headingRef}
              variant="h2"
              component="h2"
              className="section-title"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  borderRadius: "2px",
                },
              }}
            >
              Technologies & Tools
            </Typography>
            <Typography
              ref={subheadingRef}
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: "md",
                mx: "auto",
                mt: 3,
                lineHeight: 1.6,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Leveraging cutting-edge technologies and tools to build robust,
              scalable, and high-performance solutions.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Empty space to account for the fixed header */}
      <Box sx={{ height: { xs: 80, md: 100 } }} />

      {/* Horizontal scrolling section */}
      <Box
        ref={pinWrapperRef}
        sx={{
          height: { xs: "50vh", md: "70vh" },
          position: "relative",
          overflow: "hidden",
          mt: { xs: 4, md: 6 }, // Reduce margin top
        }}
      >
        <Box
          ref={horizontalRef}
          sx={{
            display: "flex",
            position: "absolute",
            height: "100%",
            willChange: "transform",
            padding: "0 2rem",
            pr: { xs: "30%", md: "40%" },
          }}
        >
          {technologies.map((tech, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: 240, md: 300 },
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
              }}
            >
              <TechIcon name={tech.name} icon={tech.icon} index={index} />
            </Box>
          ))}
        </Box>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "280px", md: "320px" },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: { xs: "block", md: "block" }, // Show on mobile too
            backgroundColor: "rgba(7, 10, 15, 0.9)",
            backdropFilter: "blur(4px)",
            padding: "8px 16px",
            borderRadius: "30px",
            boxShadow:
              "0 4px 12px rgba(106, 53, 224, 0.12), 0 2px 4px rgba(106, 53, 224, 0.08)",
            border: "1px solid rgba(106, 53, 224, 0.15)",
          }}
        >
          <motion.div
            animate={{
              x: [0, 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: theme.palette.primary.main,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mr: 1,
                  fontWeight: 600,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Scroll Horizontally
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Animated background dots */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        {[...Array(40)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            sx={{
              position: "absolute",
              width: i % 3 === 0 ? 6 : 4,
              height: i % 3 === 0 ? 6 : 4,
              borderRadius: "50%",
              backgroundColor:
                i % 3 === 0
                  ? `${theme.palette.primary.main}15`
                  : `${theme.palette.primary.dark}15`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TechnologiesTools;
