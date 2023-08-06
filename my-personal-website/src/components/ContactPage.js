import * as React from 'react';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import useMediaQuery from '@mui/material/useMediaQuery';
import TailScaleArch from '../images/tailscale_arch.png'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';



export default function ContactPage() {

    const isPC = useMediaQuery('(min-width:500px)')
    const linkedInURL = "https://www.linkedin.com/in/karthik-ganesan-541488148/";
    const emailAddress = 'karthik.gk97@gmail.com';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume_karthik_ganesan.pdf';
        link.download = 'resume_karthik_ganesan.pdf';
        link.click();
    };

    const handleLinkedInRedirect = () => {
        window.open(linkedInURL, '_blank'); // Open the LinkedIn URL in a new tab
    };

    const mailToRedirect = () => {
        window.location.href = `mailto:${emailAddress}`;
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '90vh'}}>

        <Typography variant="h4" style={{fontFamily: 'Monospace' }}> <b>Website's Infrastructure:</b></Typography>
        <Typography variant="body1" style={{fontFamily: 'Garamond' }}> The website is currently hosted on a local (old) laptop, which functions as a personal server. The DNS resolution and network connectivity are managed using Tailscale.</Typography>
        <div style={{ display: 'flex', justifyContent: isPC ? 'center' : 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{flex: '1', maxWidth: isPC? '50%' : '100%', marginRight: isPC? '2.5%' : '10%', marginLeft: isPC ? '0%' : '-5%'}}>
                <figure style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                <img src={TailScaleArch} alt="Tail Scale Arch" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                <figcaption style={{ marginTop: '10px' }}><b>Tailscale workflow design</b></figcaption>
                </figure>
            </div>
        </div>
        
        <Typography variant="h4" style={{fontFamily: 'Monospace', marginTop: '2.5%' }}> <b>Contact:</b></Typography>

        <Tooltip title="Download Karthik's Resume" arrow>
            <Button variant="contained" color="primary" onClick={handleDownload} style={{ marginTop: '1.5%' }}>
                <DownloadRoundedIcon />
                <span style={{ textTransform: 'capitalize' }}>Download Resume</span>
            </Button>
        </Tooltip>
        
        <Tooltip title="Redirect to Karthik's LinkedIn profile" arrow>
            <Button variant="contained" color="primary" onClick={handleLinkedInRedirect} style={{ marginTop: '1%' }}>
                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10%' }}/>
                <span style={{ textTransform: 'capitalize' }}>LinkedIn</span>
            </Button>
        </Tooltip>
        
        <Tooltip title="Send an Email to karthik.gk97@gmail.com" arrow>
            <Button variant="contained" color="primary" onClick={mailToRedirect} style={{ marginTop: '1%' }}>
                <EmailRoundedIcon style={{ marginRight: '10%' }}/>
                <span style={{ textTransform: 'capitalize' }}>Email</span>
            </Button>
        </Tooltip>

        </div>
    );
    
}