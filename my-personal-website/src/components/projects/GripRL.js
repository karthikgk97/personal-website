import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';

import GripRLScene from '../../images/grip_rl_rl_setup.png'

export default function GripRLContents() {
    return(
        <>
            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
                <b>Grip Identification with Reinforcement Learning</b> 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex',fontFamily: 'Monospace'}}>
                <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Tools Used </b>: Nvidia Omniverse, Python, Robot Operating System (ROS), MoveIt, C++, AWS, Docker, GitLab CI. 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
                <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Context: </b> 
                Project Grip-RL was Tyson's attempt at establishing Simulation-First Workflow across the company. The primary objective was to validate the reliability and accuracy of simulation testing and explore the potential of performing Reinforcement Learning in a simulated environment.
                <br></br>
            </Typography> 

            <br></br>    
            
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
                <ListRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Approach Taken: </b> 
            </Typography>

            <Typography variant='body1' style={{fontFamily: 'Monospace'}}>
                <ul>
                    <li> <b> Scene Setup: </b>The project involved setting up a scene that included various elements like robots, end effectors, conveyor belts, and chickens. All these elements were represented as 3D assets in the Universal Scene Description (USD) file format. This format allowed us to easily scale and manipulate the assets, taking advantage of the concept of "Instanceable Assets"</li>
                    <li> <b> Reinforcement Learning Loop: </b> The project utilizes Isaac Sim API and Proximal Policy Optimization (PPO) algorithm to establish a reinforcement learning loop. Leveraging OmniIsaacGym Framework, we were able to deploy 256 unique environments for RL training. </li>
                    <li> <b> Reward Engineering:</b> Reward Engineering was employed to guide the robot in reaching and grasping the target using its grippers. The robot was rewarded for correct actions such as getting closer to the target, aligning the grippers with the target position, and successfully grasping the target. Conversely, it was penalized for incorrect actions such as moving farther away from the target or colliding with other objects in the surrounding space.</li>
                    <li> <b> Synthetic Dataset Generation: </b> Nvidia Replicator was used to create a synthetic dataset of whole-body chickens. This dataset was then used to train a pose estimation model, allowing for precise localization and interaction within the simulated environment.</li>
                    <li> <b> Digital Twin Setup: </b> ROS and MoveIt were integrated with a real-world FANUC robot to create a digital-twin in simulation. The FANUC ROS Industrial Package and the ROS1_ROS2_bridge were used to facilitate communication between ROS1 and ROS2 packages within Nvidia Isaac Sim.</li>
                </ul>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <figure style={{ textAlign: 'center' }}>
                        <img src={GripRLScene} alt="Grip RL Scene" style={{ display: 'block', margin: '0 auto', width: '800px', height: '500px' }} />
                        <figcaption style={{ marginTop: '10px' }}>RL Scene in Isaac Sim</figcaption>
                    </figure>
                    {/* <figure style={{ textAlign: 'center' }}>
                        <img src={TySimBBox} alt="Tysim BBox" style={{ display: 'block', margin: '0 auto', width: '800px', height: '500px' }} />
                        <figcaption style={{ marginTop: '10px' }}>Synthetically Generated Image with GroundTruth Data BBox from Blender</figcaption>
                    </figure> */}
                </div>
                
            </Typography>
        </>
    );
}
