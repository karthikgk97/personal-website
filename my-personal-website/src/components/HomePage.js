import * as React from 'react';
import './HomePage.css';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import useMediaQuery from '@mui/material/useMediaQuery';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import TracerouteComponent from './TraceRouteComponent';
// Icons
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';

import profileImage from '../images/personal_photo.jpg';
import { fontFamily } from '@mui/system';

export default function HomePage() {
    
    // const isPC = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isPC = useMediaQuery('(min-width:500px)')
    return (
    <>
    {/* <TracerouteComponent /> */}
    {/* , top: '50%', left: '50%', transform: 'translate(-50%, -50%)' */}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack direction={isPC ? 'row' : 'row'} justifyContent="center" alignItems="center" spacing={1}>
            <div>
            {/* <div style={{ marginBottom: isPC ? 0 : '20px', textAlign: isPC ? 'left' : 'center' }}> */}
                <Typography variant="h2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: '5%', marginTop: '0%', marginBottom: '5%'}}> <b>Karthik Ganesan </b></Typography>
                <ListItem alignItems="center">
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <BadgeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)' , fontFamily: 'monospace'}}> <b>Role</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Developer</Typography>}
                    />
                </ListItem>

                <ListItem alignItems="center">
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <BusinessRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)', fontFamily: 'monospace' }}> <b>Company</b>&nbsp;&nbsp;&nbsp;&nbsp;: Tyson Foods</Typography>}
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
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)', fontFamily: 'monospace' }}> <b>About</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Motivated, Cross-functional Software Engineer</Typography>}
                    />
                </ListItem>

                <ListItem >
                    <ListItemIcon sx={{ marginBottom: '2%', marginRight: '-2.5%' }}>
                        <ManageSearchRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="body1" style={{ color: 'rgb(75, 75, 75)', fontFamily: 'monospace' }}> <b>Key Skills</b>&nbsp;: Python, AWS, GCP, Robotics</Typography>}
                    />
                </ListItem>
            </div>
            <img src={profileImage} alt="Profile" style={{maxWidth: '100%',  width: '20%', height: '20%', justifyContent: 'flex-end', borderRadius: '10%'}} />
        </Stack>
    </div>
    </>
    );
  }