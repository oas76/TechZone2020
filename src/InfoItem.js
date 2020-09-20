import React from 'react';
import styles from './styles'

class InfoItem extends React.Component {

  render() {
    return(
      <div class="row">
        <div class="col">
          <div class="jumbotron" style={styles.miniJumbotron}>
          <div class="col" style={styles.itemBody}>
              <p style={{color:this.props.color}}> {this.props.item.time}  </p>
              <p style={{color:this.props.color}}> {this.props.item.title} </p>
              <p style={{color:this.props.color}}> {this.props.item.room} </p>
              {this.props.item.webex &&
                <p style={{color:this.props.color}}> Webex: {this.props.item.webex} </p>
              }
            </div>
          </div>
         </div>
        </div>
      );
   }
}

export default InfoItem;
