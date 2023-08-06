import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

export default function LinquaContents() {
    return(
        <>
        <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
            <b> LLM for SQL Query</b> 
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex',fontFamily: 'Helvetica'}}>
            <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Tools Used </b>: 
            &nbsp;
            <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
                Python, GCP, Terraform, Streamlit, Docker and GitLab CI. 
            </Typography>
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
            <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Context: </b> 
            &nbsp;
            <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
            Project Linqua at Tyson Foods involved the development of a Chatbot that leverages LLM (such as OpenAI's GPT or Google's PALM2) to intelligently generate a SQL Query. The Chatbot then uses GCP BigQuery Client to execute the generated query and retrieve the output.<br></br>
            </Typography>
        </Typography> 

        <br></br>    
        
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Helvetica'}}>
            <AssignmentRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Approach Taken: </b> 
        </Typography>

        <Typography variant='body1' style={{fontFamily: 'Garamond'}}>
            <ul> 
                <li> <b> Backend Setup: </b> Dataset information was loaded into the memory using SQLAlchemy library and BigQuery ID. Essential details like available columns and distinct options for High Cardinality columns were stored. </li>
                <li> <b> GUI Setup and Deployment: </b> A user-friendly Chatable front-end was developed using Streamlit. The GUI was containerized and deployed as a CloudRun on GCP. A load balancer with Identity-Aware Proxy (IAP) permissions and SSL certificate for HTTPS was set up for secure access. </li>
                <li> <b> OpenAI API Setup: </b> The Chatbot's functionality relied on a sequential approach with multiple API calls. Initially, LLM identified the closest columns to the user's question. Subsequently, based on those columns, we discovered the closest distinct options through another API call. Finally, an SQL query was generated, incorporating all this information.</li>
                <li> <b> Prompt Engineering and Chat History setup: </b> The last step involved optimizing prompts and implementing retry handlers with chat history tracking to address potential timeout and output format issues. </li>
            </ul>

        </Typography>
        </>
    );
}
