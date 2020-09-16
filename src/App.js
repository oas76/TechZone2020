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
              <div class="col-8">
                <div class="jumbotron" style={styles.jumbotron}>
                  <div class="row">
                    <div class="col mh-75 allign-items-center">
                      <div class="media" style={{maxHeight:"250px"}}>
                        <img class="img-fluid" alt="TechZoneHeader" src="/techzone.png"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col allign-items-center" style={styles.program}>
                      <Program program={program}/>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-3">
                <div class="row">
                  <div class="card">
                    <div class="card-body" style={styles.itemBody}>
                      <div class="card-text">
                        < Clock />
                      </div>
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
