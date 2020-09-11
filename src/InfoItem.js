import React from 'react';
import styles from './styles'

class InfoItem extends React.Component {

  render() {
    return(
        <div class="col-3" style={styles.itemBody} >
          <p style={styles.itemHeader}>{this.props.item.title}</p>
          <p>starts: {this.props.item.time}</p>
          <p>by: {this.props.item.presenter}</p>
          <p>in room: {this.props.item.room}</p>
        </div>
      );
   }
}

export default InfoItem;
