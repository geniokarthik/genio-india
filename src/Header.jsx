// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemButton,
//   useTheme,
//   styled,
//   useMediaQuery,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { useNavigate } from 'react-router-dom';

// // Custom styled components
// const StyledAppBar = styled(AppBar)({
//   background: '#fdfbf4',
//   // boxShadow: 'none',
//   borderRadius: '40px',
//   // margin: theme.spacing(2),
//   // position: 'fixed',
//   // left: '50%',
//   // transform: 'translateX(-50%)',
//   // maxWidth: '1150px',
//   // width: 'calc(100% - 32px)',
//   height: '70px',
//   width: "80%",
//   display: 'flex',
//   // justifyContent: 'space-between',
//   // alignItems:'center',  
//   marginTop: 30,
// });

// const Logo = styled('div')({
//   width: 32,
//   height: 32,
//   borderRadius: '50%',
//   background: '#000',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: '#fdfbf4',
//   fontWeight: 'bold',
//   fontSize: '1.2rem',
//   marginRight: 8,
// });

// const StyledDrawer = styled(Drawer)({
//   '& .MuiDrawer-paper': {
//     background: '#fdfbf4',
//     width: '100%',
//     maxWidth: '300px',
//     padding: '16px',
//   },
// });

// const TalkButton = styled(Button)({
//   backgroundColor: '#ffd036',
//   color: '#1c1c1c',
//   borderRadius: '9999px',
//   padding: '8px 24px',
//   textTransform: 'none',
//   fontWeight: 600,
//   fontSize: '16px',
//   boxShadow: 'none',
//   '&:hover': {
//     backgroundColor: '#ffd036',
//     boxShadow: 'none',
//   },
// });

// const NavButton = styled(Button)({
//   color: '#1c1c1c',
//   textTransform: 'none',
//   fontSize: '16px',
//   // padding: '8px 16px',
//   minWidth: '100px',
//   borderRadius: 30,
//   '&:hover': {
//     color: '#000',
//   },
// });

// export default function Header() {
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [visible, setVisible] = useState(true);

//   const menuItems = [
//     { label: 'Home', path: '/' },
//     { label: 'About Us', path: '/about' },
//     { label: 'Blog', path: '/blog' },
//     { label: 'Pages', path: '/pages', hasSubmenu: true },
//     { label: 'Contact Us', path: '/contact' },
//   ];

//   const handleNavigation = (path) => {
//     navigate(path);
//     setDrawerOpen(false);
//   };

//   const handleHomeClick = () => {
//     navigate('/');
//   }

//   const clickAboutUs = () => {
//     navigate("/about");
//   };

//   const clickBlog = () => {
//     navigate("/blog");
//   };

//   const clickContactUs = () => {
//     navigate("/contactus");
//   };

//   useEffect(() => {
//     // Track scroll position and toggle visibility of the AppBar
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setVisible(false); // Hide AppBar when scrolled down
//       } else {
//         setVisible(true); // Show AppBar when scrolled back up
//       }
//     };

//     // Add event listener on mount
//     window.addEventListener('scroll', handleScroll);

//     // Clean up event listener on unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <StyledAppBar style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease-in-out', zIndex: 1100 }}>
//         <Toolbar sx={{mt: .5 }} >
//           <Box display="flex" alignItems="center">
//             <Logo>S</Logo>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 700,
//                 color: '#1c1c1c',
//                 fontSize: '18px',
//               }}
//             >
//               Softxon
//             </Typography>
//           </Box>
//           {!isMobile && (
//             <><Box sx={{ 
//               alignItems:'center', 
//             //  display: 'flex', justifyContent: 'center', 
//             //  alignItems: 'center', flex: 1,
//              color: "rgb(9, 30, 66)" }}>
//               <NavButton
//                 onClick={handleHomeClick}
//                 sx={{ mx: 0.5 }}
//               >
//                 Home
//               </NavButton>
//               <NavButton sx={{ mx: 0.5 }} onClick={clickAboutUs}>About Us</NavButton>
//               <NavButton sx={{ mx: 0.5 }} onClick={clickBlog}>Blog</NavButton>
//               <NavButton
//                 endIcon={<KeyboardArrowDownIcon />}
//                 sx={{ mx: 0.5 }}
//               >
//                 Pages
//               </NavButton>
//               <NavButton sx={{ mx: 0.5 }} onClick={clickContactUs}>Contact Us</NavButton>
//             </Box>
//             <Box>
//                 <TalkButton fullWidth>Let's Talk</TalkButton>
//             </Box></>
//           )}
//           {isMobile && (
//             <><IconButton
//               onClick={() => setDrawerOpen(true)}
//               sx={{ color: '#ff5722' }}
//             >
//               <MenuIcon />
//             </IconButton><StyledDrawer
//               anchor="left"
//               open={drawerOpen}
//               onClose={() => setDrawerOpen(false)}
//             >

//                 <Box sx={{ mb: 4 }}>
//                   <Box display="flex" alignItems="center">
//                     <Logo>S</Logo>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: 700,
//                         color: '#1c1c1c',
//                         fontSize: '18px',
//                       }}
//                     >
//                       Softxon
//                     </Typography>
//                   </Box>
//                 </Box>

//                 <List sx={{ flex: 1 }}>
//                   {menuItems.map((item) => (
//                     <ListItem key={item.label} disablePadding>
//                       <ListItemButton
//                         onClick={() => handleNavigation(item.path)}
//                         sx={{
//                           py: 1.5,
//                           '&:hover': { backgroundColor: 'transparent' },
//                         }}
//                       >
//                         <ListItemText
//                           primary={item.label}
//                           sx={{
//                             '& .MuiListItemText-primary': {
//                               fontSize: '16px',
//                               fontWeight: 500,
//                               color: '#1c1c1c',
//                             },
//                           }} />
//                         {item.hasSubmenu && (
//                           <KeyboardArrowDownIcon sx={{ color: '#1c1c1c' }} />
//                         )}
//                       </ListItemButton>
//                     </ListItem>
//                   ))}
//                 </List>

//                 <Box sx={{ mt: 2 }}>
//                   <TalkButton fullWidth>Let's Talk</TalkButton>
//                 </Box>
//               </StyledDrawer></>
//           )}
//         </Toolbar>
//       </StyledAppBar>
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useTheme,
  styled,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useNavigate } from 'react-router-dom'

// Custom styled components with updated styling to match the design
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#ffffff',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  borderRadius: '50px',
  height: '80px',
  width: "85%",
  maxWidth: '1200px',
  margin: '20px auto',
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  [theme.breakpoints.down('xs')]: {   //0
    width: '50%',
    left: '5%',
    height: '70px',
  },
  [theme.breakpoints.down('sm')]: {   //600
    width: 10,
    left: '50%',
    height: '70px',
  },
  [theme.breakpoints.down(700)]: {   //600
    width: 20,
    marginLeft: '18%',
    height: '70px',
  },
  [theme.breakpoints.down('md')]: {    //900
    width: 370,
    left: '10%',
    height: '70px',
  },
  // [theme.breakpoints.down('lg')]: {   //1536
  //   width: '80%',
  //   height: '70px',
  // },
}))

const Logo = styled('div')({
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.4rem',
})

const NavButton = styled(Button)({
  color: '#1A1A1A',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  padding: '8px 16px',
  borderRadius: '25px',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.04)',
  },
})

const TalkButton = styled(Button)({
  backgroundColor: '#FFD036',
  color: '#1A1A1A',
  borderRadius: '25px',
  padding: '10px 24px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#FFD036',
    opacity: 0.9,
  },
})

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    background: '#ffffff',
    width: '100%',
    maxWidth: '300px',
    padding: '20px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  },
})

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [visible, setVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Pages', path: '' },
    { label: 'Contact Us', path: '/contactus' },
  ]

    useEffect(() => {
      // Track scroll position and toggle visibility of the AppBar
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setVisible(false); // Hide AppBar when scrolled down
        } else {
          setVisible(true); // Show AppBar when scrolled back up
        }
      };

      // Add event listener on mount
      window.addEventListener('scroll', handleScroll);

      // Clean up event listener on unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <StyledAppBar elevation={0} 
      // style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease-in-out', zIndex: 1100 }}
    >
      <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Logo>G</Logo>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '20px', color: 'black' }}>
            Genio India
          </Typography>
        </Box>

        {!isMobile ? (
          <Box display="flex" alignItems="center" gap={22}>
            <Box display="flex" gap={1}>
              {menuItems.map((item) => (
                <NavButton
                  key={item.label}
                  endIcon={item.hasSubmenu ? <KeyboardArrowDownIcon /> : null}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </NavButton>
              ))}
            </Box>
            <TalkButton>Let's Talk</TalkButton>
          </Box>
        ) : (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#1A1A1A' }}>
              <MenuIcon />
            </IconButton>
            <StyledDrawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ mb: 4 }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Logo>G</Logo>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '20px' }}>
                    Genio India
                  </Typography>
                </Box>
              </Box>
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(item.path)
                        setDrawerOpen(false)
                      }}
                    >
                      <ListItemText primary={item.label} />
                      {item.hasSubmenu && <KeyboardArrowDownIcon />}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Box sx={{ mt: 4, px: 2 }}>
                <TalkButton fullWidth>Let's Talk</TalkButton>
              </Box>
            </StyledDrawer>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  )
}

