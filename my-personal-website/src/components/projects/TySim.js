import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

import TySimScene from '../../images/tysim_simulated_scene.png'
import TySimBBox from '../../images/tysim_with_bbox.png';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TySimContents() {
    const isPC = useMediaQuery('(min-width:500px)')

    return(

        <>
            <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
                <b>Synthetic Data Generation</b> 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex',fontFamily: 'Monospace'}}>
                <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Tools Used </b>: AWS, Python, Blender, Docker, GitLab CI, ML using MxNET, TensorFlow and PyTorch. 
            </Typography>
            <br></br>
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
                <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Context: </b> 
                Project TySim was Tyson Foods' first attempt at generating synthetic images of chicken nuggets and training a model using them. The project was initiated due to the challenges faced in collecting real-world images of chicken nuggets, which often suffered from frequent fogging of the camera lens. Furthermore, annotating these images proved to be a strenuous task. <br></br>
            </Typography> 

            <br></br>    
            
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
                <ListRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Approach Taken: </b> 
            </Typography>

            <Typography variant='body1' style={{fontFamily: 'Monospace'}}>
                <ul>
                    <li> <b>Image Generation:</b> The project started by leveraging Blender's Python API to generate synthetic images. A carefully designed 3D model served as the foundation, and Materialize software was employed to generate Physically Based Rendering (PBR) materials. </li>
                    <li> <b>Deployment on AWS:</b> The generated image generation code was dockerized and seamlessly deployed to AWS ECR (Elastic Container Registry) through GitLab CI (Continuous Integration). This streamlined the process and facilitated further automation.</li>
                    <li> <b>Cloud Pipeline:</b> Leveraging the power of AWS services, a cloud pipeline was established. AWS Lambda effectively triggered an AWS Batch job, incorporating the ECR image. The resulting output images were efficiently stored in AWS S3. </li>
                    <li> <b>Transfer Learning and Model Training:</b> With the synthetic dataset in hand, the team undertook transfer learning to train an object detection model. The achieved accuracy across all classes, distinguishing between good and defective nuggets, reached approximately 70%. This outperformed the model trained solely on real-world images, which exhibited an accuracy of around 40%. </li>
                    <li> <b>Framework and Training:</b> AWS Sagemaker played a crucial role in training the models. The team utilized three different frameworks - MxNET, TensorFlow, and PyTorch - to train separate models. Leveraging Sagemaker's distributed training capabilities, particularly in PyTorch, resulted in a 50% reduction in overall training time.</li>
                    
                </ul>

                
                <div style={{ display: 'flex', justifyContent: isPC ? 'space-between' : 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{flex: '1', maxWidth: isPC? '47.5%' : '100%', marginRight: isPC? '2.5%' : '10%', marginLeft: isPC ? '0%' : '-5%'}}>
                        <figure style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                        <img src={TySimScene} alt="Tysim Scene" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                        <figcaption style={{ marginTop: '10px' }}>Synthetically Generated Sample Image</figcaption>
                        </figure>
                    </div>
                    <div style={{flex: '1', maxWidth: isPC? '47.5%' : '100%', marginRight: isPC? '2.5%' : '10%', marginLeft: isPC ? '0%' : '-5%'}}>
                        <figure style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                        <img src={TySimBBox} alt="Tysim BBox" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                        <figcaption style={{ marginTop: '10px' }}>Blender's GroundTruth BBox Data</figcaption>
                        </figure>
                    </div>
                </div>


                
            </Typography>
        </>
    );
}


