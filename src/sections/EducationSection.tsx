import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

const education = [
  {
    period: "2024/1 – 2027/2",
    title: "Engenharia de Software",
    institution: "PUCRS",
  },
  {
    period: "2020",
    title: "Ensino Médio",
    institution: "Marista São Pedro",
  },
];

const EducationSection = () => {
  return (
    <Box
      id="formacao"
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
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
          Formação Acadêmica
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Linha vertical */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "20px", md: "50%" },
              top: 0,
              bottom: 0,
              width: "3px",
              background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
              transform: { md: "translateX(-50%)" },
            }}
          />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  flexDirection: {
                    xs: "row",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  },
                }}
              >
                <Box
                  sx={{
                    flex: { xs: "none", md: 1 },
                    textAlign: {
                      md: index % 2 === 0 ? "right" : "left",
                    },
                    pr: {
                      md: index % 2 === 0 ? 4 : 0,
                    },
                    pl: {
                      md: index % 2 === 0 ? 0 : 4,
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#667eea",
                      fontWeight: 600,
                      mb: 1,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {item.period}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                    flexShrink: 0,
                    mr: { xs: 2, md: 0 },
                  }}
                >
                  <SchoolIcon sx={{ color: "white" }} />
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    pl: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                    pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                  }}
                >
                  <Box
                    sx={{
                      background: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(20px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      p: 3,
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#667eea",
                        fontWeight: 600,
                        mb: 1,
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {item.period}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#212529",
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6c757d" }}>
                      {item.institution}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default EducationSection;
