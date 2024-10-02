import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CastIcon from '@mui/icons-material/Cast';
// import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


const pages = ['Home', 'Service', 'Portfolio', 'Team', 'Testimonial', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Corrected calc() interpolation
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function WebPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="relative" className="hero" sx={{ backgroundImage: 'url(https://trydo.rainbowit.net/assets/images/bg/bg-image-26.jpg)', backgroundAttachment: 'scroll' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src="https://trydo.rainbowit.net/assets/images/logo/logo-light.png" alt="Logo" />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', margin: '10px' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ zIndex: '999', color: '#fff' }}>
              <Search sx={{ border: '1px solid' }}>
                <SearchIconWrapper />
                <StyledInputBase
                  placeholder="Buy Now"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
          <Box className="header" sx={{ zIndex: 999, position: "relative" }}>
            <h1>Creative</h1>
            <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
            <button>Contact Us</button>
          </Box>
        </Container>
      </AppBar>

      <Box >
        <Container>
      <Grid Container spacing={{ xs: 2, md: 3 }}   columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: 'flex', flexWrap :'wrap', margin : '40px 0px 40px 0px'}}>
      <Grid size={{ sx :3, xs: 2, sm: 3, md: 3 }}>
        <Item> 
           <Card sx={{
          maxWidth: 345,
          margin: '20px 0px 0px 0px',
          // boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',                    
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          },
        }}
        >
          <CardActionArea
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
          >
            <CastIcon
              sx={{
                margin: '10px 17px 0px 17px',
                fontSize: '45px',
                color: 'red',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Strategy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  color: 'rgb(138, 135, 135, 0.95)', 
                }}
              >
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Item>
        </Grid> 
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <Item> 
           <Card sx={{
          maxWidth: 345,
          margin: '20px 0px 0px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',                    
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          },
        }}
        >
          <CardActionArea
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
          >
            <CastIcon
              sx={{
                margin: '10px 17px 0px 17px',
                fontSize: '45px',
                color: 'red',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Strategy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  color: 'rgb(138, 135, 135, 0.95)', 
                }}
              >
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Item>
        </Grid> 
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <Item> 
           <Card sx={{
          maxWidth: 345,
          margin: '20px 0px 0px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',                    
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          },
        }}
        >
          <CardActionArea
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
          >
            <CastIcon
              sx={{
                margin: '10px 17px 0px 17px',
                fontSize: '45px',
                color: 'red',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Strategy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  color: 'rgb(138, 135, 135, 0.95)', 
                }}
              >
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Item>
        </Grid> 
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <Item> 
           <Card sx={{
          maxWidth: 345,
          margin: '20px 0px 0px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',                    
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          },
        }}
        >
          <CardActionArea
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
          >
            <CastIcon
              sx={{
                margin: '10px 17px 0px 17px',
                fontSize: '45px',
                color: 'red',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Strategy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  color: 'rgb(138, 135, 135, 0.95)', 
                }}
              >
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Item>
        </Grid> 
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <Item> 
           <Card sx={{
          maxWidth: 345,
          margin: '20px 0px 0px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',                    
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          },
        }}
        >
          <CardActionArea
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
          >
            <CastIcon
              sx={{
                margin: '10px 17px 0px 17px',
                fontSize: '45px',
                color: 'red',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Strategy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  color: 'rgb(138, 135, 135, 0.95)', 
                }}
              >
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Item>
        </Grid> 
        </Grid>
        </Container>
        </Box>
        {/* <Card sx={{   maxWidth: 345,
          margin: '70px 0px 30px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',            
              fontSize: '1.2rem',        
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          }, }}>
          <CardActionArea  sx={{   '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },}}>
            <CoPresentRoundedIcon sx={{ margin: ' 10px 17px 0px 17px', fontSize: '45px', color: 'red' }} />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Stratagy
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '18px', color: 'rgb(138 135 135 / 95%)' }}>
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{  maxWidth: 345,
          margin: '70px 0px 30px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',            
              fontSize: '1.2rem',        
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          }, }}>
          <CardActionArea sx={{   '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },}}>
          
            <CastIcon sx={{ margin: ' 10px 17px 0px 17px', fontSize: '45px', color: 'red' }} />
           

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Stratagy
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '18px', color: 'rgb(138 135 135 / 95%)' }}>
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{  maxWidth: 345,
          margin: '70px 0px 30px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',            
              fontSize: '1.2rem',        
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          }, }}>
          <CardActionArea sx={{   '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },}}>
          
            <CastIcon sx={{ margin: ' 10px 17px 0px 17px', fontSize: '45px', color: 'red' }} />
           

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Stratagy
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '18px', color: 'rgb(138 135 135 / 95%)' }}>
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{  maxWidth: 345,
          margin: '70px 0px 30px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',            
              fontSize: '1.2rem',        
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          }, }}>
          <CardActionArea sx={{   '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },}}>
          
            <CastIcon sx={{ margin: ' 10px 17px 0px 17px', fontSize: '45px', color: 'red' }} />
         

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Stratagy
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '18px', color: 'rgb(138 135 135 / 95%)' }}>
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{  maxWidth: 345,
          margin: '70px 0px 30px 0px',
          boxShadow: 3,
          borderRadius: 2,
          ':hover': {
            boxShadow: 6, 
            '& .MuiTypography-root': {  
              color: 'white',            
              fontSize: '1.2rem',        
            },
            '& .MuiSvgIcon-root' : {
              color : "white"
            }
          }, }}>
          <CardActionArea sx={{   '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },}}>
        
            <CastIcon sx={{ margin: ' 10px 17px 0px 17px', fontSize: '45px', color: 'red' }} />
    

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px' }}>
                Business Stratagy
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '18px', color: 'rgb(138 135 135 / 95%)' }}>
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}
     



    </>
  );
}

export default WebPage;
