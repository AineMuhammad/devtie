import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PaymentsIcon from "@mui/icons-material/Payments";
import ComputerIcon from "@mui/icons-material/Computer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const FeatureCard = ({ icon, title, description, index }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          boxShadow: theme.shadows[4],
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            {icon}
            <Typography
              variant="h6"
              component="h3"
              sx={{ ml: 2, fontWeight: 600 }}
            >
              {title}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StaffAugmentation = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <PeopleAltIcon sx={{ fontSize: 32 }} />,
      title: "Handpicked Talent",
      description:
        "We recruit and deploy industry-leading professionals aligned with your technical and business goals. From software developers to QA engineers, data analysts, and design experts, we find the perfect match for your project needs.",
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 32 }} />,
      title: "Seamless Integration",
      description:
        "Your extended team operates from state-of-the-art co-working spaces in Pakistan, managed by dedicated project managers ensuring real-time coordination, transparent communication, and timely delivery.",
    },
    {
      icon: <PaymentsIcon sx={{ fontSize: 32 }} />,
      title: "All-Inclusive Resource Cost",
      description:
        "Transparent pricing covering everything — salaries, workspace, system setup, high-speed internet, HR management, and performance tracking. Optional dedicated hardware systems available at minimal extra cost.",
    },
    {
      icon: <ComputerIcon sx={{ fontSize: 32 }} />,
      title: "Modern Infrastructure",
      description:
        "Every resource is equipped with the latest core-chip PCs or laptops, high-speed internet, and access to collaborative tools to maximize output while ensuring top-level security and performance.",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
      title: "Scalable Solutions",
      description:
        "Flexible team scaling and cost-effective staffing solutions that give you the competitive edge of offshore development without compromising on quality or control.",
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: 10,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Staff Augmentation in Pakistan
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto", mb: 4 }}
          >
            Boost your business productivity with DEV TIE's Staff Augmentation
            Services — your one-stop solution for skilled, cost-effective, and
            fully managed remote teams.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto" }}
          >
            In today's fast-paced digital landscape, businesses need agile,
            reliable, and productive teams to stay competitive. DEV TIE bridges
            the gap between your growing needs and top-tier tech talent through
            our comprehensive staff augmentation model — tailored for startups,
            SMEs, and global enterprises.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FeatureCard {...feature} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StaffAugmentation;
