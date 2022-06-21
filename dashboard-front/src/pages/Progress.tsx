import {
  Stepper,
  Typography,
  Step,
  StepLabel,
  Box,
  StepButton,
} from "@mui/material";
import { useState } from "react";
import { useConfig } from "../api";

export function Progress() {
  const [step, setStep] = useState(0);
  const { data: config } = useConfig();
  return (
    <>
      <Box sx={{ margin: "24px auto", maxWidth: "800px" }}>
        <Stepper activeStep={step}>
          {config?.progress.map((stepInfo, index) => {
            return (
              <Step key={index} completed={false}>
                <StepButton onClick={() => setStep(index)} disabled={false}>
                  阶段{index + 1}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box>
        <Typography>{config?.progress[step]?.text}</Typography>
        <img src={config?.progress[step]?.img} />
      </Box>
    </>
  );
}
