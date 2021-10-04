import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { green, blueGrey } from '@mui/material/colors';
import TemporaryDrawer from '../UI/TemporaryDrawer';

export default function LemarrHubAppBar({ toggleDrawer }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          height: 80,
          justifyContent: 'center',
          background: blueGrey[900],
          color: green.A400,
        }}
      >
        <Toolbar>
          <TemporaryDrawer />
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Stick No Bills',
              fontWeight: 'bold',
            }}
          >
            Lemarr Hub
          </Typography>
          {/* #TODO : sign in */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
