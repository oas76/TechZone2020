import React from 'react';
import styles from './styles'

class InfoItem extends React.Component {

  render() {
    return(
      <div class="row">
        <div class="col">
          <div class="jumbotron" style={styles.miniJumbotron}>
          <div class="card" style={styles.card}>
            <div class="card-body">
              <p style={{color:this.props.color}}> {this.props.item.time}  </p>
              <p style={{color:this.props.color}}> {this.props.item.title} </p>
              </div>

            </div>
            </div>
          </div>
        </div>
      );
   }
}

export default InfoItem;
