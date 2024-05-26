import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-95px",
            left: "-20px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={700}>
          Healthier hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={700}>
          Come From
        </Typography>
        <Typography variant="h3" component="h1" color="primary.main" fontWeight={700}>
          Preventive Care
        </Typography>
        <Typography
          component="p"
          sx={{
            py: "40px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae provident eligendi
          velit facere ipsam molestias ab? Eaque veniam provident eligendi asperiores unde ipsum
          maiores commodi nemo dolores.
        </Typography>
        <Button>Make Appointment</Button>
        <Button
          variant="outlined"
          sx={{
            ml: "10px",
            color: "primary.main",
          }}
        >
          Contact Us
        </Button>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "220px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image src={assets.images.doctor1} alt="doctor1" width={240} height={380} />
          </Box>
          <Box>
            <Image src={assets.images.doctor2} alt="doctor2" width={240} height={380} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "220px",
              left: "150px",
            }}
          >
            <Image src={assets.images.doctor3} alt="doctor3" width={240} height={240} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "300px",
              left: "380px",
              zIndex: -1,
            }}
          >
            <Image src={assets.images.stethoscope} alt="stethoscope" width={200} height={200} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
