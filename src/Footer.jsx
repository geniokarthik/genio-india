import React from 'react';
import './App.css';
import {
  Typography,
  Button,
  Container,
  Box,
  styled,
  Grid,
  Stack,
  Input,
  Link,
} from '@mui/material';
import { Facebook, X, LinkedIn, Instagram } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';

const StyledInput = styled(Input)({
  color: "#fff",
  borderRadius: "100px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "8px 16px",
  "&::before, &::after": {
    display: "none"
  },
  "&:hover": {
    border: "1px solid rgba(255, 255, 255, 0.2)"
  }
})

const FooterLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  fontSize: "0.875rem",
  "&:hover": {
    color: "#ffd036",
  }
})

const SocialIcon = styled(Link)({
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  "&:hover": {
    backgroundColor: "#ffd036",
    color: "#1c1c1c"
  }
})

const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const footerSections = [
  {
    title: "Main pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Services", href: "#" },
      { name: "Blog", href: "/blog" },
      { name: "Our Team", href: "#" },
      { name: "Contact us", href: "/contactus" },
    ]
  },
  {
    title: "Template pages",
    links: [
      { name: "Style guide", href: "#" },
      { name: "Licenses", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "404 not found", href: "#" },
      { name: "Password protected", href: "#" },
    ]
  }
]

export default function Footer() {
  const navigate = useNavigate();
  const clickLetsTalk = () => {
    navigate('/contactus');
  }
  return (
    <Box>
      <Box sx={{ bgcolor: "#1c1c1c", color: "#fff", pt: 8 }}>
        <Container maxWidth="lg">
          {/* Top Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 8,
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 0 }
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Logo>
                <img src="/genio_india_logo.png" alt="" />
              </Logo>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Genio India</Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Have a Project in Mind?
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#ffd036',
                color: '#1c1c1c',
                '&:hover': { bgcolor: '#ffd036ba' },
                borderRadius: '9999px',
                px: 3,
                ml: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '16px',
                boxShadow: 'none',
                height: 40,
                marginTop: 1
              }}
              onClick={clickLetsTalk}
            >
              Let's Talk
            </Button>
          </Box>

          {/* Middle Section */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                Subscribe to Our Newsletter
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <StyledInput
                  fullWidth
                  placeholder="Enter email address"
                  disableUnderline
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#ffd036',
                    color: '#1c1c1c',
                    '&:hover': { bgcolor: '#ffd036ba' },
                    borderRadius: '9999px',
                    px: 3,
                    ml: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '16px',
                    boxShadow: 'none',
                    height: 40,
                    marginTop: 1,
                    width: 160
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>

            {footerSections.map((section) => (
              <Grid item xs={12} md={4} key={section.title}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: "bold", mb: 3 }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={2}>
                  {section.links.map((link) => (
                    <FooterLink href={link.href} key={link.name}>
                      {link.name}
                    </FooterLink>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Bottom Section */}
          <Box
            sx={{
              pt: 4,
              pb: 5,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 0 }
            }}
          >
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Copyright ©Genio India
            </Typography>

            <Stack direction="row" spacing={2}>
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram />
              </SocialIcon>
              <SocialIcon href="#" aria-label="X">
                <X />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <LinkedIn />
              </SocialIcon>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}