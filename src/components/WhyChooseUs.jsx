import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  useTheme,
} from "@mui/material";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, description, icon, index }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ height: "100%" }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
        zIndex: 10,
      }}
    >
      <Card
        sx={{
          height: "100%",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            boxShadow: theme.shadows[10],
            "& .card-shine": {
              transform: "translateX(100%)",
            },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover::before": {
            opacity: 1,
          },
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Box
          className="card-shine"
          sx={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(157, 92, 255, 0.2), transparent)",
            transition: "transform 0.5s ease",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: `${theme.palette.primary.main}1A`,
                color: theme.palette.primary.main,
                width: 56,
                height: 56,
                transition: "all 0.3s ease",
                boxShadow: `0 4px 12px ${theme.palette.primary.main}26`,
                "& svg": {
                  transition: "transform 0.3s ease",
                },
                ".MuiCard-root:hover &": {
                  bgcolor: `${theme.palette.primary.main}26`,
                  transform: "scale(1.1)",
                },
                ".MuiCard-root:hover & svg": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {icon}
            </Avatar>
          }
          title={
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: 2,
                  bgcolor: "primary.main",
                  transition: "width 0.3s ease",
                },
                ".MuiCard-root:hover &::after": {
                  width: "100%",
                },
              }}
            >
              {title}
            </Typography>
          }
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;

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

    // Add a parallax effect to the section
    gsap.to(section, {
      backgroundPosition: "50% 30%",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      title: "Innovative Solutions",
      description:
        "We leverage cutting-edge technologies to create innovative solutions that solve complex business challenges.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "Expert Team",
      description:
        "Our team of experienced developers, designers, and project managers ensures high-quality delivery on every project.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
    },
    {
      title: "Agile Methodology",
      description:
        "We follow agile methodologies to deliver projects efficiently, with regular updates and adaptability to changing requirements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize understanding your business needs and delivering solutions that exceed your expectations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      title: "Scalable Architecture",
      description:
        "Our solutions are built with scalability in mind, allowing your business to grow without technological constraints.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      title: "Ongoing Support",
      description:
        "We provide continuous support and maintenance to ensure your digital solutions remain effective and up-to-date.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <Box
      id="why-choose-us"
      ref={sectionRef}
      sx={{
        py: 12,
        pt: 16,
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
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}4D, transparent)`,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}4D, transparent)`,
        },
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.light}33 0%, ${theme.palette.primary.light}00 70%)`,
          filter: "blur(50px)",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.main}33 0%, ${theme.palette.primary.main}00 70%)`,
          filter: "blur(50px)",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            ref={headingRef}
            variant="h2"
            component="h2"
            className="section-title"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 3,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                borderRadius: "2px",
              },
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            ref={subheadingRef}
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "md",
              mx: "auto",
              mt: 4,
              lineHeight: 1.8,
            }}
          >
            We're committed to delivering exceptional value through our
            expertise, innovation, and dedication to your success.
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          sx={{ mt: 2 }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard
                index={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Grid>
          ))}
        </Grid>

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
          {[...Array(30)].map((_, i) => (
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
                    ? `${theme.palette.primary.main}1A`
                    : `${theme.palette.primary.dark}1A`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                opacity: [0.3, 0.8, 0.3],
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
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
