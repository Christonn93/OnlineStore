import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface UserMenuProps {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserMenu = ({ anchorEl, isOpen, onClose }: UserMenuProps) => {
  return (
    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isOpen} onClose={onClose}>
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
    </Menu>
  );
};
