import React from 'react';
import InfoItem from './InfoItem'

const program = require('./program.json')

class NextList extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
             nextList: this.getNext4Talks(program.overallprogram)
        }
    }

    getNext4Talks(list) {
      console.log(list)

      var sorted_selection = list.sort(function(a,b){
        return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)
      });

      var selection = sorted_selection.filter(function(item){
         return item.time > new Date().getHours()
      });

      if(selection.length < 4) {
        return sorted_selection.slice(sorted_selection.length-5,4)
      }
      else {
          return selection.slice(0,4);

      }

    }


  render() {
      return (
            <div>
            {

              this.state.nextList.map((item) =>
                  <InfoItem item={item}/>

            )}
            </div>
       );
     }
   }

export default NextList;
