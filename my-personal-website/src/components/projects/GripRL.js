import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import GripRLScene from '../../images/grip_rl_rl_setup.png'

export default function GripRLContents() {
    const isPC = useMediaQuery('(min-width:500px)')
    return(
        <div style={{ background: '#dedcdc', padding: '20px', marginTop: '-15px', marginBottom: '-15px', marginLeft: '-5px', marginRight: '-5px', borderRadius: '12px' }}>
            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
                <b>Grip Identification with Reinforcement Learning</b> 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex',fontFamily: 'Helvetica'}}>
                <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Tools Used </b>: 
                &nbsp;
                <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                    Nvidia Omniverse, Python, Robot Operating System (ROS), MoveIt, C++, AWS, Docker, GitLab CI. 
                </Typography>
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
                <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Context: </b>
                &nbsp;
                <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                    Project Grip-RL represented Tyson Foods' initiative to implement a Simulation-First Workflow company-wide. The primary goal was to validate the reliability and accuracy of simulation testing and explore the potential of Reinforcement Learning (RL) within a simulated environment.
                </Typography>
                <br></br>
            </Typography> 

            <br></br>    
            
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
                <AssignmentRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Approach Taken: </b> 
            </Typography>

            <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                <ul>
                    <li> <b> Scene Setup: </b> The project involved configuring a scene with robots, end effectors, conveyor belts, and chickens as 3D assets in the Universal Scene Description (USD) file format. The use of "Instanceable Assets" allowed easy scaling and manipulation of these elements. </li>
                    <li> <b> Reinforcement Learning Loop: </b> Isaac Sim API and Proximal Policy Optimization (PPO) algorithm were employed to establish a reinforcement learning loop. The OmniIsaacGym Framework facilitated the deployment of 512 unique environments for RL training. </li>
                    <li> <b> Reward Engineering:</b> To guide the robot in reaching and grasping the target with its grippers, reward engineering was applied. Correct actions, such as getting closer to the target, aligning the grippers accurately, and successful grasping, were rewarded. Conversely, incorrect actions, like moving away from the target or colliding with other objects, were penalized.</li>
                    <li> <b> Synthetic Dataset Generation: </b> Nvidia Replicator was utilized to generate a synthetic dataset of whole-body chickens. This dataset enabled the training of a pose estimation model, ensuring precise localization and interaction within the simulated environment.</li>
                    <li> <b> Digital Twin Setup: </b> ROS and MoveIt were integrated with a real-world FANUC robot to create a digital-twin in simulation. The FANUC ROS Industrial Package and the ROS1_ROS2_bridge facilitated communication between ROS1 and ROS2 packages within Nvidia Isaac Sim. </li>
                </ul>
                {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <figure style={{ textAlign: 'center' }}>
                        <img src={GripRLScene} alt="Grip RL Scene" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', width: '800px', height: '500px' }} />
                        <figcaption style={{ marginTop: '10px' }}>RL Scene in Isaac Sim</figcaption>
                    </figure>
                    
                </div> */}

                <div style={{ display: 'flex', justifyContent: isPC ? 'center' : 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{flex: '1', maxWidth: isPC? '47.5%' : '100%', marginRight: isPC? '2.5%' : '10%', marginLeft: isPC ? '0%' : '-5%'}}>
                        <figure style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                        <img src={GripRLScene} alt="Grip RL Scene" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                        <figcaption style={{ marginTop: '10px' }}>RL Scene in Isaac Sim</figcaption>
                        </figure>
                    </div>
                </div>
                
            </Typography>
        </div>
    );
}
