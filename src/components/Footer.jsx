import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  Stack,
  useTheme,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.paper,
        pt: 8,
        pb: 6,
        color: theme.palette.text.secondary,
        position: "relative",
        overflow: "hidden",
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
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 2,
                }}
              >
                DevTie
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We create innovative digital solutions that help businesses
                thrive in today's competitive landscape.
              </Typography>
              {/* <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="LinkedIn"
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </IconButton>
                <IconButton
                  aria-label="GitHub"
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </IconButton>
              </Stack> */}
            </Box>
          </Grid>
          {/* <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="inherit">
                About
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Team
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Careers
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Blog
              </Link>
            </Stack>
          </Grid> */}
          {/* <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Services
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="inherit">
                Web Development
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Mobile Apps
              </Link>
              <Link href="#" underline="hover" color="inherit">
                UI/UX Design
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Cloud Services
              </Link>
            </Stack>
          </Grid> */}
          {/* <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="inherit">
                Documentation
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Guides
              </Link>
              <Link href="#" underline="hover" color="inherit">
                FAQ
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Support
              </Link>
            </Stack>
          </Grid> */}
          {/* <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="inherit">
                Privacy Policy
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Terms of Service
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Cookie Policy
              </Link>
            </Stack>
          </Grid> */}
        </Grid>

        <Divider sx={{ my: 4, borderColor: `${theme.palette.divider}` }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {currentYear} DevTie. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
