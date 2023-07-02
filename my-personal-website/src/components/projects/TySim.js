import * as React from 'react';
import Typography from '@mui/material/Typography';
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';

import TySimScene from '../../images/tysim_simulated_scene.png'
import TySimBBox from '../../images/tysim_with_bbox.png';

export default function TySimContents() {

    return(
        <>
            <Typography variant="h6" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
                <b>Synthetic Data Generation</b> 
            </Typography>
            
            <Typography variant="body1" style={{display: 'flex',fontFamily: 'Monospace'}}>
                <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Tools Used </b>: AWS, Python, Blender, Docker, GitLab CI, ML using MxNET, TensorFlow and PyTorch. 
            </Typography>

            <Typography variant="body1" style={{fontFamily: 'Monospace'}}>
                <b> Context: </b><br></br>
                Project TySim was Tyson Foods' first attempt at generating synthetic images of chicken nuggets and training a model using them. The project was initiated due to the challenges faced in collecting real-world images of chicken nuggets, which often suffered from frequent fogging of the camera lens. Furthermore, annotating these images proved to be a strenuous task. <br></br>
                <b> Approach Taken: </b> 
                <ul>
                    <li> <b>Image Generation:</b> The project commenced by leveraging Blender's Python API to generate synthetic images. A meticulously crafted 3D model served as the foundation, while Physically Based Rendering (PBR) materials were created using the versatile software, Materialize. </li>
                    <li> <b>Deployment on AWS:</b> The generated image generation code was dockerized and seamlessly deployed to AWS ECR (Elastic Container Registry) through GitLab CI (Continuous Integration). This streamlined the process and facilitated further automation.</li>
                    <li> <b>Cloud Pipeline:</b> Leveraging the power of AWS services, a cloud pipeline was established. AWS Lambda effectively triggered an AWS Batch job, incorporating the ECR image. The resulting output images were efficiently stored in AWS S3, ensuring secure and scalable storage. </li>
                    <li> <b>Transfer Learning and Model Training:</b> With the synthetic dataset in hand, the team undertook transfer learning to train an object detection model. Remarkably, the achieved accuracy across all classes, distinguishing between good and defective nuggets, reached approximately 70%. This outperformed the model trained solely on real-world images, which exhibited an accuracy of around 40%. </li>
                    <li> <b>Framework and Training:</b> AWS Sagemaker proved to be an invaluable tool for training the models. The team employed three distinct frameworks, namely MxNET, TensorFlow, and PyTorch, to train separate models. Sagemaker's distributed training capabilities, specifically harnessed in PyTorch, reduced the overall training time by an impressive 50%.</li>
                </ul>
                <div style={{display: 'flex'}}>
                    <figure style={{ textAlign: 'center' }}>
                        <img src={TySimScene} alt="Tysim Scene" style={{ display: 'block', margin: '0 auto', width: '800px', height: '500px' }} />
                        <figcaption style={{ marginTop: '10px' }}>Synthetically Generated Sample Image</figcaption>
                    </figure>
                    <figure style={{ textAlign: 'center' }}>
                        <img src={TySimBBox} alt="Tysim BBox" style={{ display: 'block', margin: '0 auto', width: '800px', height: '500px' }} />
                        <figcaption style={{ marginTop: '10px' }}>Synthetically Generated Image with GroundTruth Data BBox from Blender</figcaption>
                    </figure>
                </div>
                
            </Typography>
        </>
    );
}


