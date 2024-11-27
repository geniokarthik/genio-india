import React, { useEffect, useRef } from 'react';
import './App.css';
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  Grid,
  Box,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Help as HelpIcon,
  Fullscreen as FullscreenIcon,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

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

const MainContainer = styled(Container)(({ theme }) => ({
  zIndex: 1,
  [theme.breakpoints.up('md')]: {
    marginLeft: 110
  },
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {   //600
    width: "50%",
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: "1150",
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

const ContactBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('340', '350')]: {
    width: 300,
  },
  [theme.breakpoints.between('370', '392')]: {
    width: 340,
  },
  [theme.breakpoints.between('410', '432')]: {
    width: 380,
  },
  [theme.breakpoints.between('530', '550')]: {
    width: 450,
  },
  [theme.breakpoints.between('760', '770')]: {
    width: 720,
  },


  [theme.breakpoints.up('lg')]: {
    width: 700,
  },
}));

const MapGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('340', '350')]: {
    width: 310,
  },
  [theme.breakpoints.between('360', '365')]: {
    width: 300,
  },
  [theme.breakpoints.between('370', '392')]: {
    width: 340,
  },
  [theme.breakpoints.between('410', '432')]: {
    width: 380,
  },
  [theme.breakpoints.between('760', '770')]: {
    width: 720,
  },
  [theme.breakpoints.between('530', '550')]: {
    width: 450,
  },

  [theme.breakpoints.up('lg')]: {
    width: 700,
  },
}));

const GetInBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('340', '350')]: {
    width: 310,
  },
  [theme.breakpoints.up('lg')]: {
    width: 800,
  },
}));

const Img = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  transform: 'scale(1.25)', // Slight zoom effect
  height: 400,
  marginTop: 50,
  width: "100%",
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


export default function ContactUs() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <AnimatedSection>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '550px',
            overflow: 'hidden',
          }}
        >
          {/* Image */}
          <Img
            src="/about.jpg"
            alt="Example"
          />

          {/* Dark overlay */}
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

          {/* Text inside the image */}
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
                Contact Us
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
                Explore the artistry behind our innovations and experience <br />software development redefined.
              </Typography>
            </AnimatedSection>
          </Box>
        </Box>

        <MainContainer maxWidth="lg">
          <ContactInfoBox>
            <Grid item xs={12} md={6} >
              <ContactBox >
                <Typography
                  variant="h1"
                  sx={{
                    color: 'black',
                    fontSize: { xs: '38px', md: '54px' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    mb: 3,
                  }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'black',
                    fontSize: { xs: '16px', md: '18px' },
                    mb: 4,
                    maxWidth: '500px',
                    lineHeight: 1.6,
                  }}
                >
                  Our software solutions transcend boundaries, driving innovation and empowering businesses to thrive in the digital era.
                </Typography>

                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone number"
                      secondary="(219) 555-0114"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email address"
                      secondary="bill.sanders@example.com"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HelpIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Help & Support"
                      secondary="Our dedicated team can help you 24/7"
                    />
                  </ListItem>
                </List>
              </ContactBox>
            </Grid>
            <MapGrid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  height: 400,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5
                }}
              >
                <IconButton
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                  aria-label="fullscreen"
                >
                  <FullscreenIcon />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  Map loading...
                </Typography>
              </Paper>
            </MapGrid>
          </ContactInfoBox>
        </MainContainer>
      </AnimatedSection>
      <AnimatedSection>
        <Card sx={{ maxWidth: 1000, margin: 'auto', mt: 5, mb: 5, borderRadius: 5 }}>
          <CardContent>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Get in Touch With Us
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              Reach out to us through the contact form below to get your project started!
            </Typography>
            <GetInBox component="form" noValidate sx={{ mt: 3 }} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} borderRadius={10}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Enter your name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email address"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Your address"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Write your message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: '#FFD93D',
                  color: 'black',
                  '&:hover': {
                    bgcolor: '#FFD93D',
                  },
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: 10
                }}
              >
                SEND MESSAGE
              </Button>
            </GetInBox>
          </CardContent>
        </Card>
      </AnimatedSection>
      <Footer />
    </Box>
  );
}