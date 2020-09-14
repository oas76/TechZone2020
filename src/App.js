import React from 'react';
import Clock from './Clock'
import NextList from './NextList'
import Program from './Program'
import styles from './styles'
import { FullScreen, useFullScreenHandle } from "react-full-screen";



function App(){

  const handle=useFullScreenHandle();

  return(
        <div class="container-fluid" style={styles.body} >
          <button id="full-screen" onClick={handle.enter} style={styles.backgroundButton}>
            fullScreenMode
          </button>
          <FullScreen handle={handle} >
            <div id="page-header" class="row allign-items-start" style={styles.header} >
              <div class="col mh-100" >
                <div class="media" style={{maxHeight:"500px"}}>
                  <img class="img-fluid" alt="TechZoneHeader" src="/techzone.png"/>
                </div>
              </div>
            </div>
            <div class="row allign-items-center" style={styles.center}>
              <div id="page-content" class="col-10">
                <Program />
              </div>
            </div>
            <div id="page-footer" class="row allign-items-end" style={styles.footer}>
              <div  class="col-2">
                <div class="card">
                  <div class="card-body" style={styles.itemBody}>
                    <p class="card-title" style={styles.itemHeader}> Next Up: </p>
                    <div class="card-text">
                      < Clock />
                    </div>
                  </div>
                </div>
              </div>
              <div  class="col-10"> <NextList /> </div>
            </div>
            <div id="stuffing" class="row" style={styles.stuffing}/>
          </FullScreen>
        </div> );
}

export default App;
