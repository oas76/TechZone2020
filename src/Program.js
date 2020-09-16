import React from 'react';
import ProgramItem from './ProgramItem'
import styles from './styles'

const program = require('./program.json')

class Program extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          overall: "A",
          header: "Next 8 talks in A",
          talks: this.props.program.children,
          currentMap: this.findNext8("A",this.props.program.children)
        }
    }

  timerID=0;


  updateProgram() {
      if(this.state.overall.match("A")) {
        this.setState(
          {
            overall: "B",
            header: "Next 8 talks in B",
            talks: this.props.program.children,
            currentMap: this.findNext8("B",this.props.program.children)
          }
        );
      }
      else if(this.state.overall.match("B")) {
        this.setState(
          {
            overall: "C",
            header: "Next 8 talks in C",
            talks: this.props.program.children,
            currentMap: this.findNext8("C",this.props.program.children)
          }
        );
      }
      else if(this.state.overall.match("C")) {
        this.setState(
          {
            overall: "D",
            header: "Next 8 talks in D",
            talks: this.props.program.children,
            currentMap: this.findNext8("D",this.props.program.children)
          }
        );
      }
      else {
        this.setState(
          {
            overall: "A",
            header: "Next 8 talks in A",
            talks: this.props.program.children,
            currentMap: this.findNext8("A",this.props.program.children)
          }
      );
    }


  }

  findNext8(match,list) {
    var selection = list.filter(function(item){
       return item.children[3].value.match(match) && (item.children[4].value.slice(0,2) > new Date().getHours())
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
      console.log(this.props.program.children);
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
        <div>
          {
            this.state.currentMap.map((item) =>
                <ProgramItem item={item}/> )
          }
        </div>
      </div>
      );
   }
}

export default Program;
