import { Box, Typography, Container, Chip } from "@mui/material";
import { motion } from "framer-motion";
import AppleIcon from "@mui/icons-material/Apple";
import WindowIcon from "@mui/icons-material/Window";

const certificates = [
  { icon: <AppleIcon />, text: "Apple Developer Academy", color: "#667eea" },
  {
    icon: <WindowIcon />,
    text: "Visão Computacional GC25 (Microsoft)",
    color: "#00a4ef",
  },
  {
    icon: <WindowIcon />,
    text: "Fundamentos de IA GC25 (Microsoft)",
    color: "#00a4ef",
  },
  {
    icon: <WindowIcon />,
    text: "Curso de Aprendizado de Máquina GC25 (Microsoft)",
    color: "#00a4ef",
  },
];

const CertificatesSection = () => {
  return (
    <Box sx={{ py: 10, background: "#ffffff" }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#667eea",
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Cursos e Certificados
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Chip
                icon={cert.icon}
                label={cert.text}
                sx={{
                  background: `${cert.color}15`,
                  color: cert.color,
                  border: `2px solid ${cert.color}30`,
                  borderRadius: "50px",
                  px: 2,
                  py: 3,
                  fontSize: "1rem",
                  fontWeight: 600,
                  "& .MuiChip-icon": {
                    color: cert.color,
                    fontSize: "1.5rem",
                  },
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CertificatesSection;
