import { Box, Typography, Container, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Linguagens",
    skills: [
      "Java",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "Python",
      "Assembly",
    ],
    color: "#667eea",
  },
  {
    category: "Frameworks",
    skills: ["React", "React Native", "Node.js"],
    color: "#f093fb",
  },
  {
    category: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    color: "#4facfe",
  },
  {
    category: "Ferramentas",
    skills: ["Git/GitHub", "Figma", "ClickUp"],
    color: "#43e97b",
  },
  {
    category: "Metodologias",
    skills: ["Scrum", "Kanban", "Desenvolvimento Ágil"],
    color: "#fa709a",
  },
  {
    category: "Outros",
    skills: ["Estrutura de Dados", "Algoritmos", "Facebook Ads", "Google Ads"],
    color: "#feca57",
  },
];

const SkillsSection = () => {
  return (
    <Box
      id="habilidades"
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <Container maxWidth="lg">
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
          Habilidades Técnicas
        </Typography>

        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Box
                  sx={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    p: 3,
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: category.color,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: category.color,
                      }}
                    />
                    {category.category}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {category.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        sx={{
                          background: `${category.color}15`,
                          color: category.color,
                          border: `1px solid ${category.color}30`,
                          fontWeight: 500,
                          fontSize: "0.9rem",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
