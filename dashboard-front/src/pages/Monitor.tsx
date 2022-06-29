import {
  Box,
  Tabs,
  Tab,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { getFileURL, useConfig } from "../api";

export function Monitor() {
  const [tab, setTab] = useState(0);
  const { data: config } = useConfig();
  return (
    <>
      <FormControl>
        <InputLabel id="step-select-label">请选择</InputLabel>
        <Select
          labelId="step-select-label"
          label="请选择"
          sx={{ width: "300px" }}
          value={tab}
          onChange={(e) => {
            setTab(+e.target.value);
          }}
        >
          {config?.monitingData?.map((item, index) => (
            <MenuItem key={item.id} value={index}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box textAlign={"center"}>
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          margin={"3% 0 1% 0"}
        >
          施工监控数据
        </Typography>
        <img src={getFileURL(config?.monitingData[tab]?.dataImg)} />
        <Box sx={{ height: "3%" }} />
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          margin={"3% 0 1% 0"}
        >
          施工监控数据模型示意图
        </Typography>
        <img src={getFileURL(config?.monitingData[tab]?.modelImg)} />
      </Box>
    </>
  );
}
