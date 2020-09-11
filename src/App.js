import React, { useRef, useState, useCallback }  from 'react';
import Clock from './Clock'
import NextList from './NextList'
import InstaFeed from './InstaFeed'
import Program from './Program'
import styles from './styles'


class App extends React.Component {



  render() {
    return(
        <div class="container-fluid" >
            <div id="page-header" class="row" style={styles.header} >
              <div  class="col-md" >
                <img class="img-fluid mh-90" alt="TechZoneHeader" src="/techzone.png"/>
              </div>
            </div>
            <div class="row" style={styles.center}>
              <div id="page-content" class="col-9">
                <Program />
              </div>
              <div id="page-feed" class="col">
                <div class="h-50" >
                  < InstaFeed />
                </div>
                <div class="h-50">
                  <img class="img-fluid" alt="TechZoneGif" src="/techzone.gif"/>
                </div>
              </div>
            </div>
            <div id="page-footer" class="row" style={styles.footer}>
              <div  class="col-2">
                <div class="h-50">
                  <p>Next Up: </p>
                </div>
                <div class="h-50">
                  < Clock />
                </div>
              </div>
              <div  class="col-10"> <NextList /> </div>
            </div>
            <div id="stuffing" class="row" style={styles.stuffing}/>
        </div> );
   }
}

export default App;
