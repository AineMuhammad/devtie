import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Alert,
  Snackbar,
  IconButton,
  useTheme,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlineIcon from "@mui/icons-material/EmailOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SendIcon from "@mui/icons-material/Send";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const theme = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
    loading: false,
  });
  const [open, setOpen] = useState(false);
  const [fieldFocus, setFieldFocus] = useState({
    name: false,
    email: false,
    message: false,
  });

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;

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
    )
      .fromTo(
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
      )
      .fromTo(
        leftCard,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .fromTo(
        rightCard,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFieldFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFieldFocus((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus((prev) => ({ ...prev, loading: true }));

    try {
      const response = await fetch("https://formspree.io/f/mldnrgky", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
          loading: false,
        });
        setOpen(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again later.",
        loading: false,
      });
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Animation variants for form fields
  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        py: 12,
        pt: 16,
        minHeight: "100vh",
        mt: { xs: 10, md: 16 },
        background: theme.palette.background.default,
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
          y: [0, -30, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.light}80 0%, ${theme.palette.primary.light}00 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3],
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
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.main}66 0%, ${theme.palette.primary.main}00 70%)`,
          filter: "blur(60px)",
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
            Get In Touch
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
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box ref={leftCardRef}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  bgcolor: theme.palette.background.paper,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight={600}
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    mb: 3,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "40px",
                      height: "3px",
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      borderRadius: "2px",
                    },
                  }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      lineHeight: 1.8,
                      color: "text.secondary",
                    }}
                  >
                    We're here to help with any questions you might have about
                    our services, pricing, or how we can help your business
                    grow.
                  </Typography>
                </Box>

                <Box
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  sx={{
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: `${theme.palette.primary.main}1A`,
                      color: theme.palette.primary.main,
                    }}
                  >
                    <EmailOutlineIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      gutterBottom
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{
                        fontWeight: 500,
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: theme.palette.primary.dark,
                        },
                      }}
                    >
                      info@devtie.co
                    </Typography>
                  </Box>
                </Box>

                <Box
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  sx={{
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: `${theme.palette.primary.main}1A`,
                      color: theme.palette.primary.main,
                    }}
                  >
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      gutterBottom
                    >
                      Phone
                    </Typography>
                    <Typography variant="body1">+92 (313) 3338843</Typography>
                  </Box>
                </Box>

                {/* <Box
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: `${theme.palette.primary.main}1A`,
                      color: theme.palette.primary.main,
                    }}
                  >
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      gutterBottom
                    >
                      Address
                    </Typography>
                    <Typography variant="body1">
                      123 Tech Lane, Suite 100
                      <br />
                      San Francisco, CA 94107
                    </Typography>
                  </Box>
                </Box> */}

                {/* Animated background dots */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: -1,
                    overflow: "hidden",
                  }}
                >
                  {[...Array(15)].map((_, i) => (
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
                        y: [0, Math.random() * 20 - 10],
                        x: [0, Math.random() * 20 - 10],
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
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box ref={rightCardRef}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  bgcolor: theme.palette.background.paper,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "4px",
                    height: "100%",
                    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight={600}
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    mb: 3,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "40px",
                      height: "3px",
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      borderRadius: "2px",
                    },
                  }}
                >
                  Get in Touch
                </Typography>

                <form onSubmit={handleSubmit}>
                  <motion.div
                    variants={formFieldVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0}
                  >
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={() => handleBlur("name")}
                      margin="normal"
                      required
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineIcon
                              color={fieldFocus.name ? "primary" : "action"}
                              sx={{ transition: "color 0.3s ease" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderWidth: "2px",
                          },
                        },
                      }}
                    />
                  </motion.div>

                  <motion.div
                    variants={formFieldVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={1}
                  >
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      margin="normal"
                      required
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailOutlineIcon
                              color={fieldFocus.email ? "primary" : "action"}
                              sx={{ transition: "color 0.3s ease" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderWidth: "2px",
                          },
                        },
                      }}
                    />
                  </motion.div>

                  <motion.div
                    variants={formFieldVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={2}
                  >
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={() => handleBlur("message")}
                      margin="normal"
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ alignSelf: "flex-start", mt: 1.5 }}
                          >
                            <MessageOutlinedIcon
                              color={fieldFocus.message ? "primary" : "action"}
                              sx={{ transition: "color 0.3s ease" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          transition: "all 0.3s ease",
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderWidth: "2px",
                          },
                        },
                      }}
                    />
                  </motion.div>

                  <motion.div
                    variants={formFieldVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={3}
                  >
                    <Box sx={{ mt: 4 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={formStatus.loading}
                        endIcon={
                          formStatus.loading ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <SendIcon />
                          )
                        }
                        sx={{
                          py: 1.5,
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
                              "linear-gradient(90deg, transparent, rgba(157, 92, 255, 0.2), transparent)",
                            transition: "all 0.6s ease",
                          },
                          "&:hover::before": {
                            left: "100%",
                          },
                        }}
                      >
                        {formStatus.loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Box>
                  </motion.div>
                </form>

                {/* Animated background dots */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: -1,
                    overflow: "hidden",
                  }}
                >
                  {[...Array(15)].map((_, i) => (
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
                        y: [0, Math.random() * 20 - 10],
                        x: [0, Math.random() * 20 - 10],
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
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={formStatus.success ? "success" : "error"}
          sx={{
            width: "100%",
            boxShadow: theme.shadows[4],
            borderRadius: 2,
            bgcolor: formStatus.success
              ? "rgba(16, 185, 129, 0.95)"
              : "rgba(255, 23, 68, 0.95)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            "& .MuiAlert-icon": {
              color: "#fff",
            },
          }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {formStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
