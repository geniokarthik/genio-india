import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  Typography,
  Button,
  Container,
  Box,
  styled,
  Grid,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion, useAnimation } from 'framer-motion';
import { Home, DataObject, Code, Share } from '@mui/icons-material'
import { keyframes } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from "react-scroll-to-top";

const services = [
  {
    title: 'Lead Generation',
    description:
      'Our platform offers comprehensive to receive solutions, including data analytics and its seamless payment to integration businesses.',
    icon: <Home sx={{ fontSize: 24, color: '#fff', height: 40 }} />,
    iconBg: '#FF5722',
  },
  {
    title: 'Data Integrations',
    description:
      'Our platform offers comprehensive to receive solutions, including data analytics and its seamless payment to integration businesses.',
    icon: <DataObject sx={{ fontSize: 24, color: '#fff', height: 40 }} />,
    iconBg: '#FFC107',
  },
  {
    title: 'IT/Technology',
    description:
      'Our platform offers comprehensive to receive solutions, including data analytics and its seamless payment to integration businesses.',
    icon: <Code sx={{ fontSize: 24, color: '#fff', height: 40 }} />,
    iconBg: '#4CAF50',
  },
  {
    title: 'Social Media & SEO',
    description:
      'Our platform offers comprehensive to receive solutions, including data analytics and its seamless payment to integration businesses.',
    icon: <Share sx={{ fontSize: 24, color: '#fff', height: 40 }} />,
    iconBg: '#FF5722',
  },
]
const features = [
  {
    title: 'Auto Chatbot',
    content: 'Automated customer service with AI-powered chatbot solutions.',
  },
  {
    title: 'Unified Case Management',
    content: 'Centralized platform for managing all customer interactions.',
  },
  {
    title: 'Driven Data Insights',
    content: 'Advanced analytics and reporting for data-driven decisions.',
  },
];

const zoomRotate = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1) rotate(-10deg);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1) rotate(10deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(-10deg);
  }
`;

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: `${zoomRotate} 1.5s ease-in-out infinite`,
  opacity: 1,
  zIndex: 1,
}));

const TeamMemberContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
}));

const MemberName = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
});

const MemberRole = styled(Typography)({
  fontSize: '.9rem',
  color: 'gray',
});

const BrandCard = styled(Box)(({ bgcolor = "#fff" }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 24px",
  borderRadius: "100px",
  backgroundColor: bgcolor,
  height: 50,
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

const processSteps = [
  { id: 1, title: 'Creative Idea', details: 'This is the detailed description for the creative idea.', color: '#FFCCBC' },
  { id: 2, title: 'Come Up With a Plan', details: 'This is the detailed description for the plan.', color: '#B2DFDB' },
  { id: 3, title: 'Execute to Achieve', details: 'This is the detailed description for executing to achieve.', color: '#FFF9C4' },
  { id: 4, title: 'Monitor & Report', details: 'This is the detailed description for monitoring and reporting.', color: '#FFCCBC' },
];

const teamMembers = [
  {
    id: 1,
    name: "Matey Black",
    role: "CREATIVE DESIGNER",
    image: "/image3.jpg",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    role: "DESIGNER LEAD",
    image: "/image4.jpg",
  },
  {
    id: 3,
    name: "Bessie Cooper",
    role: "PRODUCT DESIGNER",
    image: "/image5.jpg",
  },
]

const MainSection = styled('div')(({ theme }) => ({
  background: '#1c1c1c',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '120px',
  [theme.breakpoints.up('md')]: {   //900
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {   //0
    width: 600,
  },
}));

const Asterisk = styled('div')({
  position: 'absolute',
  right: '3.5%',
  top: '20%',
  width: '500px',
  height: '500px',
  color: '#ff5c00',
  animation: 'rotate 20s linear infinite',
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

const testimonials = [
  {
    company: {
      name: "Cloudly",
      logo: "/image6.jpg",
      color: "#FF5722"
    },
    quote: "Softy commitment to security is impressive. The 24/7 monitoring and encryption ensure my financial data is safe!",
    author: {
      name: "Darrell Steward",
      position: "Manager",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    company: {
      name: "Rareth",
      logo: "/image7.jpg",
      color: "#6366F1"
    },
    quote: "Softy commitment to security is impressive. The 24/7 monitoring and encryption ensure my financial data is safe!",
    author: {
      name: "Savannah Nguyen",
      position: "Business owner",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    company: {
      name: "Crafthub",
      logo: "/image8.jpg",
      color: "#10B981"
    },
    quote: "Softy commitment to security is impressive. The 24/7 monitoring and encryption ensure my financial data is safe!",
    author: {
      name: "Darrell Steward",
      position: "Manager",
      avatar: "/placeholder.svg?height=40&width=40"
    }
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

const CategoryTag = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: "6px 16px",
  borderRadius: "100px",
  backgroundColor: theme.palette.background.paper,
  fontSize: "0.875rem",
  fontWeight: 500,
  marginBottom: theme.spacing(2)
}))

const ImageWrapper = styled(motion.div)({
  position: "relative",
  width: "90%",
  height: "240px",
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: "1.5rem"
})

const AuthorName = styled(Typography)({
  color: "#FF5722",
  fontWeight: 500,
  marginBottom: "0.5rem"
})

const StarIcon = () => (
  <Box
    component="svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    sx={{ width: 32, height: 32, color: "#FF5722" }}
  >
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </Box>
)

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  height: "80%",
  width: '70%',
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)"
  }
}))

const CompanyLogo = styled(Box)(({ color }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "1.25rem",
  fontWeight: 600,
  color: color,
  marginBottom: "1.5rem"
}))

const ViewAllButton = styled(Button)(({ theme }) => ({
  bgcolor: '#ffd036',
  color: '#1c1c1c',
  '&:hover': { bgcolor: '#ffd036' },
  borderRadius: 100,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  boxShadow: 'none',
  textAlign: 'center',
  marginLeft: "45%",
  marginTop: 30,
  background: '#ffd036'
}));

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

export default function Softxon() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const navigate = useNavigate();
  const marqueeRef = useRef(null);
  const clickViewAll = () => {
    navigate("/blog");
  };
  const clickGetStarted = () => {
    navigate('/contactus');
  }
  const clickLearnMore = () => {
    navigate('/about');
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <MainSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, marginLeft: 11 }}>
          <Box maxWidth="600px">
            <AnimatedSection>
              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '38px', md: '62px' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Creative Software Development Company
              </Typography>
            </AnimatedSection>
            <AnimatedSection>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: { xs: '16px', md: '18px' },
                  mb: 4,
                  maxWidth: '500px',
                  lineHeight: 1.6,
                }}
              >
                We take pride in our collaborative approach, working closely with clients to understand their challenges, goals, and vision for the future.
              </Typography>
            </AnimatedSection>
            <AnimatedSection>
              <Box display="flex" gap={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#ffd036',
                    color: '#1c1c1c',
                    '&:hover': { bgcolor: '#ffd036' },
                    borderRadius: '9999px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                    boxShadow: 'none',
                  }}
                  onClick={clickGetStarted}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                    borderRadius: '9999px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                  onClick={clickLearnMore}
                >
                  Learn More
                </Button>
              </Box>
            </AnimatedSection>

          </Box>
        </Container>
        <Asterisk>
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* Vertical line */}
            <rect x="10.5" y="2" width="3" height="20" />
            {/* Diagonal line (45 degrees) */}
            <rect x="10.5" y="2" width="3" height="20" transform="rotate(45 12 12)" />
            {/* Diagonal line (-45 degrees) */}
            <rect x="10.5" y="2" width="3" height="20" transform="rotate(-45 12 12)" />
            <rect x="2" y="10.5" width="20" height="3" />
            {/* Diagonal line (135 degrees) */}
            <rect x="10.5" y="2" width="3" height="20" transform="rotate(135 12 12)" />
            {/* Diagonal line (-135 degrees) */}
            <rect x="10.5" y="2" width="3" height="20" transform="rotate(-135 12 12)" />
          </svg>
        </Asterisk>
        <AnimatedSection>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '650px',
              overflow: 'hidden',
              marginRight: 11
            }}
          >
            <img src="/image12.jpg" alt="Example" style={{ height: 600, width: 420, borderRadius: '8px', paddingLeft: 140, paddingTop: 50 }} />
          </Box>
        </AnimatedSection>

      </MainSection>
      <Box textAlign="center" mb={6}>
        <AnimatedSection>
          <AnimatedSection delay={0.2}>
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
                marginTop: 5
              }}
            >
              Services
            </Box>
          </AnimatedSection>
          <Typography variant="h3" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
            Our Top Professional
            <br />
            Services for You
          </Typography>
        </AnimatedSection>
      </Box>
      <Grid container spacing={3} paddingLeft={25}>
        {services.map((service, index) => (
          <Grid item xs={2} md={5} key={index}>
            <AnimatedSection>
              <Card
                sx={{
                  p: 4,
                  width: "85%",
                  height: '70%',
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#fffdf4',
                  border: '1px solid gray',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: service.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                  {service.description}
                </Typography>
                <Box
                  component="span"
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: '#F3F3F3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::after': {
                      content: '"→"',
                      color: '#666',
                    },
                  }}
                />
              </Card>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <AnimatedSection>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '650px',
                borderRadius: '24px',
                overflow: 'hidden',
                marginLeft: 12,
              }}
            >
              <img src="/image2.png" alt="Example" style={{ borderRadius: '8px', paddingTop: 50 }} />
            </Box>
          </AnimatedSection>

        </Grid>
        <Grid item xs={12} md={6} style={{ paddingRight: 40 }}>
          <AnimatedSection delay={0.2}>
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
              Features
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 4,
                mt: 2,
                right: "4%"
              }}
            >
              Our Key Features & Capabilities
            </Typography>
          </AnimatedSection>

          <Box sx={{ mt: 4, marginRight: "12%" }}>
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={0.4 + index * 0.1}>
                <Accordion
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': { display: 'none' },
                    mb: 2,
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: '#f5f5f5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <KeyboardArrowDownIcon style={{ color: "red" }} />
                      </Box>
                    }
                    sx={{
                      border: '1px solid #e0e0e0',
                      borderRadius: '12px',
                      '&.Mui-expanded': {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      border: '1px solid #e0e0e0',
                      borderTop: 'none',
                      borderBottomLeftRadius: '12px',
                      borderBottomRightRadius: '12px',
                    }}
                  >
                    <Typography color="text.secondary">
                      {feature.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </AnimatedSection>
            ))}
          </Box>

          <AnimatedSection delay={0.7}>

          </AnimatedSection>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box textAlign="center" mb={6}>
          <AnimatedSection delay={0.2}>
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
                marginTop: 5
              }}
            >
              Process
            </Box>
            <Typography variant="h3" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
              Our Working Process
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                padding: 4,
              }}
            >
              {processSteps.map((step) => (
                <Box
                  key={step.id}
                  sx={{
                    width: 200,
                    height: 300,
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: 2,
                    padding: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s, width 0.3s',
                    '&:hover': {
                      width: 300, // Expands width
                      transform: 'scale(1.05)', // Slightly scales up
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ position: 'relative', zIndex: 2 }}>
                    {step.title}
                  </Typography>

                  {/* Details (Initially hidden, slide in on hover) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '100%', // Initially off-screen to the right
                      transform: 'translate(0, -50%)',
                      opacity: 0, // Initially hidden
                      transition: 'transform 0.5s, opacity 0.5s',
                      textAlign: 'left',
                      zIndex: 1, // Ensure horizontal content appears below the title
                      '&:hover': {
                        opacity: 1,
                        transform: 'translate(-100%, -50%)', // Slide in from the right
                      },
                    }}
                  >
                    <Typography variant="body2">{step.details}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </AnimatedSection>
        </Box>
        <Box textAlign="center" mb={6}>
          <AnimatedSection delay={0.2}>
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
              Team Members
            </Box>
            <Typography variant="h3" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
              Meet the People Who Power <br /> Our Company
            </Typography>
          </AnimatedSection>
        </Box>
        <Box marginLeft={9} marginRight={5}>
          <AnimatedSection>
            {teamMembers.map((member, index) => (
              <TeamMemberContainer
                key={index}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Box style={{ paddingLeft: 50 }}>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>/{member.role}</MemberRole>
                </Box>
                {hoveredMember === index && (
                  <ImageContainer>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '10px',
                      }}
                    />
                  </ImageContainer>
                )}
                <hr style={{ margin: '50px 70px 50px 50px' }} />
              </TeamMemberContainer>
            ))}
          </AnimatedSection>
        </Box>
        <Box sx={{ bgcolor: "#1C1C1C", py: 12, position: "relative", overflow: "hidden" }}>
          {/* Decorative stars */}
          <Box sx={{ position: "absolute", top: 40, right: 40 }}>
            <StarIcon />
          </Box>
          <Box sx={{ position: "absolute", bottom: 40, left: 40 }}>
            <StarIcon />
          </Box>

          <Container maxWidth="lg">
            <AnimatedSection>
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(to bottom, #FF5722, #000000)', // Gradient from orange (#FF5722) to black (#000000)
                    color: '#fff', // Text color white
                    '&:hover': {
                      background: 'linear-gradient(to bottom, #FF5722, #000000)', // Keep the same gradient on hover
                    },
                    borderRadius: '9999px',
                    fontWeight: 600,
                    height: 40,
                    fontSize: '16px',
                    boxShadow: 'none',
                  }}
                >
                  Testimonials
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "2.5rem", md: "2.5rem" },
                    fontWeight: 700,
                    mt: 2
                  }}
                >
                  See What Our Customers Say
                </Typography>
              </Box>
            </AnimatedSection>
            <AnimatedSection>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(3, 1fr)"
                  },
                  gap: 4,
                  marginLeft: 5
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} elevation={0}>
                    <CompanyLogo color={testimonial.company.color}>
                      <img
                        src={testimonial.company.logo}
                        alt={testimonial.company.name}
                        width={24}
                        height={24}
                      />
                      {testimonial.company.name}
                    </CompanyLogo>
                    <Typography
                      sx={{
                        flex: 1,
                        fontSize: "1.125rem",
                        lineHeight: 1.6,
                        mb: 4
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {testimonial.author.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.author.position}
                        </Typography>
                      </Box>
                    </Box>
                  </TestimonialCard>
                ))}
              </Box>
            </AnimatedSection>
          </Container>
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
      </Grid>
      <Box sx={{ py: 8, bgcolor: "#F8F9FA" }}>
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
            <Grid container spacing={1} marginLeft={1}>
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
        <AnimatedSection>
          <ViewAllButton variant="contained" onClick={clickViewAll} >
            View All
          </ViewAllButton>
        </AnimatedSection>
      </Box>
      <AnimatedSection>
        <div>
          <ScrollToTop smooth />
        </div>
      </AnimatedSection>
      <Footer />
    </Box>
  );
}