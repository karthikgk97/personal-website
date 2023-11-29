import * as React from 'react';
import './HomePage.css';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// Icons
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';

import profileImage from '../images/personal_photo.jpg';

export default function HomePage() {
    
    return (
        
    <>
    {/* <TracerouteComponent /> */}
    {/* , top: '50%', left: '50%', transform: 'translate(-50%, -50%)' */}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <Stack direction='row' justifyContent="center" alignItems="center" spacing={1}>
            <div>
                <Typography variant="h2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'monospace', marginLeft: '5%', marginTop: '0%', marginBottom: '5%'}}> <b>Karthik Ganesan </b></Typography>
                <ListItem alignItems="center">
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <BadgeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)' , fontFamily: 'monospace'}}> <b>Role</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span style={{marginLeft: '0.5%'}}> Developer </span></Typography>}
                    />
                </ListItem>

                <ListItem alignItems="center">
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <BusinessRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)', fontFamily: 'monospace' }}> <b>Company</b>&nbsp;&nbsp;&nbsp;&nbsp;: <span style={{marginLeft: '0.5%'}}> Tyson Foods </span> </Typography>}
                    />
                </ListItem>

                <ListItem >
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <PinDropRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)', fontFamily: 'monospace' }}> <b>Location</b>&nbsp;&nbsp;&nbsp;: Rogers, Arkansas</Typography>}
                    />
                </ListItem>

                <ListItem >
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <InfoRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)', fontFamily: 'monospace' }}> <b>About</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Motivated, Cross-functional Developer</Typography>}
                    />
                </ListItem>

                <ListItem >
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <ManageSearchRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)', fontFamily: 'monospace' }}> <b>Key Skills</b>&nbsp;: Python, AWS, GCP, LLM, Robotics, Rust</Typography>}
                    />
                </ListItem>
            </div>
            <img src={profileImage} alt="Profile" style={{maxWidth: '100%',  width: '20%', height: '20%', justifyContent: 'flex-end', borderRadius: '10%'}} />
        </Stack>
    </div>
    </>
    );
  }