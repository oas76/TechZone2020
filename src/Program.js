import React from 'react';
import ProgramItem from './ProgramItem'
import styles from './styles'

const program = require('./program.json')

class Program extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          track: "Cricket",
          color: this.getRandomColor(),
          currentMap: this.findNext8("Cricket",this.props.program.children)
        }
    }

  timerID=0;


  updateProgram() {
      if(this.state.track.match("Cricket")) {
        this.setState(
          {
            track: "Calypso",
            color: this.getRandomColor(),
            currentMap: this.findNext8("Calypso",this.props.program.children)
          }
        );
      }
      else if(this.state.track.match("Calypso")) {
        this.setState(
          {
            track: "Vison",
            color: this.getRandomColor(),
            currentMap: this.findNext8("Vision",this.props.program.children)
          }
        );
      }
      else if(this.state.track.match("Vision")) {
        this.setState(
          {
            track: "Comet",
            color: this.getRandomColor(),
            currentMap: this.findNext8("Comet",this.props.program.children)
          }
        );
      }
      else {
        this.setState(
          {
            track: "Cricket",
            color: this.getRandomColor(),
            currentMap: this.findNext8("Cricket",this.props.program.children)
          }
      );
    }


  }

  getRandomColor() {
    var colorlist = ["#ffffff","#a866ff","#ffb400","#07c1e4","#00d6a2","#ff3d67"];
    var index = Math.floor(Math.random()*colorlist.length) + 1;
    if(index == colorlist.length) {
      index = colorlist.length - 1;
    }
    return colorlist[index];
  }

  findNext8(match,list) {
    var selection = list.filter(function(item){
       return item.children[3].value.match(match) && (item.children[4].value.slice(0,2) < new Date().getHours())
    });

    var sorted_selection = selection.sort(function(a,b){
      return (a.children[4].value.slice(0,2) < b.children[4].value.slice(0,2)) ? 1 : ((b.children[4].value.slice(0,2) > a.children[4].value.slice(0,2)) ? -1 : 0)
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
        <div class="w-100" style={styles.programHeader} >
          <div style={{color: this.state.color}} >Next Up In {this.state.track}: </div>
        </div>
        <div>
          {
            this.state.currentMap.map((item) =>
                <ProgramItem key={Math.random()*1000000000} item={item} color={this.getRandomColor()} /> )
          }
        </div>
      </div>
      );
   }
}

export default Program;
