import * as React from 'react';
import './HomePage.css';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// Icons
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import profileImage from '../images/personal_photo.jpg';

export default function HomePage() {
    return (
    <>
    <Box sx={{position: 'absolute', flex: '1', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background:"rgb(255, 255, 255)"}}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <div>
                <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)' }}> <b>Karthik Ganesan </b></Typography>
                <ListItem alignItems="center">
                    <ListItemIcon sx={{ marginBottom: 1, marginRight: -2.5 }}>
                        <BadgeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)' }}> <b>Role</b>: Developer</Typography>}
                    />
                </ListItem>

                <ListItem alignItems="center">
                    <ListItemIcon sx={{ marginBottom: 1, marginRight: -2.5 }}>
                        <BusinessRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)' }}> <b>Company</b>: Tyson Foods</Typography>}
                    />
                </ListItem>

                <ListItem >
                    <ListItemIcon sx={{ marginBottom: 1, marginRight: -2.5 }}>
                        <PinDropRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)' }}> <b>Location</b>: Rogers, Arkansas</Typography>}
                    />
                </ListItem>

                <ListItem >
                    <ListItemIcon sx={{ marginBottom: 1, marginRight: -2.5 }}>
                        <InfoRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)' }}> <b>About</b>: Motivated, Cross-functional Software Engineer</Typography>}
                    />
                </ListItem>
            </div>
            <img src={profileImage} alt="Profile" style={{ width: '50%', height: '50%', justifyContent: 'flex-end', borderRadius: '10%'}} />
         </Stack>
      </Box>     
      </>
    );
  }