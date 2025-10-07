import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const softSkills = [
  { icon: <LightbulbIcon />, title: "Proatividade", color: "#feca57" },
  { icon: <GroupIcon />, title: "Comunicação em equipe", color: "#48dbfb" },
  {
    icon: <MenuBookIcon />,
    title: "Facilidade de aprendizado",
    color: "#ff6b6b",
  },
  { icon: <CalendarMonthIcon />, title: "Organização", color: "#1dd1a1" },
];

const SoftSkillsSection = () => {
  return (
    <Box
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
          Soft Skills
        </Typography>

        <Grid container spacing={3}>
          {softSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Box
                  sx={{
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    p: 4,
                    textAlign: "center",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: `${skill.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      "& svg": {
                        fontSize: 36,
                        color: skill.color,
                      },
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#212529" }}
                  >
                    {skill.title}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SoftSkillsSection;
