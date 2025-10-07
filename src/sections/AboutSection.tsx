import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Box
      id="sobre"
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 5,
              color: "#667eea",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Sobre Mim
          </Typography>

          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              p: 5,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#495057",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              Sou estudante de Engenharia de Software na PUCRS (4º semestre),
              com foco em desenvolvimento full stack e interesse também em banco
              de dados e análise de sistemas. Atualmente, sou bolsista no
              Projeto PET-Saúde SUS Digital, em parceria com o Ministério da
              Saúde, onde contribuo para o desenvolvimento de um software que
              apoia hospitais e o SUS no município.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#495057",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              Tenho experiência em projetos acadêmicos que simulam ambientes
              reais, atuando no front-end (React.js, TypeScript, JavaScript) e
              na integração com back-end. Desde o ensino médio participo de
              iniciativas de pesquisa, o que reforçou minha curiosidade,
              disciplina e capacidade de aprender rápido.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#495057",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              Considero-me uma pessoa que corre atrás, busca soluções práticas e
              trabalha em equipe para alcançar resultados de impacto.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
