import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Edit, Delete } from '@mui/icons-material';

function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ background: '#fff', color: '#222', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Rizqiamirul" src="/profile-rizqi.jpg" sx={{ width: 48, height: 48, bgcolor: '#2196f3', fontSize: 24 }}>R</Avatar>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Rizqiamirul</Typography>
            <Typography variant="caption" color="text.secondary">Telkom University</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 