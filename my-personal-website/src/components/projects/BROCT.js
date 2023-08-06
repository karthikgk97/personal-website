import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

export default function BROCTContents() {

    return(
        <>
            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
                <b> GUI for Optimical Coherence Tomography (OCT) Application</b> 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex',fontFamily: 'Helvetica'}}>
                <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Tools Used </b>:
                &nbsp;
                <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                    C++, Python, Qt Designer and Jira. 
                </Typography>
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
                <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Context: </b>
                &nbsp;
                <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                    Project BROCT at Duke University focused on enhancing and optimizing an Optical Coherence Tomography (OCT) application for clinicians. As a project member, my key responsibilities included improving performance, optimizing functionality, and resolving existing bugs.<br></br>
                </Typography>
            </Typography> 

            <br></br>    
            
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
                <AssignmentRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Approach Taken: </b> 
            </Typography>

            <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                <ul>
                    <li> <b> Project Management Setup and Code Migration: </b> The initial phase involved establishing efficient project management using Jira and configuring permissions to streamline client feature and bug requests. Additionally, we migrated the codebase from BitBucket to GitLab, ensuring smooth version control and collaboration. </li>
                    <li> <b> Support for BROCT: </b> My primary focus was on addressing code bugs in C++ and Qt Designer, along with developing new features based on client (Clinicians) requests. The project management and issue handling were efficiently managed through the Jira setup.</li>
                    <li> <b> Fault Investigation </b> As part of the project, I collaborated with clinicians to investigate faults and ensure the application's safety and compliance. Examining failure scenarios and debugging the code, I addressed memory assignment errors, enhancing reliability.</li>
                    <li> <b> New Application Setup:</b> The final stages of project involved developing a new application's GUI using Python, Matplotlib, and PyQt. This application employed a different backend to acquire OCT images and overcome limitations in the existing BROCT application. </li>
                </ul>
    
            </Typography>
        </>
    );
}


