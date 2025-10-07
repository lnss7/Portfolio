import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactSection = () => {
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
      href: "mailto:lucas@example.com",
    },
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      href: "https://wa.me/5551999999999",
    },
  ];

  return (
    <Box
      id="contato"
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: 10,
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(100px)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
            }}
          >
            Vamos conversar?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 5,
              fontSize: "1.1rem",
              opacity: 0.9,
            }}
          >
            Entre em contato comigo através das redes abaixo
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
              mb: 6,
            }}
          >
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
                  target="_blank"
                  sx={{
                    background: "rgba(255, 255, 255, 0.95)",
                    color: "#667eea",
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
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

          <Typography
            variant="body2"
            sx={{ textAlign: "center", opacity: 0.8, fontSize: "0.95rem" }}
          >
            © 2025 Lucas Simão. Todos os direitos reservados.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;
