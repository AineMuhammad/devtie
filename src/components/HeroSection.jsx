import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const decorationRef = useRef(null);
  const particlesRef = useRef(null);
  const devtieRef = useRef(null);
  const controls = useAnimation();
  const [hoveredLetter, setHoveredLetter] = useState(null);

  // Create animated particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  useEffect(() => {
    // Main animation timeline - faster animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial fade in - faster
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.inOut" }
    );

    // Animate the DEVTIE heading first
    if (devtieRef.current) {
      const letters = devtieRef.current.querySelectorAll(".devtie-letter");

      tl.fromTo(
        letters,
        {
          opacity: 0,
          y: -30,
          rotateY: 90,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );
    }

    // Animate the decorative elements - faster
    if (decorationRef.current) {
      const decorElements =
        decorationRef.current.querySelectorAll(".decor-element");

      tl.fromTo(
        decorElements,
        {
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    }

    // Animate the logo - faster
    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.3,
          y: 30,
          filter: "blur(5px)",
          rotation: 360,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          rotation: 0,
          duration: 1.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Add continuous subtle animation to logo
      gsap.to(logoRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Animate the title with character reveal - faster
    if (titleRef.current) {
      // Split text into characters
      const chars = titleRef.current.querySelectorAll(".char");

      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: 20,
          rotateY: 40,
          filter: "blur(2px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          filter: "blur(0px)",
          stagger: 0.015,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Animate the subtitle with a reveal effect - faster
    if (subtitleRef.current) {
      const words = subtitleRef.current.querySelectorAll(".word");

      tl.fromTo(
        words,
        {
          opacity: 0,
          y: 15,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      );
    }

    // Animate the CTA buttons - faster
    if (ctaRef.current) {
      const buttons = ctaRef.current.querySelectorAll("button");

      tl.fromTo(
        buttons,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }

    // Parallax scroll effect
    if (!isMobile) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (decorationRef.current) {
            gsap.to(decorationRef.current.querySelector(".decor-circle-1"), {
              y: progress * 100,
              x: progress * -50,
              duration: 0.1,
            });
            gsap.to(decorationRef.current.querySelector(".decor-circle-2"), {
              y: progress * -150,
              x: progress * 80,
              duration: 0.1,
            });
            gsap.to(decorationRef.current.querySelector(".decor-line"), {
              y: progress * 80,
              rotation: progress * 10,
              duration: 0.1,
            });
          }
          if (contentRef.current) {
            gsap.to(contentRef.current, {
              y: progress * 100,
              duration: 0.1,
            });
          }
        },
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  // Split text into characters and words for animation
  const splitTextIntoChars = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char"
        style={{
          display: "inline-block",
          opacity: 0,
          transform: "translateY(20px) rotateY(40deg)",
          textShadow: "none",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const splitTextIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word"
        style={{
          display: "inline-block",
          opacity: 0,
          marginRight: "0.5rem",
          transform: "translateY(15px)",
          filter: "blur(0px)",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {word}
      </span>
    ));
  };

  // Create interactive DEVTIE letters
  const renderDevtieLetters = () => {
    const letters = "DEVTIE".split("");
    return letters.map((letter, index) => (
      <Typography
        key={index}
        className="devtie-letter"
        component="span"
        onMouseEnter={() => setHoveredLetter(index)}
        onMouseLeave={() => setHoveredLetter(null)}
        sx={{
          display: "inline-block",
          fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
          fontWeight: 800,
          mx: { xs: 0.5, md: 1 },
          cursor: "grab",
          fontFamily: "'Nunito', sans-serif",
          transition: "all 0.3s ease",
          position: "relative",
          opacity: 0,
          background:
            hoveredLetter === index
              ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
              : `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.text.primary})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transform:
            hoveredLetter === index ? "translateY(-5px) scale(1.1)" : "none",
          filter: hoveredLetter === index ? "brightness(1.2)" : "none",
          "&::after":
            hoveredLetter === index
              ? {
                  content: '""',
                  position: "absolute",
                  bottom: "-5px",
                  left: "0",
                  width: "100%",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, transparent, #7C3AED, transparent)",
                  animation: "shimmer 1.5s infinite",
                }
              : {},
          "@keyframes shimmer": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(100%)" },
          },
          "&:active": {
            cursor: "grabbing",
            transform: "translateY(0) scale(0.95)",
          },
        }}
      >
        {letter}
      </Typography>
    ));
  };

  return (
    <Box
      id="hero"
      ref={heroRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background: theme.palette.background.gradient,
        overflow: "hidden",
        pt: { xs: 10, md: 0 },
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Background grid pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/grid-pattern.svg')",
          backgroundSize: "cover",
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      {/* Animated particles */}
      <Box
        ref={particlesRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        {particles.map((particle) => (
          <Box
            key={particle.id}
            component={motion.div}
            sx={{
              position: "absolute",
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background:
                particle.id % 5 === 0
                  ? `rgba(124, 58, 237, ${0.1 + Math.random() * 0.3})`
                  : particle.id % 5 === 1
                  ? `rgba(139, 92, 246, ${0.1 + Math.random() * 0.2})`
                  : particle.id % 5 === 2
                  ? `rgba(167, 139, 250, ${0.1 + Math.random() * 0.2})`
                  : particle.id % 5 === 3
                  ? `rgba(196, 181, 253, ${0.1 + Math.random() * 0.15})`
                  : `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow:
                particle.id % 3 === 0
                  ? `0 0 ${particle.size * 2}px rgba(124, 58, 237, 0.3)`
                  : "none",
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? -50 : 50, 0],
              x: [0, Math.random() > 0.5 ? -30 : 30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </Box>

      {/* Decorative elements */}
      <Box
        ref={decorationRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Large gradient circle */}
        <Box
          className="decor-element decor-circle-1"
          sx={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: { xs: "300px", md: "500px" },
            height: { xs: "300px", md: "500px" },
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.palette.primary.main}1A 0%, ${theme.palette.primary.main}00 70%)`,
            filter: "blur(60px)",
          }}
        />

        {/* Second gradient circle */}
        <Box
          className="decor-element decor-circle-2"
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "-10%",
            width: { xs: "250px", md: "400px" },
            height: { xs: "250px", md: "400px" },
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.palette.primary.light}1A 0%, ${theme.palette.primary.light}00 70%)`,
            filter: "blur(50px)",
          }}
        />

        {/* Decorative line */}
        <Box
          className="decor-element decor-line"
          sx={{
            position: "absolute",
            top: "30%",
            right: "15%",
            width: { xs: "150px", md: "300px" },
            height: "2px",
            background: `linear-gradient(90deg, ${theme.palette.primary.main}00, ${theme.palette.primary.main}66, ${theme.palette.primary.main}00)`,
            transform: "rotate(-30deg)",
          }}
        />
      </Box>

      {/* Logo in the middle */}
      <Box
        ref={logoRef}
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: { xs: 280, md: 380 },
          height: { xs: 280, md: 380 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "-10px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(106, 53, 224, 0.08), rgba(124, 83, 240, 0.04))",
            filter: "blur(20px)",
            opacity: 0.8,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(106, 53, 224, 0.25)",
            animation: "pulse 3s infinite ease-in-out",
          },
          "@keyframes pulse": {
            "0%": { transform: "scale(0.95)", opacity: 0.6 },
            "50%": { transform: "scale(1.05)", opacity: 0.25 },
            "100%": { transform: "scale(0.95)", opacity: 0.6 },
          },
        }}
      >
        {/* Animated rings */}
        {[...Array(3)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `1px solid rgba(124, 58, 237, ${0.2 - i * 0.05})`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* DevTie Logo */}
        <Box
          component="img"
          src="/logo.svg"
          alt="DevTie Logo"
          sx={{
            width: { xs: 180, md: 240 },
            height: "auto",
            filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.5))",
            zIndex: 2,
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/devtie.png";
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          ref={contentRef}
        >
          {/* Left content column */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Box
              sx={{
                maxWidth: "600px",
                mx: { xs: "auto", md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h1"
                ref={titleRef}
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3.5rem",
                    md: "4rem",
                    lg: "5rem",
                  },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  fontFamily: "'Nunito', sans-serif",
                  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "none",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  letterSpacing: "-0.02em",
                  textRendering: "optimizeLegibility",
                }}
              >
                {splitTextIntoChars("Transforming Ideas Into Digital Reality")}
              </Typography>

              <Typography
                variant="h5"
                ref={subtitleRef}
                sx={{
                  mb: 5,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: { xs: "100%", md: "90%" },
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  color: theme.palette.text.secondary,
                  letterSpacing: "0.01em",
                  fontFamily: "'Nunito', sans-serif",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                {splitTextIntoWords(
                  "We build innovative software solutions that empower businesses to thrive in the digital age with cutting-edge technology and exceptional design."
                )}
              </Typography>

              <Box
                ref={ctaRef}
                sx={{
                  display: "flex",
                  gap: 3,
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: { xs: 6, md: 0 },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: "1.1rem",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    background: `linear-gradient(135deg, #6A35E0, #7C53F0)`,
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px -5px rgba(106, 53, 224, 0.4)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                      transition: "all 0.6s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 30px -5px rgba(106, 53, 224, 0.5)",
                      "&::before": {
                        left: "100%",
                      },
                    },
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    const servicesSection = document.getElementById("services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: "1.1rem",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    borderRadius: "12px",
                    borderWidth: "2px",
                    borderColor: "rgba(124, 58, 237, 0.6)",
                    color: "#A78BFA",
                    position: "relative",
                    overflow: "hidden",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "0%",
                      background: "rgba(124, 58, 237, 0.08)",
                      transition: "all 0.3s ease",
                      zIndex: -1,
                    },
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#8B5CF6",
                      "&::after": {
                        height: "100%",
                      },
                    },
                  }}
                >
                  Services
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right column - removed logo since it's now in the middle */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }} />
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "20px", md: "30px" },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: { xs: "none", md: "block" },
          backgroundColor: "rgba(10, 1, 24, 0.8)",
          backdropFilter: "blur(4px)",
          padding: "8px 16px",
          borderRadius: "30px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(106, 53, 224, 0.15)",
        }}
      >
        <motion.div
          animate={{
            y: [0, 5, 0],
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
                fontWeight: 500,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Scroll Down
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
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
