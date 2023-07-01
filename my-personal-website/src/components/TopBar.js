import React from 'react';
import './TopBar.css';

import Stack from '@mui/material/Stack';
// import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import Avatar from '@mui/material/Avatar';
import personalPhoto from '../images/avatar_photo.png';

import { Link } from 'react-router-dom';

// Icons
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function TopBar() {
    return(
      <div className='top-bar'>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Link to="/" variant="body1" underline="none">
            <Tooltip title="Home">
              {/* <Avatar alt="Karthik Ganesan" variant="circular" sizes="medium" src={personalPhoto} /> */}
              <HomeRoundedIcon fontSize='large' hoverColor="red" style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px'}} 
                sx={{ "&:hover": { color: "rgb(75, 75, 75)" } }}/>
            </Tooltip>
          </Link>
          
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Link variant='body1' to="/education" underline="hover">
              <Tooltip title="Education">
                <SchoolRoundedIcon fontSize='large' hoverColor="red" style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px'}} 
                sx={{ "&:hover": { color: "rgb(75, 75, 75)" } }}/>
              </Tooltip>
            </Link>

            <Link variant='body1' to="/work-history" underline="hover">
              <Tooltip title="Work History">
                <WorkHistoryRoundedIcon fontSize='large' style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px'}}
                sx={{ "&:hover": {color: "rgb(75, 75, 75)"} }}/>
              </Tooltip>
            </Link>

            <Link to="/contact" variant="body1" underline="none">
              <Tooltip title="Contact">
                <ContactMailRoundedIcon fontSize='large' style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px' }}
                sx={{ "&:hover": { color: "rgb(75, 75, 75)", backgroundColor: "blue" } }}/>
              </Tooltip>
            </Link>

          </Stack>
        </Stack>
      </div>
    );
}