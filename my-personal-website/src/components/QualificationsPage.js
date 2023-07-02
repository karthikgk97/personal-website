import * as React from 'react';


import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import asu_logo from '../images/asu_logo.png';
import anna_univ_logo from '../images/anna_university_logo.png';
import tyson_logo from '../images/tyson_logo.png';
import duke_univ_logo from '../images/duke_univ_logo.png';

export default function QualificationsPage() {
    return (
        <>
        <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
        <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}> <b> Work Experience </b></Typography>
            <Box>        
                {/* <Box sx={{width: '40%', height: '400px', backgroundImage: `url(${asu_logo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%',}}> */}  
                
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="Tyson Foods" variant="circular" sizes="small" src={tyson_logo}/>
                    <b> Tyson Foods </b>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 56}}> <b> Springdale, Arkansas</b></Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6}>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 56}}> <b> Developer </b></Typography>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginRight: 15}}> <b> Nov 2021 - Present</b></Typography>
                </Stack>
            </Box>

            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                <Avatar alt="Duke" variant="circular" sizes="small" src={duke_univ_logo} sx={{ bgcolor:'grey' }}/>
                <span style={{marginLeft: 1}}><b> Duke University </b></span>
                {/* <b> Duke University </b> */}
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 56}}> <b> Durham, North Carolina</b></Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6}>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 56}}> <b> Software Applications Engineer </b></Typography>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginRight: 15}}> <b> Jan 2021 - Oct 2021</b></Typography>
                </Stack>
            </Box>

            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                <Avatar alt="ASU" variant="circular" sizes="small" src={asu_logo} />
                {/* <b> Arizona State University </b> */}
                <span style={{marginLeft: 1}}><b> Arizona State University </b></span>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 56}}> <b> Tempe, Arizona</b></Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6}>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 56}}> <b> Research Assistant</b></Typography>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginRight: 15}}> <b> Jan 2020 - Jan 2021</b></Typography>
                </Stack>
            </Box>



            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}> <b> Education </b></Typography>
            <Box>        
                {/* <Box sx={{width: '40%', height: '400px', backgroundImage: `url(${asu_logo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%',}}> */}  
                
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                    <Avatar alt="ASU" variant="circular" sizes="small" src={asu_logo} />
                    <b> Arizona State University </b>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 55}}> <b> Tempe, Arizona</b></Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6}>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 55}}> <b> Master of Science in Mechanical Engineering </b></Typography>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginRight: 15}}> <b> 2018-2020</b></Typography>
                </Stack>
                <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 55}}> <b> CGPA: 3.96/4.00</b></Typography>
            </Box>
            <Box>
                <Typography variant="h4" style={{ display:'flex', alignItems:'center', color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 15}}> 
                <Avatar alt="Anna University" variant="circular" sizes="small" src={anna_univ_logo}/>
                <span style={{marginLeft: 1}}><b> Anna University </b></span>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 60}}> <b> Chennai, India</b></Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6}>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 60}}> <b> Bachelors in Aeronautical Engineering </b></Typography>
                    <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginRight: 15}}> <b> 2014-2018</b></Typography>
                </Stack>
                <Typography variant="body1" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', marginLeft: 60}}> <b> CGPA: 8.03/10.00</b></Typography>
            </Box>

            <Divider light />
            
        </Stack>
        </>
    );
  }
