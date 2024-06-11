import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  console.log(doctors);

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 70%)",
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
      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={doctor.profilePhoto}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification} - {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnOutlinedIcon /> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between", px: 3, pb: "20px" }}>
                  <Button size="small">Book Now</Button>
                  <Button size="small" variant="outlined" sx={{ color: "primary.main" }}>
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            mt: 5,
          }}
        >
          <Button variant="outlined" sx={{ color: "primary.main" }}>
            View All Doctors
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
