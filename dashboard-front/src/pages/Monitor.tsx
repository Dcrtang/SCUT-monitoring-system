import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { getFileURL, useConfig } from "../api";

export function Monitor() {
  const [tab, setTab] = useState(0);
  const { data: config } = useConfig();
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          {config?.monitingData.map((data, index) => (
            <Tab key={data.id} label={"阶段" + (index + 1)} />
          ))}
        </Tabs>
      </Box>
      <Box textAlign={"center"}>
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          margin={"24px 0 6px 0"}
        >
          施工监控数据
        </Typography>
        <img src={getFileURL(config?.monitingData[tab]?.dataImg)} />
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          margin={"24px 0 6px 0"}
        >
          施工监控数据模型示意图
        </Typography>
        <img src={getFileURL(config?.monitingData[tab]?.modelImg)} />
      </Box>
    </>
  );
}
