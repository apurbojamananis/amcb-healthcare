import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import twitterIcon from "@/assets/landing_page/twitter.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#ffffff">Consultation</Typography>
          <Typography color="#ffffff">Health Plans</Typography>
          <Typography color="#ffffff">Medicine</Typography>
          <Typography color="#ffffff">Diagnostics</Typography>
          <Typography color="#ffffff">NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" py={3} gap={4}>
          <Link href="#">
            <Image src={facebookIcon} width={30} height={30} alt="Facebook" />{" "}
          </Link>
          <Link href="#">
            <Image src={instagramIcon} width={30} height={30} alt="Facebook" />{" "}
          </Link>
          <Link href="#">
            <Image src={twitterIcon} width={30} height={30} alt="Facebook" />{" "}
          </Link>
          <Link href="#">
            <Image src={linkedIcon} width={30} height={30} alt="Facebook" />{" "}
          </Link>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography color="#ffffff">
              &#64;{year} AMCB Healthcare. All Rights Reserved.
            </Typography>
          </Stack>
          <Typography component={Link} href="/" variant="h4" fontWeight={600} color="#ffffff">
            <Box component="span" color="primary.main">
              AMCB
            </Box>{" "}
            Healthcare
          </Typography>

          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography color="#ffffff">Privacy Policy! Terms & Conditions.</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
