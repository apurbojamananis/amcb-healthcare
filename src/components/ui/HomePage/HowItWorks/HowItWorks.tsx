import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import howItWorksImg from "@/assets/how-it-works-img.png";
import assets from "@/assets"

const ChooseUsData = [
  {
    imageSrc: assets.icons.search,
    title: "Search Doctor",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.icons.doctor,
    title: "Check Doctor Profile",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.icons.appointment,
    title: "Schedule Appointment",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.icons.charity,
    title: "Get Your Solution",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
]

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
        <Grid container spacing={2} my={5}>
          <Grid item md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Image src={howItWorksImg} width={530} alt="choose us img" />
            </Box>
          </Grid>
          <Grid item md={6} >
          <Grid container spacing={2} >
            {
                ChooseUsData.map((item, index) =>(
                 
              <Grid item md={6} key={index} > 
                   <Box  sx={{
                border: "1px solid #D3D3D3",
                padding: "20px",
                borderRadius: "10px"
                
              }}>
                      <Box sx={{ backgroundColor: "#FFFFFF", padding: "5px", borderRadius: "10px" }}>
                      <Image src={item.imageSrc} width={40} alt={item.imageSrc} />
                    </Box>
                    <Box mt={2}>
                      <Typography variant="h6" component="h6" fontWeight={500}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight={300} mt={1}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                  </Grid>
           
                 
                ))

            }
             </Grid>
            
            

          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowItWorks;
