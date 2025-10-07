import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

type AnimatedButtonProps = {
  label: string;
  onClick?: () => void;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ label, onClick }) => (
  <Button
    component={motion.button}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    variant="contained"
    onClick={onClick}
    sx={{
      borderRadius: "50px",
      px: 4,
      py: 1.5,
      fontWeight: 600,
      textTransform: "none",
      backgroundColor: "#22d3ee",
      color: "white",
      boxShadow: 3,
      "&:hover": {
        backgroundColor: "#06b6d4",
      },
    }}
  >
    {label}
  </Button>
);

export default AnimatedButton;
