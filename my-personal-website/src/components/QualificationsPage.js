import * as React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import asu_logo from '../images/asu_logo.png';
import anna_univ_logo from '../images/anna_university_logo.png';
import tyson_logo from '../images/tyson_logo.png';
import duke_univ_logo from '../images/duke_univ_logo.png';

export default function QualificationsPage() {
    const isPC = useMediaQuery('(min-width:500px)')
    
    return (
        <>
        <Stack direction="column" justifyContent={isPC ? "flex-start" : 'center'} alignItems="stretch" spacing={2}>
        <Typography variant="h3" style={{ fontFamily: 'Monospace', textAlign: 'center', marginTop: '2%' }}> <b> Work Experience </b></Typography>
            <Box>
                
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: '1%'}}> 
                    <Avatar alt="Tyson Foods" variant="circular" sizes="small" src={tyson_logo} style={{border: '0.1px solid lightgray'}}/>
                    <b> Tyson Foods </b>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Springdale, AR </span>
                    
                    
                </Typography>
 
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                {/* <Typography variant="body1" style={{ display: 'flex', marginLeft: 56}}> */}
                    <AccountBoxRoundedIcon />
                    <b> Role</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Developer </span>
                    
                </Typography>
                
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Nov 2021 - Present </span>
                </Typography>
            </Box>

            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                <Avatar alt="Duke" variant="circular" sizes="small" src={duke_univ_logo} style={{border: '0.1px solid lightgray'}}/>
                <span style={{marginLeft: 1}}><b> Duke University </b></span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Durham, NC </span>
                    
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <AccountBoxRoundedIcon />
                    <b> Role</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Software Applications Engineer </span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Jan 2021 - Oct 2021 </span>
                    
                </Typography>
                
            </Box>

            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="ASU" variant="circular" sizes="small" src={asu_logo} style={{border: '0.1px solid lightgray'}}/>
                    <span style={{marginLeft: 1}}><b> Arizona State University </b></span>
                </Typography>
               
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Tempe, AZ </span>
                    
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <AccountBoxRoundedIcon />
                    <b> Role</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Research Assistant </span>
                    
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;: 
                    <span style={{marginLeft: '0.5%'}}> Jan 2020 - Jan 2021 </span>
                    
                </Typography>

            </Box>

            <Divider />

            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}> <b> Education </b></Typography>
            <Box>                        
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="ASU" variant="circular" sizes="small" src={asu_logo} style={{border: '0.1px solid lightgray'}} />
                    <b> Arizona State University </b>
                </Typography>
                
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Tempe, AZ </span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <SchoolRoundedIcon />
                    <b> Degree</b>
                    &nbsp;&nbsp;&nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Master of Science in Mechanical Engineering </span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;: 
                    <span style={{marginLeft: '0.5%'}}> 2018-2020 </span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <GradingRoundedIcon />
                    <b> CGPA</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                    <span style={{marginLeft: '0.5%'}}> 3.96/4.00 </span>
                </Typography>

            </Box>
            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="Anna University" variant="circular" sizes="small" src={anna_univ_logo} style={{border: '0.1px solid lightgray'}}/>
                    <span style={{marginLeft: 1}}><b> Anna University </b></span>
                </Typography>
                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <LocationCityRoundedIcon />
                    <b> Location</b>
                    &nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Chennai, India </span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <SchoolRoundedIcon />
                    <b>Degree</b>
                    &nbsp;&nbsp;&nbsp;:
                    <span style={{marginLeft: '0.5%'}}> Bachelors in Aeronautical Engineering </span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <TodayRoundedIcon />
                    <b> Duration</b>
                    &nbsp;: 
                    <span style={{marginLeft: '0.5%'}}> 2014-2018 </span>
                </Typography>

                <Typography variant="body1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica', marginLeft: isPC? '56px': '5%'}}> 
                    <GradingRoundedIcon />
                    <b> CGPA</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                    <span style={{marginLeft: '0.5%'}}> 8.03/10.00 </span>
                </Typography>
            </Box>

            
            
        </Stack>
        </>
    );
  }
