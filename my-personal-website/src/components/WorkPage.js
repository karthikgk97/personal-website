import * as React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import TySimContents from './projects/TySim';
import GripRLContents from './projects/GripRL';


import KeyboardArrowDownIcon from 
    "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from 
    "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import Avatar from '@mui/material/Avatar';

import tyson_logo from '../images/tyson_logo.png';
import duke_univ_logo from '../images/duke_univ_logo.png';

export default function WorkPage() {
    const [tysimOpen, setTySimOpen] = React.useState(false);
    const [gripRLOpen, setGripRLOpen] = React.useState(false);
    return (
        <>
        <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
        <Typography variant="h2" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  <b>Work History</b> </Typography>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
        <Card>
            <div onClick={() => setTySimOpen(!tysimOpen)} style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <CardHeader
                    title="Project TySim"
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
            >
            </CardHeader>
            </div>
            <>
                <Collapse in={tysimOpen} unmountOnExit>
                    <CardContent>
                        <TySimContents />
                    </CardContent>
                </Collapse>
            </>
        </Card>  
        </div>  

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>           
        <Card>
            <div onClick={() => setGripRLOpen(!gripRLOpen)} style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <CardHeader
                    title= "Project Grip-RL"
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
            >
            </CardHeader>
            </div>
            <>
                <Collapse in={gripRLOpen} unmountOnExit>
                    <CardContent>
                        <GripRLContents />
                    </CardContent>
                </Collapse>
            </>
            
        </Card>  
        </div>    
        </Stack>
        </>
    );
}