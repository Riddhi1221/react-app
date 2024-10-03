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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


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


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

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
      <Grid Container spacing={{ xs: 2, md: 3 }}   columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: 'flex', flexWrap :'wrap', margin : '40px 0px 70px 0px'}}>
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
        <Box sx={{ backgroundColor : '#f8f9fc' }}>
          <Container>
          <Grid container spacing={2} sx={{alignItems : 'center'}}>
            <Grid size={{ xs: 5, md: 4 }} sx={{borderRadius : "10px" , overflow : "hidden" , margin : '70px 0px 30px 0px'}}>
                  <img src="https://trydo.rainbowit.net/assets/images/about/about-3.jpg" alt="" style={{width : '100%'}} />
            </Grid>
            <Box sx={{ width: '64%'}}>
            <Grid  sx={{marginBottom : '10px' , width : '100%'}}>
                <h1 style={{fontSize :'70px' , marginBottom : '10px' , color : '#1f1f25'}}>About Us</h1>
                <p style={{fontSize :'25px' , marginBottom : '20px'  , color : 'rgba(29,29,36,.75)'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered  <strong>alteration</strong> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display : 'flex'}}>
                <Box sx={{display : 'flex'}}>
                <Grid size={6} >
                  <h1 style={{fontSize :'35px',margin : '10px 10px 10px 10px' , color : '#1f1f25'}}>Who we are</h1>
                  <p style={{fontSize :'20px' ,margin : '10px 10px 10px 10px' , color : 'rgba(29,29,36,.75)'}}>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </Grid>
                <Grid size={ 6}>
                <h1 style={{fontSize :'35px',margin : '10px 10px 10px 10px' , color : '#1f1f25'}}>Who we are</h1>
                <p style={{fontSize :'20px',margin : '10px 10px 10px 10px' , color : 'rgba(29,29,36,.75)'}}>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </Grid>
                </Box>
                </Grid>
            </Grid>
            </Box>
            </Grid> 
          </Container>
        </Box>
        <Box>
          <Container>
           <Box sx={{width : '50%' , fontSize : '20px' , margin : '70px 0px 40px 0px'}}>
           <h1>Our Portfolio</h1>
           <span style={{color :'rgba(29,29,36,.75)'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</span>
           </Box>
          </Container>
        </Box>
        <Box>
          <Container>
          <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
          </Container>
        </Box>
    </>
  );
}



export default WebPage;
