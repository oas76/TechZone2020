import React from 'react';
import styles from './styles'

const program = require('./program.json')

class Program extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
             overall: program.overallprogram
        }
    }

  render() {
    return(
      <div style={styles.program}>
          {
            this.state.overall.map((item) =>
                <p> {item.time}: {item.title} </p>
          )}
      </div>
      );
   }
}

export default Program;
