import React from 'react';
import './TopBar.css';

import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';


import { NavLink } from 'react-router-dom';

// Icons
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function TopBar() {
    
    return(
      <div className='top-bar'>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <NavLink exact to="/" className="nav-link" variant="body1" underline="none">
            <Tooltip title="Home">
              {/* <Avatar alt="Karthik Ganesan" variant="circular" sizes="medium" src={personalPhoto} /> */}
              <HomeRoundedIcon fontSize='large' style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px'}} />
            </Tooltip>
          </NavLink>
          
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <NavLink exact to="/qualifications" activeClassName="active-link" className="nav-link" variant="body1" underline="none">
                <Tooltip title="Qualifications">
                  <SchoolRoundedIcon fontSize='large' style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px'}} />
                </Tooltip>
            </NavLink>

            <NavLink exact to="/work-history" activeClassName="active-link" className="nav-link" variant="body1" underline="none">
              <Tooltip title="Work History">
                <WorkHistoryRoundedIcon fontSize='large' style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px'}}/>
              </Tooltip>
              </NavLink>

            <NavLink exact to="/contact" activeClassName="active-link" className="nav-link" variant="body1" underline="none">
              <Tooltip title="Contact">
                <ContactMailRoundedIcon fontSize='large' style={{ backgroundColor: 'rgb(200, 200, 200)', borderRadius: '50%', padding: '2.5px' }}/>
              </Tooltip>
              </NavLink>

          </Stack>
        </Stack>
      </div>
    );
}