import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Divider,
} from "@mui/material";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ title, description, icon, index }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ height: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          boxShadow: isHovered ? theme.shadows[10] : theme.shadows[2],
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          zIndex: isHovered ? 10 : 1,
          bgcolor: theme.palette.background.paper,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: `linear-gradient(180deg, ${theme.palette.primary.main}08 0%, ${theme.palette.primary.main}00 100%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.5s ease",
            zIndex: 0,
          },
        }}
      >
        <CardMedia
          component="div"
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: isHovered
              ? `${theme.palette.primary.light}33`
              : `${theme.palette.primary.light}14`,
            color: theme.palette.primary.main,
            height: 160,
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <Box sx={{ width: 80, height: 80 }}>{icon}</Box>
          </motion.div>

          {/* Animated background elements */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
              zIndex: 0,
            }}
          >
            {isHovered && (
              <AnimatePresence>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    style={{
                      position: "absolute",
                      width: `${Math.random() * 40 + 20}px`,
                      height: `${Math.random() * 40 + 20}px`,
                      borderRadius: "50%",
                      background: `${theme.palette.primary.main}1A`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </AnimatePresence>
            )}
          </Box>
        </CardMedia>

        <CardContent sx={{ flexGrow: 1, p: 3, zIndex: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              position: "relative",
              display: "inline-block",
              mb: 2,
              transition: "color 0.3s ease",
              color: isHovered
                ? theme.palette.primary.main
                : theme.palette.text.primary,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -4,
                left: 0,
                width: isHovered ? "100%" : 0,
                height: 2,
                bgcolor: theme.palette.primary.main,
                transition: "width 0.3s ease",
              },
            }}
          >
            {title}
          </Typography>

          <Divider
            sx={{
              mb: 2,
              width: isHovered ? "100%" : "30%",
              transition: "width 0.5s ease",
              borderColor: isHovered
                ? theme.palette.primary.light
                : theme.palette.divider,
            }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{
              lineHeight: 1.7,
              transition: "transform 0.3s ease",
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              mt: "auto",
              transition: "transform 0.3s ease",
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            }}
          ></Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const OurServices = () => {
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

    // Add a parallax effect to the section background
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

  const services = [
    {
      title: "Staff Augmentation",
      description:
        "Access skilled tech professionals through our comprehensive staff augmentation services, providing flexible and cost-effective solutions for your business needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
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
      title: "Web Development",
      description:
        "We create responsive, user-friendly websites and web applications tailored to your specific business needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "We build native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive, visually appealing interfaces that enhance user engagement and satisfaction.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="21.17" y1="8" x2="12" y2="8"></line>
          <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
          <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
        </svg>
      ),
    },
    {
      title: "BRANDING",
      description:
        "We create unique and memorable brand identities that stand out in a crowded market.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "E-commerce Solutions",
      description:
        "We build robust e-commerce platforms that drive sales and provide seamless shopping experiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
    },
    {
      title: "Cloud Services",
      description:
        "We provide cloud migration, hosting, and management services to optimize your IT infrastructure.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
    },
  ];

  return (
    <Box
      id="services"
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
      }}
    >
      {/* Decorative elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.light}66 0%, ${theme.palette.primary.light}00 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.main}4D 0%, ${theme.palette.primary.main}00 70%)`,
          filter: "blur(50px)",
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
            Our Services
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
            We offer a comprehensive range of digital solutions to help your
            business thrive in the digital landscape.
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
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
