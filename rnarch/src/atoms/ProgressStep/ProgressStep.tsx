import React from "react";
import { Box } from "../Box";

export type ProgressStepProps = {
  isCompleted: boolean;
  isActive: boolean;
  indicatorSize: number;
};

type BorderColorTypes = "currentStep" | "successStep" | "mainBackground";

const ProgressStep = ({
  isCompleted,
  isActive,
  indicatorSize,
}: ProgressStepProps) => {
  let borderWidth = 0;
  let borderColor: BorderColorTypes;

  if (isActive) {
    borderWidth = 8;
    borderColor = "currentStep";
  } else if (isCompleted) {
    borderWidth = 8;
    borderColor = "successStep";
  } else {
    borderWidth = 3;
    borderColor = "mainBackground";
  }

  return (
    <Box
      style={{
        width: indicatorSize,
        height: indicatorSize,
        borderRadius: indicatorSize / 2,
        borderWidth,
      }}
      borderColor={borderColor}
    />
  );
};

export { ProgressStep };
