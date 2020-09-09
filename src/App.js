import React from 'react';
import Clock from './Clock'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div class="container-fluid" background="black">
          <div class="row align-items-start">
            <div class="col text-center">
              <img alt="TechZoneHeader" src="techzone.png"/>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-3 text-center"> <Clock /> </div>
            <div class="col text-center"> Rest </div>
          </div>
          <div class="row align-items-end">
            <div class="col text-center"> Footer </div>
          </div>
        </div> );
   }
}

export default App;
