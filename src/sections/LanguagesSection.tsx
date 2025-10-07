import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const languages = [
  {
    name: "Inglês",
    level: "Leitura/Escrita: Avançado | Fala: Intermediário",
    value: 80,
  },
  { name: "Espanhol", level: "Básico", value: 30 },
];

const LanguagesSection = () => {
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
          Idiomas
        </Typography>

        {languages.map((lang, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                p: 4,
                mb: 3,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#212529" }}
                >
                  {lang.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#6c757d" }}>
                  {lang.level}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 12,
                  borderRadius: "50px",
                  background: "#e9ecef",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.value}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "50px",
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default LanguagesSection;
