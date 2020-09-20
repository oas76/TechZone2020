import React from 'react';
import Clock from './Clock'
import NextList from './NextList'
import Program from './Program'
import styles from './styles'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import xmlData from './programlist';
import XMLParser from 'react-xml-parser';

function App(){

  const handle=useFullScreenHandle();
  const program = new XMLParser().parseFromString(xmlData);

  return(
     <FullScreen handle={handle} >
        <div class="container-fluid" style={styles.body} >
        <button id="full-screen" onClick={handle.enter} style={styles.backgroundButton}>
        fullScreenMode
        </button>
          <div class="jumbotron" style={styles.outerjumbotron}>
            <div class="row">
              <div class="col-9">
                <div class="jumbotron" style={styles.jumbotron}>
                  <div class="row">
                    <div class="col align-top">
                      <div class="media">
                        <img class="img-fluid" alt="TechZoneHeader" src="/techzone.png" style={{maxHeight:"100px"}}/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col align-top" style={styles.program}>
                      <Program program={program}/>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-3">
                <div class="row">
                  <div class="col">
                    <div class="jumbotron" style={styles.clockJumbotron}>
                        < Clock />
                    </div>
                  </div>
                </div>
               <NextList />
             </div>
          </div>
        </div>
      </div>
      </FullScreen>
  );
}

export default App;
