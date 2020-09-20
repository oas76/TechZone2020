import React from 'react';
import styles from './styles'

class ProgramItem extends React.Component {

  getName(item){
    var authors = item.children[7].children;
    var names = authors.map(function(item){return item.children[0].value});
    console.log(names);
    return names.reduce(function(acc,curr){
      return acc + ", " + curr;
    });
  }

  render() {
    return(
        <div class="row">
          <div class="col-1" style={styles.programItemTime}>{this.props.item.children[4].value.slice(0,5)}  </div>
          <div class="col-8" style={styles.programItem}>{this.props.item.children[0].value} </div>
          <div class="col-3" style={styles.programItem,{color:this.props.color}} > {this.getName(this.props.item)} </div>
        </div>
      );
   }
}

export default ProgramItem;
