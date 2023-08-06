import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

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
            <Typography variant="body1" style={{display: 'flex',fontFamily: 'Helvetica'}}>
                <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Tools Used </b>: 
                &nbsp;
                <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                    AWS, Python, Blender, Docker, GitLab CI, ML using MxNET, TensorFlow and PyTorch.
                </Typography> 
            </Typography>
            <br></br>

            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
                <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Context: </b>
                &nbsp;
                <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                    Project TySim represented Tyson Foods' initial effort to create synthetic images of chicken nuggets and utilize them for model training. This decision was driven by the difficulties encountered in collecting real-world images of chicken nuggets, which were often affected by camera lens fogging, leading to a labor-intensive image annotation process. <br></br>
                </Typography>
            </Typography> 

            <br></br>    
            
            <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
                <AssignmentRoundedIcon style={{borderRadius: '50%'}}/>
                <b> Approach Taken: </b> 
            </Typography>

            <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                <ul>
                    <li> <b>Image Generation:</b> Blender's Python API was leveraged to create synthetic images. A meticulously designed 3D model formed the base, and Materialize software produced Physically Based Rendering (PBR) materials. </li>
                    <li> <b>Deployment on AWS:</b> The image generation code was dockerized and deployed to AWS ECR (Elastic Container Registry) via GitLab CI (Continuous Integration), streamlining the process and enabling automation.</li>
                    <li> <b>Cloud Pipeline:</b> The entire cloud pipeline was orchestrated using AWS services. Initially, an AWS Lambda function triggered an AWS Batch job, leveraging the ECR image, and stored the output images in AWS S3. Additionally, a record was written to DynamoDB to track the run.  </li>
                    <li> <b>Transfer Learning and Model Training:</b> With the synthetic dataset, transfer learning was employed to train an object detection model. The achieved accuracy, distinguishing between good and defective nuggets, reached around 70%, surpassing the model trained solely on real-world images, which achieved approximately 40% accuracy. </li>
                    <li> <b>Framework and Training:</b> AWS Sagemaker played a pivotal role in model training. MxNET, TensorFlow, and PyTorch were used to train separate models. Leveraging Sagemaker's distributed training capabilities, particularly in PyTorch, led to a 50% reduction in overall training time. </li>
                    
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


