import React, { useEffect, useRef } from 'react';
import './App.css';
import {
  Typography,
  Button,
  Container,
  Box,
  styled,
  Grid,
  Card,
  Stack,
  Input,
  Link,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { Facebook, Twitter, LinkedIn, YouTube } from "@mui/icons-material"
import Header from './Header';

const logos = [
  {
    name: "Exedermo",
    logo: "/placeholder.svg?height=32&width=32",
    tag: "Company",
    tagColor: "#FF5722",
    bgColor: "#FFF4F0"
  },
  {
    name: "Branding",
    logo: "/placeholder.svg?height=32&width=32",
    tagColor: "#FFB800",
    bgColor: "#FFF8E6"
  },
  {
    name: "Axisoft",
    logo: "/placeholder.svg?height=32&width=32",
    tagColor: "#6366F1",
    bgColor: "#F0F1FE"
  },
  {
    name: "Edicomart",
    logo: "/placeholder.svg?height=32&width=32",
    tagColor: "#10B981",
    bgColor: "#E6FAF5"
  },
  {
    name: "Radius",
    logo: "/placeholder.svg?height=32&width=32",
    tag: "Web",
    tagColor: "#FF5722",
    bgColor: "#FFF4F0"
  }
]

const blogPosts = [
  {
    id: 1,
    title: "Cybersecurity Best Practices for Remote Workforces",
    description: "Discover how artificial intelligence is totally reshaping the landscape of business operations.",
    author: "Wade Warren",
    category: "Development",
    image: "/image9.jpg"
  },
  {
    id: 2,
    title: "Unleashing the Power of AI in Business for Operations",
    description: "Discover how artificial intelligence is totally reshaping the landscape of business operations.",
    author: "Robert Fox",
    category: "Strategy",
    image: "/image10.jpg"
  },
  {
    id: 3,
    title: "Human-Centric in Design: Shaping User Experiences",
    description: "Discover how artificial intelligence is totally reshaping the landscape of business operations.",
    author: "Theresa Webb",
    category: "Design",
    image: "/image11.jpg"
  }
]

const BrandCard = styled(Box)(({ bgcolor = "#fff" }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 24px",
  borderRadius: "100px",
  backgroundColor: bgcolor,
  minWidth: "250px",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)"
  }
}))

const Tag = styled(Typography)(({ color = "#FF5722" }) => ({
  fontSize: "0.75rem",
  fontWeight: 500,
  padding: "4px 12px",
  borderRadius: "100px",
  backgroundColor: color,
  color: "#fff"
}))

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


const ImageWrapper = styled(motion.div)({
  position: "relative",
  width: "90%",
  height: "240px",
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: "1.5rem"
})


const CategoryTag = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: "6px 16px",
  borderRadius: "100px",
  backgroundColor: theme.palette.background.paper,
  fontSize: "0.875rem",
  fontWeight: 500,
  marginBottom: theme.spacing(2)
}))


const AuthorName = styled(Typography)({
  color: "#FF5722",
  fontWeight: 500,
  marginBottom: "0.5rem"
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

const footerSections = [
  {
    title: "Main pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Services", href: "#" },
      { name: "Services single", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Blog single", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Team single", href: "#" },
      { name: "Pricing plan", href: "#" },
      { name: "Contact us", href: "#" },
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

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(3px)", // Add blur effect initially
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)", // Clear blur on visibility
    transition: {
      duration: 0.8, // Adjust duration to your preference
    },
  },
};

const AnimatedSection = ({ children, variants = fadeInUp }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // return () => {
    //   if (ref.current) {
    //     observer.unobserve(ref.current);
    //   }
    // };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Blog() {
  const marqueeRef = useRef(null);
  
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header/>
      <AnimatedSection>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '550px',
            overflow: 'hidden',
          }}
        >
          
          <img
            src="/about.jpg"
            alt="Example"
            style={{
              height: 400,
              width: "100%",
              objectFit: 'cover',
              transform: 'scale(1.25)', // Slight zoom effect
              marginTop: 50
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: 500,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Adjust the opacity here
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '600px',
              opacity: 1,
              transition: 'opacity 1s ease-in-out',
              zIndex: 1,
            }}
          >
            <AnimatedSection>
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '38px', md: '62px' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: 2,
                  textAlign: "center"
                }}
              >
                Blogs & Articles
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '20px', md: '20px' },
                  fontWeight: 70,
                  lineHeight: 1.1,
                  textAlign: "center"
                }}
              >
                Explore the artistry behind our innovations and experience<br/> software development redefined.
              </Typography>
            </AnimatedSection>
          </Box>
        </Box>

        <Box textAlign="center" mb={6}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Box
                component="span"
                sx={{
                  backgroundColor: '#FFE4D9',
                  color: '#FF5722',
                  px: 1,
                  py: .2,
                  borderRadius: '100px',
                  fontSize: '0.875rem',
                  mb: 3,
                  fontWeight: "bold",
                  display: 'inline-block',
                }}
              >
                Blogs
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 700,
                  mt: 2,
                  mb: 4
                }}
              >
                Blog and Article Updates
              </Typography>
            </Box>
          </AnimatedSection>
          <AnimatedSection>
            <Grid container spacing={4} marginLeft={1}>
              {blogPosts.map((post) => (
                <Grid item xs={12} md={4} key={post.id}>
                  <Card
                    elevation={0}
                    sx={{
                      bgcolor: "transparent",
                      height: "100%",
                      "&:hover": {
                        cursor: "pointer",
                      }
                    }}
                  >
                    <ImageWrapper
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </ImageWrapper>
                    <CategoryTag>{post.category}</CategoryTag>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: "1.25rem",
                        lineHeight: 1.4,
                        minHeight: "3.5em",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {post.title}
                    </Typography>
                    <AuthorName>{post.author}</AuthorName>
                    <Typography
                      color="text.secondary"
                      sx={{
                        fontSize: "0.875rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {post.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Container>
        </Box>
      </AnimatedSection>

      <Grid item xs={12} md={6}>
        <Box textAlign="center" mb={6}>
          <AnimatedSection delay={0.2}>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
             We’ve Worked With 150+ Global Companies
            </Typography>
          </AnimatedSection>
        </Box>
      </Grid>
      <Box
          ref={marqueeRef}
          sx={{
            width: "100%",
            overflow: "hidden",
            padding: "20px 0",
          }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-30%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
            style={{
              display: "flex",
              width: "fit-content",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 150,
                  height: 80,
                }}
              >
                <AnimatedSection key={`brand_duplicate_${index}`}>
                  <BrandCard bgcolor={logo.bgColor}>
                    <Box
                      component="img"
                      src={logo.logo}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        flex: 1,
                      }}
                    >
                      {logo.name}
                    </Typography>
                    {logo.tag && <Tag color={logo.tagColor}>{logo.tag}</Tag>}
                  </BrandCard>
                </AnimatedSection>
              </Box>
            ))}
          </motion.div>
        </Box>
        <Box
          ref={marqueeRef}
          sx={{
            width: "100%",
            overflow: "hidden",
            padding: "20px 0",
          }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "30%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
            style={{
              display: "flex",
              width: "fit-content",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 150,
                  height: 80,
                }}
              >
                <AnimatedSection key={`brand_duplicate_${index}`}>
                  <BrandCard bgcolor={logo.bgColor}>
                    <Box
                      component="img"
                      src={logo.logo}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        flex: 1,
                      }}
                    >
                      {logo.name}
                    </Typography>
                    {logo.tag && <Tag color={logo.tagColor}>{logo.tag}</Tag>}
                  </BrandCard>
                </AnimatedSection>
              </Box>
            ))}
          </motion.div>
        </Box>

      <Box sx={{ bgcolor: "#1c1c1c", color: "#fff", pt: 8, pb: 4 }}>
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
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Typography sx={{ color: "#1c1c1c", fontWeight: "bold" }}>G</Typography>
              </Box>
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
                '&:hover': { bgcolor: '#ffd036' },
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
                    '&:hover': { bgcolor: '#ffd036' },
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
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 0 }
            }}
          >
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Copyright GenioIndia software ltd
            </Typography>
            <Stack direction="row" spacing={2}>
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <Twitter />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <LinkedIn />
              </SocialIcon>
              <SocialIcon href="#" aria-label="YouTube">
                <YouTube />
              </SocialIcon>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}