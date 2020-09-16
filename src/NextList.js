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
      var selection = list.filter(function(item){
         return item.time > new Date().getHours()
      });

      var sorted_selection = selection.sort(function(a,b){
        return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)
      });

      return sorted_selection.slice(0,4);

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
