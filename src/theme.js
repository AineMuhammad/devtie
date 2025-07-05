import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9D5CFF",
      light: "#B794FF",
      dark: "#7B3FE4",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#6D28D9",
      light: "#8B5CF6",
      dark: "#4C1D95",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#0A0118",
      paper: "#170533",
      card: "#170533",
      gradient:
        "linear-gradient(135deg, #1A0533 0%, #110226 50%, #0A0118 100%)",
    },
    text: {
      primary: "#F8F9FA",
      secondary: "rgba(248, 249, 250, 0.85)",
      disabled: "rgba(248, 249, 250, 0.6)",
    },
    divider: "rgba(157, 92, 255, 0.12)",
    action: {
      active: "#B794FF",
      hover: "rgba(157, 92, 255, 0.08)",
      selected: "rgba(157, 92, 255, 0.16)",
      disabled: "rgba(248, 249, 250, 0.3)",
      disabledBackground: "rgba(248, 249, 250, 0.12)",
      focus: "rgba(157, 92, 255, 0.12)",
    },
    purple: {
      purple50: "#F3F1FF",
      purple100: "#E9E5FD",
      purple200: "#D5CEFC",
      purple300: "#B8ABFA",
      purple400: "#9A7FF5",
      purple500: "#7C53F0",
      purple600: "#6A35E0",
      purple700: "#5A25D0",
      purple800: "#4A1BB0",
      purple900: "#3A1590",
      purple950: "#280D60",
    },
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.2)",
    "0px 4px 8px rgba(0, 0, 0, 0.2)",
    "0px 8px 16px rgba(0, 0, 0, 0.2)",
    "0px 12px 24px rgba(0, 0, 0, 0.2)",
    "0px 16px 32px rgba(0, 0, 0, 0.2)",
    "0px 20px 40px rgba(0, 0, 0, 0.2)",
    "0px 24px 48px rgba(0, 0, 0, 0.2)",
    "0px 28px 56px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px rgba(0, 0, 0, 0.2)",
    "0px 36px 72px rgba(0, 0, 0, 0.2)",
    "0px 40px 80px rgba(0, 0, 0, 0.2)",
    "0px 44px 88px rgba(0, 0, 0, 0.2)",
    "0px 48px 96px rgba(0, 0, 0, 0.2)",
    "0px 52px 104px rgba(0, 0, 0, 0.2)",
    "0px 56px 112px rgba(0, 0, 0, 0.2)",
    "0px 60px 120px rgba(0, 0, 0, 0.2)",
    "0px 64px 128px rgba(0, 0, 0, 0.2)",
    "0px 68px 136px rgba(0, 0, 0, 0.2)",
    "0px 72px 144px rgba(0, 0, 0, 0.2)",
    "0px 76px 152px rgba(0, 0, 0, 0.2)",
    "0px 80px 160px rgba(0, 0, 0, 0.2)",
    "0px 84px 168px rgba(0, 0, 0, 0.2)",
    "0px 88px 176px rgba(0, 0, 0, 0.2)",
    "0px 92px 184px rgba(0, 0, 0, 0.2)",
  ],
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          backgroundColor: "#0A0118",
          color: "#F8F9FA",
          minHeight: "100vh",
          margin: 0,
        },
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        "#root": {
          backgroundColor: "#0A0118",
          minHeight: "100vh",
        },
        body: {
          background:
            "linear-gradient(135deg, #1A0533 0%, #110226 50%, #0A0118 100%)",
          backgroundAttachment: "fixed",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#0A0118",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#9D5CFF33",
            borderRadius: "5px",
            "&:hover": {
              background: "#9D5CFF66",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#F8F9FA",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#170533",
          color: "#F8F9FA",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(23, 5, 51, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(157, 92, 255, 0.12)",
          color: "#F8F9FA",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A0533",
          color: "#F8F9FA",
          borderRadius: 16,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "#F8F9FA",
            "& fieldset": {
              borderColor: "rgba(157, 92, 255, 0.2)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(157, 92, 255, 0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#9D5CFF",
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(248, 249, 250, 0.7)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#F8F9FA",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
          "@media (min-width: 600px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#170533",
          backgroundImage: "none",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#170533",
          backgroundImage: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#170533",
          backgroundImage: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#170533",
          backgroundImage: "none",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: "#170533",
          backgroundImage: "none",
        },
        listbox: {
          backgroundColor: "#170533",
        },
        option: {
          '&[data-focus="true"]': {
            backgroundColor: "rgba(157, 92, 255, 0.08)",
          },
          '&[aria-selected="true"]': {
            backgroundColor: "rgba(157, 92, 255, 0.16)",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#170533",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#170533",
          "&:before": {
            backgroundColor: "rgba(157, 92, 255, 0.12)",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(10, 1, 24, 0.8)",
          backdropFilter: "blur(4px)",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#170533",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A0533",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: "#170533",
          },
          "&:nth-of-type(even)": {
            backgroundColor: "#1A0533",
          },
          "&:hover": {
            backgroundColor: "rgba(157, 92, 255, 0.08) !important",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#170533",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#170533",
          "&:hover": {
            backgroundColor: "rgba(157, 92, 255, 0.08)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(157, 92, 255, 0.16)",
            "&:hover": {
              backgroundColor: "rgba(157, 92, 255, 0.24)",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#170533",
        },
      },
    },
  },
});

export default theme;
