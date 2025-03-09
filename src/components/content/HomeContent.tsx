import { Box, Typography } from '@mui/material';

export const HomeContent = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h1">Welcome to Store Online</Typography>
      <Typography variant="body1">
        Welcome to our online store! We're excited to offer you a wide variety of high-quality products at competitive prices. Whether you're looking for the latest electronics, trendy fashion, or
        unique home decor, we have something for everyone.
      </Typography>
      <Typography variant="body1">
        Our user-friendly platform is designed to make your shopping experience as smooth and convenient as possible, with easy navigation and secure checkout. Plus, our knowledgeable and friendly
        customer service team is always ready to assist you with any questions or concerns you may have. So go ahead and browse our extensive selection of products, and treat yourself to something
        special today!
      </Typography>
    </Box>
  );
};
