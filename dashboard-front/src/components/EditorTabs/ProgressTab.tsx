import { Box, Button, Card, colors, Snackbar } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import { useMutation } from "react-query";
import { setConfig, useConfig } from "../../api";
import { Config } from "../../types";
import { ImageSelector } from "../ImageSelector";
import * as uuid from "uuid";
import { AutoTextField } from "../AutoTextField";

export function ProgressTab() {
  const { data: config, refetch } = useConfig();
  const [message, setMessage] = useState<string>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const setConfigMutation = useMutation(setConfig);

  return (
    <Box sx={{ marginTop: "12px" }}>
      <Box sx={{ margin: "8px 0" }}>
        <Button
          sx={{ marginRight: "16px" }}
          variant="contained"
          onClick={() => {
            const newConfig = _.cloneDeep(config ?? {}) as Config;
            newConfig.progress.splice(selectedIndex, 0, {
              id: uuid.v4(),
              name: "占位文本",
              text: "占位文本",
              img: "https://iph.href.lu/200x200?text=占位图片",
            });
            setConfigMutation
              .mutateAsync(newConfig)
              .then(() => {
                setMessage("添加阶段成功");
              })
              .catch(() => {
                setMessage("添加阶段失败");
              })
              .finally(() => {
                refetch();
              });
          }}
        >
          添加
        </Button>
        <Button
          variant="contained"
          color="error"
          disabled={(config?.progress?.length ?? 0) <= 1}
          onClick={() => {
            const newConfig = _.cloneDeep(config ?? {}) as Config;
            newConfig.progress.splice(selectedIndex, 1);
            setConfigMutation
              .mutateAsync(newConfig)
              .then(() => {
                setMessage("删除阶段成功");
              })
              .catch(() => {
                setMessage("删除阶段失败");
              })
              .finally(() => {
                refetch();
              });
          }}
        >
          删除
        </Button>
      </Box>
      {config?.progress?.map((data, index) => (
        <Card
          key={data.id}
          sx={{
            margin: "12px 0",
            padding: "24px",
            border:
              selectedIndex === index
                ? `2px solid ${colors.blue[500]}`
                : "unset",
            ":hover": {
              cursor: "pointer",
            },
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          <AutoTextField field={`progress[${index}].name`} label={"阶段名称"} />
          <Box sx={{ height: "12px" }} />
          <AutoTextField
            multiline
            field={`progress[${index}].text`}
            label={`${config?.progress?.[index]?.name}进度说明`}
          />
          <Box sx={{ height: "12px" }} />
          <ImageSelector
            field={`progress[${index}].img`}
            label={`${config?.progress?.[index]?.name}进度模型示意图`}
          />
        </Card>
      ))}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!message}
        autoHideDuration={3000}
        onClose={() => {
          setMessage(undefined);
        }}
        message={message}
      />
    </Box>
  );
}
