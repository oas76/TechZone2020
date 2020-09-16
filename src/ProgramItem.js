import React from 'react';
import styles from './styles'

class ProgramItem extends React.Component {

  render() {
    return(
        <div class="row">
          <div class="col-2" style={styles.programItem}>{this.props.item.children[4].value} : </div>
          <div class="col-6" style={styles.programItem}>{this.props.item.children[0].value} </div>
          <div class="col-4" style={styles.programItem}> {this.props.item.children[3].value} </div>
        </div>
      );
   }
}

export default ProgramItem;
