import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

export default function GoChartContents() {
    return(
        <>
        <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
            <b> Middleware for Robot</b> 
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex',fontFamily: 'Monospace'}}>
            <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Tools Used </b>: C++, Python, Qt Designer, ROS and ML. 
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
            <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Context: </b> 
            Project Go-CHART at Arizona State University involved the development of a middleware for an inbuilt lab robot using Robot Operating System (ROS). The project also involved setting up GUI for the robot's camera sensors and training an ML model to detect objects that are specific to our lab's in built physical testbed. <br></br>
        </Typography> 

        <br></br>    
        
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
            <ListRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Approach Taken: </b> 
        </Typography>

        <Typography variant='body1' style={{fontFamily: 'Monospace'}}>
            <ul>
                <li> <b> GUI Setup: </b> The initial steps involved setting up static IP address to the robot's camera sensors which were connected by individual Raspberry Pi zeros. Once the IPs were set, a GUI was built to view real-time sensor data using Qt Designer and Python </li>
                <li> <b> Middleware Setup: </b> The majority of the work in this project involved setting up middleware for the robot. The in-house built lab robot contains many sensors, such as Ultrasonic sensor, LiDAR sensor, motor drivers, LDR sensor, etc. These sensors were all connected to a micro-controller. A middleware was created using C++ and ROS1 Kinetic to establish real-time sensor data retrieval and transmission between the Master Node (the laptop or main computer) and the robot. </li>
                <li> <b> ML Training: </b> The next and final step of this project involved collecting and annotating vehicles and other objects present in the in-house built physical testbed. The goal was to perform transfer learning to train an ML model, specifically YOLOv3 in this case, capable of identifying objects with higher accuracy. To achieve better prediction results, the dataset was gathered using the primary camera of the robot. </li>
            </ul>

        </Typography>
        </>
    );
}