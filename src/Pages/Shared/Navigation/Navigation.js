import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Avatar from '@mui/material/Avatar';




const Navigation = () => {

    const { user, logOut } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <Button sx={{ color: 'black' }}>Home</Button>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to='/explore' style={{ textDecoration: 'none' }}>
                    <Button sx={{ color: 'black' }}>Explore</Button>
                </Link>
            </MenuItem>
            {
                user?.email &&
                <MenuItem>
                    <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: 'black' }}>Dashboard</Button>
                    </Link>
                </MenuItem>
            }
            <MenuItem>
                {
                    user?.email ?

                        <Button onClick={logOut} sx={{ color: 'black' }}>Logout</Button>

                        :
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: 'black' }}>Login</Button>
                        </Link>
                }

            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {
                        user?.email ?
                            <img style={{ borderRadius: '50%', width: '30px' }} src={user?.photoURL} alt="user" /> : <></>
                    }
                </IconButton>
                <p>{user?.displayName}</p>
            </MenuItem>
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#8C6897' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Click Flick
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box>
                            <NavLink to='/home' style={{ textDecoration: 'none' }}>
                                <Button sx={{ color: 'white' }}>Home</Button>
                            </NavLink>
                            <NavLink to='/explore' style={{ textDecoration: 'none' }}>
                                <Button sx={{ color: 'white' }}>Explore</Button>
                            </NavLink>
                            {
                                user?.email &&
                                <NavLink to='/dashboard' style={{ textDecoration: 'none' }}>
                                    <Button sx={{ color: 'white' }}>Dashboard</Button>
                                </NavLink>
                            }

                            {
                                user?.email ?

                                    <NavLink to='#' style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                                        <Button onClick={logOut} sx={{ color: 'white' }}>Logout</Button>
                                        <Avatar
                                            alt="user-photo"
                                            src={user?.photoURL}
                                            sx={{ width: 28, height: 28, marginLeft: 1 }}
                                        />
                                        <Typography sx={{ color: 'white', mx: 1, fontSize: '13px ' }}>{user.displayName}</Typography>
                                    </NavLink>

                                    :
                                    <>
                                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                            <Button
                                                sx={{ color: 'white' }}>
                                                Login
                                            </Button>
                                        </NavLink>

                                        <IconButton
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit"
                                        >
                                            <AccountCircle />
                                        </IconButton>
                                    </>
                            }
                        </Box>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export default Navigation;