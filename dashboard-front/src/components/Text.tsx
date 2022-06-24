import { colors, Typography } from "@mui/material";
import { ReactNode } from "react";

export function Text({ children }: { children: ReactNode }) {
  return (
    <Typography
      component="div"
      sx={{
        backgroundColor: colors.grey[200],
        margin: "12px",
        padding: "6px",
        borderRadius: "6px",
        border: `1px solid ${colors.grey[300]}`,
      }}
    >
      {children}
    </Typography>
  );
}
