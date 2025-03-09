import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SearchBar } from '../SearchBar';
import { MobileMenu } from '../MobileMenu';
import { UserMenu } from '../UserMenu';
import { LogoDisplay } from '../CompanyLogo/LogoDisplay';
import { useStore } from '@/hooks/store/useStore';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<HTMLElement | null>(null);
  const { totalItemsInCart } = useStore();
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <LogoDisplay />
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton color="inherit" onClick={() => navigate('/cart')}>
              <Badge badgeContent={totalItemsInCart} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu anchorEl={mobileMoreAnchorEl} isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} onProfileClick={handleProfileMenuOpen} />
      <UserMenu anchorEl={anchorEl} isOpen={isMenuOpen} onClose={handleMenuClose} />
    </Box>
  );
};
