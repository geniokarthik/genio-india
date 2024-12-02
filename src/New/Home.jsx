import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Container,
  useTheme,
  Paper,
  useMediaQuery
} from '@mui/material'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Facebook, X, LinkedIn, Instagram } from '@mui/icons-material'
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import { Menu } from 'lucide-react';
import CloseIcon from '@mui/icons-material/Close';
import { 
   Users, 
   Armchair, 
   Printer, 
   Coffee,
   Wind, 
   Camera, 
   Wifi, 
   Car, 
   Wallet, 
   ShipWheelIcon as Wheelchair, 
   CupSodaIcon as Cup, 
   Brush, 
   Headphones, 
   Lock, 
   Fingerprint, 
   Zap, 
   Building2, 
   CableCarIcon as Elevator, 
   Shield, 
   UserCheck 
  } from 'lucide-react'

function Amenity({ icon, title }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.main',
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="caption"
        sx={{
          fontSize: '0.75rem',
          fontWeight: 500,
          maxWidth: '100px',
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}
export default function HeroSection() {

  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('700'))
  const locations = [
    {
      title: "Rasipuram Road, Vennandur",
      address: "5th Floor, Anushka Tower, Salem, Tamil Nadu 636016"
    },
    {
      title: "Osaka, Japan",
      address: "3rd Floor, Twin Tower, No.11, Osaka, Japan"
    },
  ];

  const images = [
    '/./Manage_Office.png',
    '/./Open_Desk.png',
    '/./Cubicle.png',
    '/./Meeting_Space.png',
    '/./Private_Cabin.png',
    '/./Manage_Office.png',
    '/./Open_Desk.png',
    '/./Cubicle.png',
    '/./Meeting_Space.png',
    '/./Private_Cabin.png'
  ]

  const carosalImages = [
    '/./OfficeImage1.png?height=400&width=600',
    '/./OfficeImage2.png?height=400&width=600',
    '/./OfficeImage3.png?height=400&width=600',
    '/./OfficeImage4.png?height=400&width=600',
  ]

  const menuItems = [
    'Home',
    'About',
    'Contact Us',
  ]
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const getImageStyle = (index) => {
    const position = (index - activeIndex + carosalImages.length) % carosalImages.length;
    const baseStyle = {
      position: 'absolute',
      transition: 'all 0.5s ease-in-out',
      cursor: 'pointer',
    };

    switch (position) {
      case 0: // Main image
        return {
          ...baseStyle,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '90%' : '60%',
          height: isMobile ? '200px' : '300px',
          zIndex: 4,
          opacity: 1,
        };
      case 1: // Right image
        return {
          ...baseStyle,
          left: isMobile ? '70%' : '85%',
          top: '50%',
          transform: 'translate(-50%, -50%) scale(0.7)',
          width: isMobile ? '40%' : '30%',
          height: isMobile ? '120px' : '180px',
          zIndex: 3,
          opacity: 0.7,
        };
      case 2: // Back image
        return {
          ...baseStyle,
          left: '50%',
          top: isMobile ? '85%' : '80%',
          transform: 'translate(-50%, -50%) scale(0.5)',
          width: isMobile ? '30%' : '25%',
          height: isMobile ? '90px' : '150px',
          zIndex: 2,
          opacity: 0.5,
        };
      case 3: // Left image
        return {
          ...baseStyle,
          left: isMobile ? '30%' : '15%',
          top: '50%',
          transform: 'translate(-50%, -50%) scale(0.7)',
          width: isMobile ? '40%' : '30%',
          height: isMobile ? '120px' : '180px',
          zIndex: 3,
          opacity: 0.7,
        };
      default:
        return { ...baseStyle, opacity: 0 };
    }
  };
  const [hoverInterval, setHoverInterval] = React.useState(null);

  const handleHover = (direction) => {
    clearHoverInterval(); // Clear any existing interval to avoid multiple instances
    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        if (direction === 'left') {
          return Math.max(prevStep - 1, 0); // Move left, but don't go below 0
        }
        if (direction === 'right') {
          return Math.min(prevStep + 1, images.length - 1); // Move right, but don't exceed the last image
        }
        return prevStep;
      });
    }, 500); // Adjust timing for smoothness
    setHoverInterval(interval);
  };

  const clearHoverInterval = () => {
    clearInterval(hoverInterval);
    setHoverInterval(null);
  };

  const amenities = [
    { icon: <Users size={32} />, title: 'Meeting room' },
    { icon: <Armchair size={32} />, title: 'Furnished spaces' },
    { icon: <Printer size={32} />, title: 'Printer & Scanner' },
    { icon: <Coffee size={32} />, title: 'Pantry Area' },
    { icon: <Wind size={32} />, title: 'Air Conditioner' },
    { icon: <Camera size={32} />, title: 'HD CCTV Surveillance' },
    { icon: <Wifi size={32} />, title: 'High Speed Dedicated WiFi' },
    { icon: <Car size={32} />, title: 'Parking Area' },
    { icon: <Wallet size={32} />, title: 'Budget Friendly' },
    { icon: <Wheelchair size={32} />, title: 'Disabled Friendly Access' },
    { icon: <Cup size={32} />, title: 'FREE Refreshments' },
    { icon: <Brush size={32} />, title: 'House Keeping' },
    { icon: <Headphones size={32} />, title: 'Support Staff' },
    { icon: <Lock size={32} />, title: 'Locker' },
    { icon: <Fingerprint size={32} />, title: 'Biometrics Access Control' },
    { icon: <Zap size={32} />, title: '62.5KW Power Backup' },
    { icon: <Building2 size={32} />, title: 'City Center' },
    { icon: <Elevator size={32} />, title: 'Lift Facility' },
    { icon: <Shield size={32} />, title: 'Security' },
    { icon: <UserCheck size={32} />, title: 'Welcoming Reception' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carosalImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carosalImages.length]);

  const clickBtn = (item) => {
    const sectionIdMap = {
      Home: 'home',
      About: 'about',
      'Contact Us': 'contactus',
    };

    const sectionId = sectionIdMap[item]; // Default to 'home' if item is not in the map
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    } else {
      alert(`Section with ID "${sectionId}" not found.`);
    }
  };
  return (
    <>
      {!isMobile ? (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
          {/* Full screen background color */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: '#1C1C1C',
              zIndex: 0
            }} />

          {/* Full screen office supplies image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          >
            <img
              src="/./Home_Background.png"
              alt="Office supplies"
              layout="fill"
              style={{
                width: "100%",
                height: "100%"
              }} />
          </Box>

          {/* Content wrapper */}
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            {/* Navigation */}
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', pt: 2 }}>
              <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'space-evenly', px: { xs: 1, md: 4 } }}>
                  {/* Menu Items */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
                    <Typography
                      variant="h6"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: '1.5rem',
                        fontWeight: 600
                      }}
                    >
                      <span style={{ color: '#FDB813' }}>GENIO</span>
                      <span style={{ color: '#00B4FF' }}>INDIA</span>
                    </Typography>
                    {['Home', 'About', 'Contact Us'].map((item, index) => (
                      <Button
                        key={index} // Add a key to list items to avoid React warnings
                        sx={{
                          color: item === 'Locations' ? '#00B4FF' : 'white',
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          minWidth: 'auto',
                        }}
                        onClick={() => clickBtn(item)} // Use a function reference with the item as argument
                      >
                        {item}
                      </Button>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: '#C17D5B',
                          '&:hover': { bgcolor: '#A66B4A' },
                          textTransform: 'none',
                          px: 2
                        }}
                      >
                        Call us : 90921 09213
                      </Button>
                    </motion.div>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>

            {/* Hero Content */}
            <Container
              maxWidth="xl"
              sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              id='home'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="h1"
                  align="center"
                  sx={{
                    color: '#FDB813',
                    fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                    fontFamily: 'serif',
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    mb: 2
                  }}
                >
                  Welcome to
                  <br />
                  GENIO INDIA
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    color: 'white',
                    letterSpacing: 2,
                    fontWeight: 300,
                  }}
                >
                  Experience Co-Working Like Never Before
                </Typography>
              </motion.div>
            </Container>
          </Box>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, width: "100%", overflowX: "hidden" }}>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#1E1E1E",
              boxShadow: "none",
              width: "100%",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
                px: { xs: 1, sm: 2 },
                minHeight: { xs: 48, sm: 56 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    whiteSpace: "nowrap",
                    "& span": {
                      color: "#00B0F0",
                    },
                  }}
                >
                  GENIO <span>INDIA</span>
                </Typography>
              </Box>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
                sx={{ p: { xs: 0.5, sm: 1 } }}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '60vh', // Full screen height
              backgroundImage: 'url(/./Home_Background.png)', // Add background image here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0, // To make sure it's in the background
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1, // Ensure content is on top of the background image
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pt: { xs: 6, sm: 8 },
                px: { xs: 2, sm: 3 },
                color: '#FFB800',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: {
                    xs: '1.5rem',
                    sm: '2rem',
                    md: '3rem',
                  },
                  lineHeight: 1.2,
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                }}
              >
                {isMobile ? (
                  <>
                    Welcome to
                    <br />
                    Genio India
                  </>
                ) : (
                  <>
                    Welcome to
                    <br />
                    Genio
                    <br />
                    India
                  </>
                )}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem',
                    md: '1rem',
                  },
                  lineHeight: 1.5,
                }}
              >
                Experience Coworking
                <br />
                Like Never Before
              </Typography>
            </Box>
          </Box>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: { xs: "100%", sm: "50%", md: "33%" },
                maxWidth: "50%",
                backgroundColor: "#1E1E1E",
                color: "#fff",
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mb: 2,
                }}
              >
                <IconButton
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{ color: "#fff" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <List sx={{ pt: 0 }}>
                {menuItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      sx={{
                        py: 1.5,
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                      onClick={() => clickBtn(item)} // Call the clickBtn function on click
                    >
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            color: index === 0 ? "#00B0F0" : "#fff",
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>

      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh',
            backgroundImage: 'url("/About_Background.png?height=1080&width=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Parallax effect: image stays in place
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
            zIndex: 1, // Ensure content is on top
          }}
          id='about'
        >
          <Container maxWidth="lg">
            <Paper
              elevation={3}
              sx={{
                maxWidth: 800,
                mx: 'auto',
                p: { xs: 4, md: 6 },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 2, // Content above background
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                align="center"
                sx={{
                  color: '#00B0F0',
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 500,
                  mb: 4,
                }}
              >
                About Genio
                <br />
                India
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    lineHeight: 1.8,
                    color: 'text.primary',
                  }}
                >
                  Genio India is a premier co-working space located in the heart of the city. With state-of-the-art facilities and a vibrant
                  community of innovative individuals, Genio India provides the perfect environment for entrepreneurs, startups, and
                  freelancers to grow and thrive.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    lineHeight: 1.8,
                    color: 'text.primary',
                  }}
                >
                  Our mission is to provide uninterrupted high-speed network, private cabins, meeting rooms with LED TV and HD web cameras,
                  cubicles, storage, and refreshments to help you focus on what matters the most - your work. Plus, enjoy our happy hours
                  every Friday with free refreshments, creating an even more relaxed and enjoyable atmosphere for our members.
                </Typography>
              </Box>
            </Paper>
          </Container>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Our Community Section */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 4
              }}
            >
              Our Community
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8
              }}
            >
              At Genio India, we believe that the success of our members is our success. That's why we foster a collaborative environment
              that encourages networking and knowledge sharing. Our community is a vibrant tapestry, woven from diverse individuals hailing
              from various backgrounds and industries, all driven by a common goal - to grow and succeed. We facilitate connections,
              spark innovative ideas, and cultivate an atmosphere where collaboration thrives, because when our members flourish, so does
              the entire community at Genio India.
            </Typography>
          </Box>

          {/* Explore Our Spaces Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 6
              }}
            >
              Explore Our Spaces
            </Typography>
          </Box>

          {/* Image Carousel */}
          <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${activeStep * (100 / (isMobile ? 1 : 4))}%)`,
              }}
            >
              {images.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    flexShrink: 0,
                    width: isMobile ? '95%' : '25%',
                    padding: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`Workspace ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '50%',
                      aspectRatio: '1',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* Left Arrow */}
            <IconButton
              onMouseEnter={() => handleHover('left')}
              onMouseLeave={clearHoverInterval}
              disabled={activeStep === 0}
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: activeStep === 0 ? 'grey.300' : 'background.paper',
                '&:hover': { bgcolor: activeStep === 0 ? 'grey.300' : 'background.paper' },
                boxShadow: 1,
              }}
            >
              <ChevronLeft />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              onMouseEnter={() => handleHover('right')}
              onMouseLeave={clearHoverInterval}
              disabled={activeStep === images.length - 1}
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: activeStep === images.length - 1 ? 'grey.300' : 'background.paper',
                '&:hover': { bgcolor: activeStep === images.length - 1 ? 'grey.300' : 'background.paper' },
                boxShadow: 1,
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Container>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h1"
              sx={{
                fontWeight: 500,
                mb: 3,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              VENNANDUR
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: 6,
                lineHeight: 1.8,
                color: 'text.secondary'
              }}
            >
              Welcome to Genio India at Vennandur, your gateway to exceptional
              coworking experiences. Explore our meticulously tailored spaces, from
              private cabins to dynamic cubicles and our Exclusive Business Lounge
              and Meeting Hall. Seamlessly blending comfort with productivity, each
              corner is designed to exceed your expectations. Join our virtual tour
              and witness how Genio India elevates your journey towards success.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box sx={{
                position: 'relative',
                height: isMobile ? 300 : 400,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                {carosalImages.map((image, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      overflow: 'hidden',
                      borderRadius: 2,
                      ...getImageStyle(index)
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`Office space ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Paper>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ height: '100%', minHeight: 300 }}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.123456789!2d78.091856!3d11.515342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z11.515342,78.091856!5e0!3m2!1sen!2sin!4v1234567890&q=11.515342,78.091856"
                  sx={{
                    border: 0,
                    width: '100%',
                    height: 'calc(100%)', // Footer height குறைத்தல்
                    display: 'block',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Our Amenities
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
            >
              BOOK OUR COWORKING SPACE TODAY WITH THESE CARE OF THE REST
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {amenities.map((amenity, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <Amenity icon={amenity.icon} title={amenity.title} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          sx={{
            position: 'relative',
            py: 8,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            },
            backgroundImage: 'url("/ContactUs.png?height=1080&width=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Parallax effect: keeps the background in place while scrolling
          }}
          id="contactus"
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                component="h1"
                align="center"
                sx={{
                  color: 'white',
                  mb: 1,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold'
                }}
              >
                Contact Us
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  <Phone sx={{ color: '#FDB813' }} />
                  <a href="tel:+919092109213" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    +91 9092109213
                  </a>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  <Email sx={{ color: '#FDB813' }} />
                  <a href="mailto:info@genioindia.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    info@genioindia.com
                  </a>
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {locations.map((location, index) => (
                <Grid item xs={12} md={6} key={location.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            fontWeight: 'bold',
                            color: '#1C1C1C',
                            fontStyle: 'italic'
                          }}
                        >
                          {location.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#333' }}>
                          {location.address}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            position: 'relative',
          }}
        >
          {/* Map Container */}
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.123456789!2d78.091856!3d11.515342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z11.515342,78.091856!5e0!3m2!1sen!2sin!4v1234567890&q=11.515342,78.091856"
            sx={{
              border: 0,
              width: '100%',
              height: 'calc(100%)', // Footer height குறைத்தல்
              display: 'block',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Footer */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 100, sm: 50 }, // Adjust height for mobile
              backgroundColor: 'rgba(51, 51, 51, 0.9)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'row' }, // Stack items on mobile
              px: 3,
              py: { xs: 1, sm: 0 },
            }}
          >
            {/* Footer Text */}
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                textAlign: { xs: 'center', sm: 'left' }, // Center text for mobile
                flexWrap: 'wrap',
              }}
            >
              Powered by{' '}
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Genio India Software Ltd
              </Box>
              {' - '}
              <Box
                component="span"
                sx={{
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Terms & Conditions
              </Box>
              {' - '}
              © Copyright of Genio India
            </Typography>

            {/* Social Media Icons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' }, // Center icons for mobile
                gap: 1,
                mt: { xs: 1, sm: 0 },
              }}
            >
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <X sx={{ fontSize: '1.25rem' }} />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <Facebook sx={{ fontSize: '1.25rem' }} />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <LinkedIn sx={{ fontSize: '1.25rem' }} />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <Instagram sx={{ fontSize: '1.25rem' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  )
}