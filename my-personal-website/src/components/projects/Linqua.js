import * as React from 'react';
import Typography from '@mui/material/Typography';

import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

export default function LinquaContents() {
    return(
        <>
        <Typography variant="h3" style={{ color: 'rgb(24, 24, 24)', fontFamily: 'Monospace', textAlign: 'center'}}>  
            <b> LLM for SQL Query</b> 
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex',fontFamily: 'Monospace'}}>
            <BuildCircleRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Tools Used </b>: Python, GCP, Streamlit and OpenAI. 
        </Typography>
        <br></br>
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
            <ContentPasteRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Context: </b> 
            Project Linqua at Tyson Foods involved the development of a Chatbot that uses LLM such as gpt-3.5-turbo to write a SQL Query against GCP BigQuery Client. <br></br>
        </Typography> 

        <br></br>    
        
        <Typography variant="body1" style={{display: 'flex', fontFamily: 'Monospace'}}>
            <ListRoundedIcon style={{borderRadius: '50%'}}/>
            <b> Approach Taken: </b> 
        </Typography>

        <Typography variant='body1' style={{fontFamily: 'Monospace'}}>
            <ul> 
                <li> <b> Backend Setup: </b> The first step of this process involved loading the backend with dataset information. We used the SQLAlchemy library along with the BigQuery ID to store essential dataset details, such as available columns and distinct options for High Cardinality columns. </li>
                <li> <b> GUI Setup and Deployment: </b> To provide a user-friendly interface, a Chatable front-end was developed using Streamlit. The GUI was then hosted on the GCP website by containerizing the code and deploying it as a CloudRun. In addition, a load balancer with necessary Identity-Aware Proxy (IAP) permissions and SSL certificate for HTTPS was set up, ensuring secure and reliable access to the application.</li>
                <li> <b> OpenAI API Setup: </b> The Chatbot's functionality relied on a sequential approach with multiple API calls. First, we used LLM to identify the closest columns to the user's question. Then, based on those columns, we found the closest distinct options using another API call. Next, we generated an SQL query incorporating all this information. </li>
                <li> <b> Prompt Engineering and Chat History setup: </b> The final step involved optimizing prompts and setting up a sequential approach for the LLM. We also implemented retry handlers with chat history tracking to overcome potential timeout and output format issues.</li>
            </ul>

        </Typography>
        </>
    );
}
