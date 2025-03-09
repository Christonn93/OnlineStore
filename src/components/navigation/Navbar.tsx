import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { SearchBar } from '../SearchBar';
import { MobileMenu } from '../MobileMenu';
import { UserMenu } from '../UserMenu';
import { LogoDisplay } from '../CompanyLogo/LogoDisplay';
import { useStore } from '@/hooks/store/useStore';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<HTMLElement | null>(null);
  const { totalItemsInCart } = useStore();

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
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={totalItemsInCart} color="error">
                <ShoppingBasketIcon />
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
