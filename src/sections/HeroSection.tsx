import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import OpenToWork from "../components/OpenToWork";

const HeroSection = () => {
  const buttons = [
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      href: "https://github.com/lucassimao",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/lucassimao",
    },
    {
      icon: <EmailIcon />,
      label: "E-mail",
      href: "mailto:novellysimaolucas@gmail.com",
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        background: "#060606",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glassmorphism overlay */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <Box
          sx={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(12px)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            py: { xs: 10, md: 15 },
            px: { xs: 10, md: 20 },
            maxWidth: "100%",
            width: "100%",
            mx: "auto",
            minHeight: { xs: 300, md: 400 },
            maxHeight: { xs: 800, md: 1000 },
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1, color: "#fff", position: "relative" }}>
            {/* top badge */}

            <OpenToWork />

            <Typography
              sx={{
                marginTop: 2,
                fontWeight: 300,
                fontSize: { xs: 20, md: 32 },
              }}
            >
              Olá <span aria-hidden>👋</span> me chamo{" "}
              <strong>Lucas Simão</strong> de Porto Alegre
              <span aria-hidden> 🇧🇷</span>
            </Typography>

            <Typography
              component="h2"
              sx={{
                mt: 2,
                fontWeight: 800,
                fontSize: { xs: 28, md: 48 },
                lineHeight: 1.05,
              }}
            >
              Desenvolvo
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg,#16d39a 0%, #00b4ff 40%, #00d1b2 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: 900,
                }}
              >
                experiências digitais
              </Box>
              <br />
              modernas e funcionais para a web.
            </Typography>

            {/* info rows */}
            <Box sx={{ display: "flex", gap: 6, mt: 4, flexWrap: "wrap" }}>
              <Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#10E585",
                      mt: 1,
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      Estudante de Engenharia de Software na PUCRS
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                      na Pontifícia Universidade Católica do Rio Grande do Sul
                    </Typography>
                    <Typography sx={{ color: "#909090", mt: 1 }}>
                      Início: 2024/1 - Previsão: 2027/2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#1090E5",
                      mt: 1,
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      Bolsista no projeto PET-Saúde SUS Digital
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                      (PUCRS e Ministério da Saúde)
                    </Typography>
                    <Typography sx={{ color: "#909090", mt: 1 }}>
                      Início: 2025/2
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Typography sx={{ color: "#909090", mt: 6, maxWidth: 620 }}>
              Apaixonado por tecnologia e por transformar ideias em soluções
              reais através do desenvolvimento de software.
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
              {buttons.map((btn, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    startIcon={btn.icon}
                    href={btn.href}
                    sx={{
                      background: "rgba(255, 255, 255, 0.95)",
                      color: "#667eea",
                      borderRadius: "50px",
                      px: 3,
                      py: 1.2,
                      fontWeight: 600,
                      textTransform: "none",
                      backdropFilter: "blur(10px)",
                      border: "none",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 1)",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    {btn.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Right decorative object (placeholder). In the design it's an abstract 3D shape. We'll place an SVG/placeholder with reduced opacity */}
          <Box
            sx={{
              width: 448,
              height: 443,
              flexShrink: 0,
              display: { xs: "none", md: "block" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: -40,
                top: 24,
                width: 448,
                height: 443,
                opacity: 0.4,
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), rgba(255,255,255,0))",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.02)",
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
