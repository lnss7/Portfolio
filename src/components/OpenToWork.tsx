import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";

type Props = {
  primaryText?: string;
  secondaryText?: string;
};

const OpenToWork: React.FC<Props> = ({
  primaryText = "Available For Work",
  secondaryText = "or Ready for Project!",
}) => {
  return (
    <ButtonBase
      sx={{
        position: "relative",
        width: 362,
        height: 38,
        borderRadius: 43,
        background: "transparent",
        border: "0.5px solid rgba(190,190,190,0.5)",
        borderColor: "#878787",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        gap: 1,
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      {/* Green dot */}
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#5c8cb4",
          boxShadow: "0px 0px 11.8px #1BE4F2",
          flex: "none",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.1)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
      />

      {/* Texts */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans, Roboto, Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "18px",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
          }}
        >
          {primaryText}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans, Roboto, Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "18px",
            color: "rgba(255,255,255,0.5)",
            whiteSpace: "nowrap",
            marginLeft: 1,
          }}
        >
          {secondaryText}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default OpenToWork;
