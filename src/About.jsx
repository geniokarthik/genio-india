import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  Typography,
  Button,
  Box,
  styled,
  Grid,
  Card,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import {  keyframes } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const services = [
  {
    title: '2010- Started Journey',
    description:
      'Empowering businesses to create impactful and  stunning brand experiences that refers to captivate audiences',
  },
  {
    title: '2012- Innovation',
    description:
      'Empowering businesses to create impactful and  stunning brand experiences that refers to captivate audiences',
  },
  {
    title: '2016- Business Concepts',
    description:
      'Empowering businesses to create impactful and  stunning brand experiences that refers to captivate audiences',
  },
  {
    title: '2020- Trusted Agency',
    description:
      'Empowering businesses to create impactful and  stunning brand experiences that refers to captivate audiences',
  },
]

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

const totalClients = 20;
const anuualRevenue = 22;
const globalClient = 2;

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

const MainSection = styled('div')({
  background: '#1c1c1c',
  minHeight: '40vh',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
});

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
const MissionContent = styled(Typography)(({ theme }) => ({
  mt: 2, 
  fontWeight: 'bold', 
  textAlign:"center",
  [theme.breakpoints.between('359', '392')]: {
    marginLeft: 10,
  },
  [theme.breakpoints.between('410', '420')]: {
    marginLeft: 18,
  },
  [theme.breakpoints.between('760', '830')]: {
    marginLeft: 90,
  },
  [theme.breakpoints.between('850', '860')]: {
    marginLeft: 150,
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: 80,
  },
}))

const MissionBox = styled(Box)(({ theme }) => ({
  color: 'white', 
  width: '95%',
  [theme.breakpoints.up('md')]: {
    display:'flex', 
    justifyContent:'space-evenly',
  },
}));
const StoryGrid = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.between('530', '550')]: {
    paddingLeft: 20,
  },
  [theme.breakpoints.between('760', '8300')]: {
    paddingLeft: 40,
  },
  [theme.breakpoints.between('1000', '1100')]: {
    paddingLeft: 100,
  },
  [theme.breakpoints.between('1200', '1300')]: {
    paddingLeft: 250,
  },
  [theme.breakpoints.up('1300')]: {
    paddingLeft: 279,
    spacing: 3,
  },
}));

const StoryInsideGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('340', '350')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
    xs: 2, 
    md: 5,
  },
}));

const StoryInsideCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.between('340', '350')]: {
    width: "81%",
  },
  [theme.breakpoints.up('350')]: {
    width: "83%",
  },
}));

const TeamMemberBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('1200')]: {
    marginLeft: 9,
    marginRight: 5,
  },
}));


const Img = styled('img')(({ theme }) => ({
  borderRadius: '8px',
  [theme.breakpoints.between('343', '380')]: {   
    height: 420,
    marginLeft: 35,
    width: 300,
  },
  [theme.breakpoints.between('390', '393')]: {   
    height: 470,
    marginLeft: 35,
    width: 350,
  },
  [theme.breakpoints.between('411', '432')]: {   
    height: 490,
    marginLeft: 35,
    width: 360,
  },
  [theme.breakpoints.between('530', '550')]: {   
    height: 540,
    marginLeft: 95,
    width: 380,
  },
  [theme.breakpoints.between('760', '770')]: {   
    height: 830,
    marginLeft: 105,
    width: 550,
  },
  [theme.breakpoints.between('800', '830')]: {   
    height: 850,
    marginLeft: 105,
    width: 600,
  },
  [theme.breakpoints.between('850', '855')]: {   
    height: 850,
    marginLeft: 100,
    width: 600,
  },
  [theme.breakpoints.between('1000', '1050')]: {   
    height: 700,
    width: 500,
  },
  [theme.breakpoints.down('sm')]: {   
    paddingRight: 10,
  },
  [theme.breakpoints.up('lg')]: {   
    paddingTop: 50,
    paddingLeft: 140,
  },
}));


const ImgBox = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  marginRight: 11,
  [theme.breakpoints.between('343', '350')]: {   
    height: 400,
  },
  [theme.breakpoints.up('1000')]: {   
    height: '500px',
  },
}));


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

export default function About() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const navigate = useNavigate();
  const clickLearnMore = () => {
    navigate('/contactus');
  }

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
                About Us
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
                Explore the artistry behind our innovations and experience <br /> software development redefined.
              </Typography>
            </AnimatedSection>
          </Box>
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
                Our Mission
              </Box>
            </AnimatedSection>
            <Typography variant="h3" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
              We Are on a Mission to
              <br />
              Empower Customers
            </Typography>

          {/* <AnimatedSection>
            <Box
              sx={{
                width: '80%',
                height: '420px',
                overflow: 'hidden',
                display:'flex',
                justifyContent:"space-evenly",
                marginLeft:17,
                marginTop:5,
              }}
            >
              <img src="/ourmission1.jpg" alt="Example" style={{ borderRadius: 20, height: 400, width: 350 }} />
              <img src="/ourmission2.jpg" alt="Example" style={{ borderRadius: 20, height: 400, width: 350 }} />
              <img src="/ourmission3.jpg" alt="Example" style={{ borderRadius: 20, height: 400, width: 350 }} />
            </Box>
          </AnimatedSection> */}
        </Box>

      </AnimatedSection>
      <MainSection>
        <AnimatedSection>
          <MissionBox>
            <MissionContent variant="h4" 
            // sx={{ mt: 2, fontWeight: 'bold', marginLeft: 17}}
            >
              The Values That Lead Our Company
            </MissionContent>
            <MissionContent variant="h6" 
            // sx={{ mt: 2, color: 'white', marginLeft: 15 }}
            >
              <span style={{color:'#ff5722'}}>{totalClients}M+</span>
              Total Clients
            </MissionContent>
            <MissionContent variant="h6" 
            // sx={{ mt: 2, color: 'white', marginLeft: 14 }}
            >
              <span style={{color:'#ff5722'}}>{anuualRevenue}%</span>
              Annual Revenue
            </MissionContent>
            <MissionContent variant="h6"
            // sx={{ mt: 2, color: 'white', marginLeft: 14, verticalAlign:'center' }}
            >
              <span style={{color:'#ff5722'}}>{globalClient}M+</span>
              Global Clients
            </MissionContent>
          </MissionBox>
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
              Our Story
            </Box>
          </AnimatedSection>
          <Typography variant="h3" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
            Unlocking the Potential
            <br />
            of Digital Technology
          </Typography>
        </AnimatedSection>
      </Box>

      <StoryGrid container>
        {services.map((service, index) => (
          <StoryInsideGrid item key={index}>
            <AnimatedSection>
              <StoryInsideCard
                sx={{
                  p: 4,
                  height: '70%',
                  borderRadius: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#fffdf4',
                  borderTop: '2px solid gray',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                  },
                }}
              >
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                  {service.description}
                </Typography>
              </StoryInsideCard>
            </AnimatedSection>
          </StoryInsideGrid>
        ))}
      </StoryGrid>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <AnimatedSection>
            <ImgBox>
              <Img src="/careers.jpg" alt="Example" />
            </ImgBox>
          </AnimatedSection>
        </Grid>
        <Grid item xs={12} md={6} >
          <Box textAlign={'center'}>
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
                Careers
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 4,
                  mt: 2,
                }}
              >
                We Develop Strategic Software Solutions for Businesses
              </Typography>
              <Typography variant='h6'>
                Our software solutions transcend boundaries, driving innovation and empowering businesses to thrive in the digital era.
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
                  marginTop: 4,
                  textAlign: 'center'
                }}
                onClick={clickLearnMore}
              >
                Learn More
              </Button>
          </AnimatedSection>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} mt={5}>
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
        <TeamMemberBox>
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
                )}<hr style={{ margin: '50px 70px 50px 50px' }} />
              </TeamMemberContainer>
            ))}
          </AnimatedSection>
        </TeamMemberBox>
      </Grid>
      <Footer/>
    </Box>
  );
}