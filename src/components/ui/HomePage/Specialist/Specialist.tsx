import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialists } = await res.json();
  // console.log(specialists);

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment Across Specialist
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Find experience doctors across all specialized.
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {specialists.map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 15px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid green",
                  padding: "40px 15px",
                  borderRadius: "10px",
                  transition: "ease-in-out",
                },
              }}
            >
              <Image src={specialty.icon} width={100} height={100} alt="Specialty Icon" />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            mt: "20px",
            color: "primary.main",
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
