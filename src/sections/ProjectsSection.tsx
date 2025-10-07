import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScienceIcon from "@mui/icons-material/Science";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const projects = [
  {
    icon: <DashboardIcon sx={{ fontSize: 48 }} />,
    title: "Dashboard Operacional – Polícia Civil",
    subtitle: "AGES I, 2025",
    description:
      "Desenvolvimento em equipe com React.js e Material UI. Implementação de tela de login, modal de criação de operações, filtros para dashboard e tela de detalhes do alvo.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 48 }} />,
    title: "Iniciação Científica",
    subtitle: "Ensino Médio",
    description:
      "Dois projetos de destaque, incluindo indicação como melhor projeto e apresentação na PUCRS.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
    title: "PET-Saúde SUS Digital",
    subtitle: "PUCRS/Ministério da Saúde, 2025 – atual",
    description:
      "Desenvolvimento de software em parceria com o Ministério da Saúde para apoiar hospitais e o SUS no município.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 48 }} />,
    title: "Em breve novos projetos",
    subtitle: "",
    description:
      "Novos projetos acadêmicos e pessoais serão adicionados aqui em breve.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    placeholder: true,
  },
];

const ProjectsSection = () => {
  return (
    <Box id="projetos" sx={{ py: 10, background: "#ffffff" }}>
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
          Projetos Acadêmicos
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Box
                  sx={{
                    background: project.gradient,
                    borderRadius: "20px",
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    opacity: project.placeholder ? 0.7 : 1,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <Box sx={{ mb: 2 }}>{project.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: "1.1rem",
                      }}
                    >
                      {project.title}
                    </Typography>
                    {project.subtitle && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          opacity: 0.9,
                          fontSize: "0.85rem",
                        }}
                      >
                        {project.subtitle}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.9, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>
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

export default ProjectsSection;
