import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

export default function BROCTContents() {

    return(
        <>
            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
                <b> GUI for Optimical Coherence Tomography (OCT) Application</b> 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex',fontFamily: 'Monospace'}}>
                <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Tools Used </b>: C++, Python, Qt Designer and Jira. 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
                <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Context: </b> 
                Project BROCT at Duke University involved the development and optimization of an Optical Coherence Tomography (OCT) application used by clinicians. As a member of the project, my primary responsibility was to enhance the application's performance, optimize its functionality, and address any existing bugs. <br></br>
            </Typography> 

            <br></br>    
            
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
                <ListRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Approach Taken: </b> 
            </Typography>

            <Typography variant='body1' style={{fontFamily: 'Monospace'}}>
                <ul>
                    <li> <b> Project Management Setup and Code Migration: </b> The initial steps involved establishing project management using Jira, configuring permissions to streamline client feature and bug requests, and migrating the codebase from BitBucket to GitLab. These steps ensured effective coordination and streamlined version control. </li>
                    <li> <b> Support for BROCT: </b> Majority of the work involved fixing significant code bugs in C++, Qt Designer, and developing new requested features on existing code base.</li>
                    <li> <b> Fault Investigation </b> Major contribution on Investigation of a code bug that was causing potential safety hazards. Examined all possible options for the failure scenario, collaborated with Clinicians to better understand the problem, debugged the code to identify it as Memory Assignment Errors.</li>
                    <li> <b> New Application Setup:</b> Worked on developing an GUI for a new application from scratch, using Python, Matplotlib and PyQt. This was using a different backend for obtaining the OCT images and was working on to overcome some of the limitations of existing BROCT application. </li>
                </ul>
    
            </Typography>
        </>
    );
}


