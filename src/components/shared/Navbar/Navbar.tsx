import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack py={4} direction="row" justifyContent="space-between" alignItems="center">
        <Typography component={Link} href="/" variant="h4" fontWeight={600}>
          <Box component="span" color="primary.main">
            AMCB
          </Box>{" "}
          Healthcare
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography>Consultation</Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
