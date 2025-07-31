"use client";
import { primary } from "@/utils/colors";

export const themeComponents = (mode: any) => ({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // boxShadow: "0px 6px 24px -4px rgba(145, 158, 171, 0.19)",
          // borderColor: mode === "light" ? "#fff" : "#22262F99",
          background: mode === "light" ? "#fff" : "#22262F99",
          borderRadius: "10px",
          "& fieldset": {
            // borderColor: mode === "light" ? "#fff" : "#22262F99",
            borderRadius: "10px",
            // background: "red",
          },
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderRadius: "10px",
            },
          },
          "& input:-webkit-autofill": {
            borderRadius: "10px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: mode === "light" ? "#fff" : "#22262F99",
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
            // You can add border color here if needed
            // borderColor: mode === "light" ? "#fff" : "#22262F99",
          },
          "&:hover fieldset": {
            borderRadius: "10px",
          },
          "& input:-webkit-autofill": {
            borderRadius: "10px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
          borderRadius: "10px",
          fontWeight: 500, // "medium" doesn't exist — use numeric or valid string
          fontFamily: "'Poppins', sans-serif",
        },
        contained: {
          background: "linear-gradient(to right, #35558a, #3487c7)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(to right, #2c4779, #2a7bb4)",
          },
        },
        outlined: {
          backgroundColor: "#eaf5ff",
          color: "#35558a",
          border: "1px solid #3487c7",
          "&:hover": {
            backgroundColor: "#d9ecff",
            border: "1px solid #3487c7",
          },
        },
        text: {
          color: "#3487c7",
          "&:hover": {
            backgroundColor: "#eaf5ff",
          },
        },
      },
    },
  },
});

export const defaultThemeSetting = (mode: any) => {
  return {
    palette: {
      mode,
      primary: {
        main: primary,
        // dark: primary,
        // dark: mode === "light" ? primary : "#0D6EFD",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1300,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontStyle: "normal",
        fontWeight: 500, // Standard weight for headings
        fontSize: "3rem", // 48px for h1
        lineHeight: "110%",
      },
      h2: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "2.5rem", // 40px for h2
        lineHeight: "110%",
      },
      h3: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "2rem", // 32px for h3
        lineHeight: "110%",
      },
      h4: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1.75rem", // 28px for h4
        lineHeight: "110%",
      },
      h5: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1.5rem", // 24px for h5
        lineHeight: "110%",
      },
      h6: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1.25rem", // 20px for h6
        lineHeight: "110%",
      },
      body1: {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "1rem", // 16px body text
        lineHeight: "150%", // Comfortable line-height for body text
      },
      body2: {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "0.875rem", // 14px secondary body text
        lineHeight: "150%",
      },
      subtitle1: {
        fontStyle: "normal",
        // fontWeight: 400,
        fontSize: "12px", // 14px subtitles
        lineHeight: "130%",
      },
      // button: {
      //   fontWeight: 700,
      //   fontSize: "0.875rem", // 14px for buttons
      //   lineHeight: "normal",
      //   textTransform: "uppercase",
      // },
      // caption: {
      //   fontStyle: "normal",
      //   fontWeight: 400,
      //   fontSize: "0.75rem", // 12px for captions
      //   lineHeight: "130%",
      //   color: "#B0BEC5",
      // },
      // overline: {
      //   fontStyle: "normal",
      //   fontWeight: 700,
      //   fontSize: "0.75rem", // 12px for overline
      //   lineHeight: "normal",
      //   letterSpacing: "0.1em",
      //   textTransform: "uppercase",
      //   color: "#B0BEC5",
      // },
    },
  };
};
