import React from 'react';
import styles from './styles'

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {time:''};
  }

  timerID = 0;

  updateTime() {
      var date = new Date();
      var h = date.getHours(); // 0 - 23
      var m = date.getMinutes(); // 0 - 59
      var s = date.getSeconds(); // 0 - 59

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

      var new_time = h + ":" + m + ":" + s;
      this.setState({time: new_time});
  }

  componentDidMount() {
  this.timerID = setInterval(
    () => this.updateTime(),
    1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {
    return (
          <div class="col" id="myclockdisplay" style={styles.clock} >
            {this.state.time}
          </div>
    );
  }
}

export default Clock;
