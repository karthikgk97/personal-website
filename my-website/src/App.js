import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <section id="experience">
          <h2>Experience</h2>

            <body style={{textAlign: 'left'}}>
              Company: Tyson Foods Inc <br> 
              </br>
              Role: Developer
              </body>
            <body style={{textAlign: 'right'}} > Nov 2021 - Present
            </body>
              
            
            


        </section>
        <section id="projects">
          <h2>Projects</h2>

        </section>
      </main>
    </div>
  );
}

export default App;
