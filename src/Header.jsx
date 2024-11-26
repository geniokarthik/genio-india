import React, { useState } from 'react';
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
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Pages', path: '' },
    { label: 'Contact Us', path: '/contactus' },
  ]

  return (
    <StyledAppBar elevation={0}>
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

