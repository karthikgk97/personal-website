import * as React from 'react';
import Button from '@mui/material/Button';
import TopBar from './components/TopBar';

export default function MyApp() {
  return (
    <div>
      <TopBar />
      <Button variant="contained">Hello World</Button>
    </div>
  );
}