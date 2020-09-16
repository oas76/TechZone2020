import React from 'react';
import styles from './styles'

class InfoItem extends React.Component {

  render() {
    return(
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body" style={styles.itemBody}>
              <p class="card-title" style={styles.itemHeader}>{this.props.item.title}</p>
              <p class="card-text">starts: {this.props.item.time}</p>
              <p class="card-text">by: {this.props.item.name}</p>
              <p class="card-text">in room: {this.props.item.room}</p>
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default InfoItem;
