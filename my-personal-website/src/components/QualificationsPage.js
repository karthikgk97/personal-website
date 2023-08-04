import * as React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';

import asu_logo from '../images/asu_logo.png';
import anna_univ_logo from '../images/anna_university_logo.png';
import tyson_logo from '../images/tyson_logo.png';
import duke_univ_logo from '../images/duke_univ_logo.png';
import {FaUserGraduate} from 'react-icons/fa';
export default function QualificationsPage() {
    return (
        <>
        <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
        <Typography variant="h3" style={{ fontFamily: 'Monospace', textAlign: 'center', marginTop: '20px' }}> <b> Work Experience </b></Typography>
            {/* <Box  sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,32,91,1) 100%)' }}>         */}
                {/* <Box sx={{width: '40%', height: '400px', backgroundImage: `url(${asu_logo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%',}}> */}  
            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="Tyson Foods" variant="circular" sizes="small" src={tyson_logo} style={{border: '0.1px solid lightgray'}}/>
                    <b> Tyson Foods </b>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    Springdale, Arkansas
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <AccountBoxRoundedIcon />
                    <b> Role</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    Developer
                </Typography>
                
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;:
                    Nov 2021 - Present
                </Typography>
            </Box>

            {/* <Box sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,26,87,1) 100%);'}} style={{marginTop: '-1px'}} > */}
            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                <Avatar alt="Duke" variant="circular" sizes="small" src={duke_univ_logo} style={{border: '0.1px solid lightgray'}}/>
                <span style={{marginLeft: 1}}><b> Duke University </b></span>
                {/* <b> Duke University </b> */}
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    Durham, North Carolina
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <AccountBoxRoundedIcon />
                    <b> Role</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    Software Applications Engineer
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;: 
                    Jan 2021 - Oct 2021
                </Typography>
                
            </Box>

            {/* <Box sx={{background: 'rgb(167,4,56)', background: 'linear-gradient(90deg, rgba(167,4,56,1) 0%, rgba(255,200,0,1) 35%, rgba(255,255,255,1) 100%)' }}> */}
            
            {/* <Box sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,200,0,1) 35%, rgba(167,4,56,1) 100%)'}} style={{marginTop: '-1px'}}> */}
            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="ASU" variant="circular" sizes="small" src={asu_logo} style={{border: '0.1px solid lightgray'}}/>
                    <span style={{marginLeft: 1}}><b> Arizona State University </b></span>
                </Typography>
               
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    Tempe, Arizona
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <AccountBoxRoundedIcon />
                    <b> Role</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    Research Assistant
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;: 
                    Jan 2020 - Jan 2021
                </Typography>

            </Box>

            <Divider />

            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}> <b> Education </b></Typography>
            <Box>        
                {/* <Box sx={{width: '40%', height: '400px', backgroundImage: `url(${asu_logo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%',}}> */}  
                
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="ASU" variant="circular" sizes="small" src={asu_logo} style={{border: '0.1px solid lightgray'}} />
                    <b> Arizona State University </b>
                </Typography>
                
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    Tempe, Arizona
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    {/* <FaUserGraduate />&nbsp; */}
                    <SchoolRoundedIcon />
                    <b>Degree</b>
                    &nbsp;&nbsp;&nbsp;:
                    Master of Science in Mechanical Engineering
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;: 
                    2018-2020
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <GradingRoundedIcon />
                    <b> CGPA</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                    3.96/4.00
                </Typography>

            </Box>
            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="Anna University" variant="circular" sizes="small" src={anna_univ_logo} style={{border: '0.1px solid lightgray'}}/>
                    <span style={{marginLeft: 1}}><b> Anna University </b></span>
                </Typography>
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    Chennai, India
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <SchoolRoundedIcon />
                    {/* <FaUserGraduate />&nbsp; */}
                    <b>Degree</b>
                    &nbsp;&nbsp;&nbsp;:
                    Bachelors in Aeronautical Engineering
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;: 
                    2014-2018
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Monospace', marginLeft: 56}}> 
                    <GradingRoundedIcon />
                    <b> CGPA</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                    8.03/10.00
                </Typography>
            </Box>

            
            
        </Stack>
        </>
    );
  }
