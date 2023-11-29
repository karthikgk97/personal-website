import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

export default function GoChartContents() {
    return(
        <div style={{ background: '#f2eeda', padding: '20px', marginTop: '-15px', marginBottom: '-15px', marginLeft: '-5px', marginRight: '-5px', borderRadius: '12px' }}>
        <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
            <b> Middleware for Robot</b> 
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex',fontFamily: 'Helvetica'}}>
            <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Tools Used </b>:
            &nbsp;
            <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                C++, Python, Qt Designer, ROS and ML. 
            </Typography> 
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
            <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Context: </b> 
            &nbsp;
            <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                Project Go-CHART at Arizona State University was centered around an inbuilt lab robot, where my role was to aid a PhD student in setting up ROS for real-time sensor data retrieval and assisting with object detection tasks. <br></br>
            </Typography>
        </Typography> 

        <br></br>    
        
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
            <AssignmentRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Approach Taken: </b> 
        </Typography>

        <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
            <ul>
                <li> <b> GUI Setup: </b> Initially, static IP addresses were assigned to the robot's camera sensors, connected to individual Raspberry Pi zeros. Using Qt Designer and Python, a real-time sensor data GUI was created for viewing. </li>
                <li> <b> Middleware Setup: </b> The core of the project involved establishing middleware for the robot. Various sensors, such as Ultrasonic, LiDAR, motor drivers, and LDR, were connected to a micro-controller. C++ and ROS1 Kinetic were used to build the middleware, facilitating real-time sensor data retrieval and transmission between the Master Node and the robot. </li>
                <li> <b> ML Training: </b> The final step involved collecting and annotating vehicles and other objects in the inbuilt physical testbed. Transfer learning was performed to train an ML model, specifically YOLOv3, for accurate object detection. The primary camera of the robot was utilized to gather the dataset, resulting in improved prediction results. </li>
            </ul>

        </Typography>
        </div>
    );
}