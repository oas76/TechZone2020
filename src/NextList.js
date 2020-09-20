import React from 'react';
import InfoItem from './InfoItem'

const program = require('./program.json')

class NextList extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
             startIndex: 0,
             nextList: this.getNext4Talks(program.overallprogram,0)
        }
    }

    timerNextID=0;

    getNext4Talks(list,index) {

      var sorted_selection = list.sort(function(a,b){
        return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)
      });

      return sorted_selection.slice(index, index+4);

    }

    getRandomColor() {
      var colorlist = ["#ffffff","#a866ff","#ffb400","#07c1e4","#00d6a2","#ff3d67"];
      var index = Math.floor(Math.random()*colorlist.length) + 1;
      if(index == colorlist.length) {
        index = colorlist.length - 1;
      }
      return colorlist[index];
    }

    componentDidMount() {
      this.timerNextID = setInterval(
        () => this.setStartIndex(),
        15000
        );
    }

    setStartIndex() {
      var tmp_index = 0;
      if (this.state.startIndex + 4 > program.overallprogram.length-1){
        this.setState({
          nextList: this.getNext4Talks(program.overallprogram,tmp_index),
          startIndex: 0
        });
      }
      else {
        tmp_index = this.state.startIndex + 4;
        this.setState({
          nextList: this.getNext4Talks(program.overallprogram,tmp_index),
          startIndex: this.state.startIndex+4
        });

      }


    }


  render() {
      return (
            <div>
            {

              this.state.nextList.map((item) =>
                  <InfoItem key={item.id} item={item} color={this.getRandomColor()}/>

            )}
            </div>
       );
     }
   }

export default NextList;
