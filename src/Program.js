import React from 'react';
import ProgramItem from './ProgramItem'
import styles from './styles'

const program = require('./program.json')

class Program extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
             overall: program.overallprogram,
             header: "Todays Program",
             talks: program.talks,
             currentMap: program.overallprogram
        }
    }

  timerID=0;

  updateProgram() {
      if (this.state.header.match("Todays Program")) {
        this.setState(
          {
            overall: program.overallprogram,
            header: "Next 8 talks in Cricket",
            talks: program.talks,
            currentMap: this.findNext8("Cricket", program.talks)
          }
        );
      }
      else if(this.state.header.match("Next 8 talks in Cricket")) {
        this.setState(
          {
            overall: program.overallprogram,
            header: "Todays Program",
            talks: program.talks,
            currentMap: program.overallprogram
          }
        );
      }
      else {
        this.setState(
          {
          overall: program.overallprogram,
          header: "Todays Program",
          talks: program.talks,
          currentMap: program.overallprogram
        }
      );
    }


  }

  findNext8(match,list) {
    var selection = list.filter(function(item){
       return item.room.match(match) && (item.time > new Date().getHours())
    });

    var sorted_selection = selection.sort(function(a,b){
      return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)
    });

    return sorted_selection.slice(0,8);

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateProgram(),
      15000
      );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return(
      <div class="jumbotron" style={styles.program}>
        <div class="w-100" style={styles.programHeader}>
          {this.state.header}
        </div>
        {
        this.state.currentMap.map((item) =>
            <ProgramItem key={item.id} item={item}/>
          )}
      </div>
      );
   }
}

export default Program;
