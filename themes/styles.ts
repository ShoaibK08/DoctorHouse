import { primary, secondary } from "@/utils/colors";

export const iconStyles = (mode: string) => {
  return {
    background:
      mode === "light" ? "linear-gradient(to right, #35558a, #3487c7)" : "#fff",
    color: mode === "light" ? "#fff" : secondary,
    "&:hover": {
      background:
        mode === "light"
          ? "linear-gradient(to right, #35558a, #3487c7)"
          : "#fff",
      color: mode === "light" ? "#fff" : secondary,
    },
    borderRadius: "4px",
  };
};

export const profileTopContainerStyle = (mode: string) => {
  return {
    background: mode === "light" ? primary : secondary,
    pt: "20px",
    pb: "20px",
  };
};
export const whiteIconButtonStyle = (mode: string) => {
  return {
    background: mode === "light" ? "#fff" : "#3B3B3B",
    "&:hover": {
      background: mode === "light" ? "#fff" : "#3B3B3B",
    },
  };
};

export const lineClampStyle = (clamp: number) => {
  return {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    WebkitLineClamp: clamp,
    lineClamp: clamp,
  };
};
