import { Box, Container, Typography } from "@mui/material";
const TopRatedDoctors = () => {
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 60%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          and top-quality surgery facilities right here
        </Typography>
      </Box>
    </Box>
  );
};

export default TopRatedDoctors;
