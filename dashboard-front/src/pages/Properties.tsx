import { Box, Typography } from "@mui/material";
import { useConfig } from "../api";

export function Properties() {
  const { data: config } = useConfig();
  return (
    <Box textAlign="center">
      <Typography variant="h6" component="div" textAlign={"center"}>
        指令属性
      </Typography>
      {config?.instructionImg?.map((img) => (
        <Box marginTop="24px">
          <img src={img} />
        </Box>
      ))}
    </Box>
  );
}
