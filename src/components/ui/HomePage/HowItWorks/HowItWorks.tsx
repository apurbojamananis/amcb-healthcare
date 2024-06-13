import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import howItWorksImg from "@/assets/how-it-works-img.png";

const HowItWorks = () => {
  return (
    <Container>
      <Box>
        <Box>
          <Typography color="primary" variant="h6" component="h1" fontWeight={700}>
            How it Works
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            4 Easy Step to get Your Solution
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight={300} mt={1}>
            Access to expert physicians and surgeons, advanced technologies
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight={300}>
            and top-quality surgery facilities right here.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Image src={howItWorksImg} width={480} alt="choose us img" />
            </Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowItWorks;
