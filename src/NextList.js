import React from 'react';
import InfoItem from './InfoItem'

class NextList extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
             nextList: [
              {id: 1, time: "10:00", title: "Next Great Talk", presenter: "Mrs. Monneypenny", room: "Cricket"},
              {id: 2, time: "11:00", title: "All Hands", presenter: "James Bond", room: "Calypso"},
              {id: 3, time: "12:00", title: "Inspiration", presenter: "Roger Moore", room: "Cooco"},
              {id: 4, time: "13:00", title: "Recatc 4 dummiesvbb dsfsdfsdc sdfsdfsdcsdf", presenter: "Shawn Connery", room: "CiCi"},
            ]
        }
    }


  render() {
      return (
        <div class="row">
            {
              this.state.nextList.map((item) =>
                  <InfoItem key={item.id} item={item}/>
            )}
         </div>
       );
     }
   }

export default NextList;
