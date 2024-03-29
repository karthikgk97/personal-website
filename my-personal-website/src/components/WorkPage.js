import * as React from 'react';
// import './WorkPage.css';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import LinquaContents from './projects/Linqua';
import TySimContents from './projects/TySim';
import GripRLContents from './projects/GripRL';
import BROCTContents from './projects/BROCT';
import GoChartContents from './projects/GoChart';


import KeyboardArrowDownIcon from 
    "@mui/icons-material/KeyboardArrowDown";

import KeyboardArrowUpIcon from 
    "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import Avatar from '@mui/material/Avatar';

import tyson_logo from '../images/tyson_logo.png';
import duke_univ_logo from '../images/duke_univ_logo.png';
import asu_logo from '../images/asu_logo.png';

export default function WorkPage() {
    const [linquaOpen, setLinquaOpen] = React.useState(false);
    const [tysimOpen, setTySimOpen] = React.useState(false);
    const [gripRLOpen, setGripRLOpen] = React.useState(false);
    const [broctOpen, setBroctOpen] = React.useState(false);
    const [goChartOpen, setGoChartOpen] = React.useState(false);

    return (
        <>
        <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
        <Typography variant="h2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  <b>Work History</b> </Typography>
        
        <Card sx={{ borderRadius: 0 }}>
            <div onClick={() => setLinquaOpen(!linquaOpen)} style={{ cursor: 'pointer'}}>
            <CardHeader
                    title= {<Typography variant="h5" style={{display: 'flex', fontFamily: 'Monospace'}}> <b>Project Linqua</b> </Typography>}
                    avatar = {<Avatar alt="Tyson Foods" variant="circular" sizes="large" src={tyson_logo}/>}
                    action={ 
                        <IconButton
                            onClick={() => setLinquaOpen(!linquaOpen)}
                            aria-label="expand"
                            size="large"
                        >
                            {linquaOpen ? <KeyboardArrowUpIcon />
                                : <KeyboardArrowDownIcon />}
                        </IconButton>
                    }
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,32,91,1) 100%)' }}
            >
            </CardHeader>
            </div>
            <>
                <Collapse in={linquaOpen} unmountOnExit>
                    <CardContent 
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,32,91,1) 100%)' }}
                    >
                    {/* <CardContent> */}
                        <LinquaContents />
                    </CardContent>
                </Collapse>
            </>
        </Card>  

        <Card sx={{ borderRadius: 0 }} style={{marginTop: '-1px'}}>
            <div onClick={() => setTySimOpen(!tysimOpen)} style={{ cursor: 'pointer'}}>
            <CardHeader
                    title= {<Typography variant="h5" style={{display: 'flex', fontFamily: 'Monospace'}}> <b>Project TySim</b> </Typography>}
                    avatar = {<Avatar alt="Tyson Foods" variant="circular" sizes="large" src={tyson_logo}/>}
                    action={ 
                        <IconButton
                            onClick={() => setTySimOpen(!tysimOpen)}
                            aria-label="expand"
                            size="large"
                        >
                            {tysimOpen ? <KeyboardArrowUpIcon />
                                : <KeyboardArrowDownIcon />}
                        </IconButton>
                    }
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,32,91,1) 100%)' }}
            >
            </CardHeader>
            </div>
            <>
                <Collapse in={tysimOpen} unmountOnExit>
                    <CardContent 
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,32,91,1) 100%)' }}
                    >
                    {/* <CardContent> */}
                        <TySimContents />
                    </CardContent>
                </Collapse>
            </>
        </Card>  

        <Card sx={{ borderRadius: 0 }} style={{marginTop: '-1px'}}>
            <div onClick={() => setGripRLOpen(!gripRLOpen)} style={{ cursor: 'pointer'}}>
            <CardHeader
                    title= {<Typography variant="h5" style={{display: 'flex', fontFamily: 'Monospace'}}> <b>Project Grip-RL</b> </Typography>}
                    avatar = {<Avatar alt="Tyson Foods" variant="circular" sizes="large" src={tyson_logo}/>}
                    action={ 
                        <IconButton
                            onClick={() => setGripRLOpen(!gripRLOpen)}
                            aria-label="expand"
                            size="large"
                        >
                            {gripRLOpen ? <KeyboardArrowUpIcon />
                                : <KeyboardArrowDownIcon />}
                        </IconButton>
                    }
                    // style={{}}
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,32,91,1) 100%)' }}
            >
            </CardHeader>
            </div>
            <>
                <Collapse in={gripRLOpen} unmountOnExit>
                    <CardContent 
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,32,91,1) 100%)' }}
                    >
                        <GripRLContents />
                    </CardContent>
                </Collapse>
            </>
        </Card>  

        {/* Duke Contents */}

        <Card sx={{ borderRadius: 0 }} style={{marginTop: '-1px'}}  >
            <div onClick={() => setBroctOpen(!broctOpen)} style={{ cursor: 'pointer'}}>
            <CardHeader
                    title= {<Typography variant="h5" style={{display: 'flex', fontFamily: 'Monospace'}}> <b>Project BROCT</b> </Typography>}
                    avatar = {<Avatar alt="Duke" variant="circular" sizes="large" src={duke_univ_logo} style={{border: '0.1px solid lightgray'}}/>}
                    action={ 
                        <IconButton
                            onClick={() => setBroctOpen(!broctOpen)}
                            aria-label="expand"
                            size="large"
                        >
                            {broctOpen ? <KeyboardArrowUpIcon />
                                : <KeyboardArrowDownIcon />}
                        </IconButton>
                    }
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,26,87,1) 100%)'}}
            >
            </CardHeader>
            </div>
            <>
                <Collapse in={broctOpen} unmountOnExit>
                    <CardContent 
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,26,87,1) 100%)' }}
                    >
                        <BROCTContents />
                    </CardContent>
                </Collapse>
            </>
        </Card>  

        {/* Go Chart Contents */}
        <Card sx={{ borderRadius: 0 }} style={{marginTop: '-1px'}}  >
            <div onClick={() => setGoChartOpen(!goChartOpen)} style={{ cursor: 'pointer'}}>
            <CardHeader
                    title= {<Typography variant="h5" style={{display: 'flex', fontFamily: 'Monospace'}}> <b>Project Go-CHART</b> </Typography>}
                    avatar = {<Avatar alt="ASU" variant="circular" sizes="large" src={asu_logo} style={{border: '0.1px solid lightgray'}}/>}

                    action={ 
                        <IconButton
                            onClick={() => setGoChartOpen(!goChartOpen)}
                            aria-label="expand"
                            size="large"
                        >
                            {goChartOpen ? <KeyboardArrowUpIcon />
                                : <KeyboardArrowDownIcon />}
                        </IconButton>
                    }
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,200,0,1) 35%, rgba(167,4,56,1) 100%)'}}
            >
            </CardHeader>
            </div>
            <>
                <Collapse in={goChartOpen} unmountOnExit>
                    <CardContent 
                    sx={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,200,0,1) 35%, rgba(167,4,56,1) 100%)' }}
                    >
                        <GoChartContents />
                    </CardContent>
                </Collapse>
            </>
        </Card>  

        </Stack>
        </>
    );
}