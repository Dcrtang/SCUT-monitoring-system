import { Box, Typography } from "@mui/material";
import { useConfig } from "../api";

export function Quality() {
  const { data: config } = useConfig();
  return (
    <Box textAlign="center">
      <Typography variant="h6" component="div" textAlign={"center"}>
        工程质量管理
      </Typography>
      <Box marginBottom="24px">
        <img src={config?.quality.img1} />
      </Box>
      <Typography variant="h6" component="div" textAlign={"center"}>
        工程质量管理图
      </Typography>
      <Box>
        <img src={config?.quality.img2} />
      </Box>
    </Box>
  );
}
