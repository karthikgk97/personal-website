import React from 'react';
import './TopBar.css';

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import Avatar from '@mui/material/Avatar';
import personalPhoto from '../images/avatar_photo.png';

// Icons
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import WorkHistorySharpIcon from '@mui/icons-material/WorkHistorySharp';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { red } from '@mui/material/colors';

export default function TopBar() {
    return(
      <div className='top-bar'>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Link href="/" variant="body1" underline="none">
            <Tooltip title="Home">
              <Avatar alt="Karthik Ganesan" variant="circular" sizes="medium" src={personalPhoto} />
            </Tooltip>
          </Link>
          
          <Stack direction="row" justifyContent="flex-end" spacing={4}>
            <Link variant='body1' href="/education" underline="hover">
              <Tooltip title="Education">
                <SchoolTwoToneIcon fontSize='large' style={{ backgroundColor: 'lightblue', borderRadius: '50%', padding: '2.5px',transition: 'background-color 0.3s',
              "&:hover": {
                color: "red",
              } }}/>
              </Tooltip>
            </Link>

            <Link variant='body1' href="/work-history" underline="hover">
              <Tooltip title="Work History">
                <WorkHistorySharpIcon fontSize='large'/>
              </Tooltip>
            </Link>

            <Link href="/contact" variant="body1"underline="none">
              <Tooltip title="Contact">
                <ContactMailOutlinedIcon fontSize='large'/>
              </Tooltip>
            </Link>

          </Stack>
        </Stack>
      </div>
    );
}