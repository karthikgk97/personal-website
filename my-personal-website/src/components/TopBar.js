import React from 'react';
import './TopBar.css';

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import Avatar from '@mui/material/Avatar';
import personalPhoto from '../images/avatar_photo.png';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

export default function TopBar() {
    return(
      <div className='top-bar'>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Link href="/" variant="body1" underline="none">
            <Tooltip title="Home">
              <Avatar alt="Karthik Ganesan" variant="circular" sizes="medium" src={personalPhoto} />
            </Tooltip>
          </Link>
          
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <Link variant='body1' href="/Projects" underline="hover">
              <Tooltip title="Projects">
                <SchoolTwoToneIcon fontSize='large'/>
              </Tooltip>
            </Link>

            <Link href="/Contact" variant="body1"underline="none">
              <Tooltip title="Contact">
                <ContactMailOutlinedIcon fontSize='large'/>
              </Tooltip>
            </Link>

          </Stack>
        </Stack>
      </div>
    );
}