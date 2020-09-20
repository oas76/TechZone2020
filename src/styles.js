const body = {
    backgroundColor: "#000000",
    backgroundImage: "url(/techzone.gif)",
    height: "1600px"
}

const jumbotron = {
    backgroundColor: "#000000",
}

const outerjumbotron = {
    backgroundColor: "#000000",
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    height: "980px"
}

const miniJumbotron = {
    backgroundColor: "#222222",
    color: "#ffffff",
    textAlign: "left",
    fontFamily: "CiscoSans, Tahoma",
    height: "60px"
}

const clockJumbotron = {
    backgroundColor: "#2ed557",
    color: "#ffffff",
    fontFamily: "CiscoSans, Tahoma",
    textAlign: "center",
    height: "110px"

}

const card = {
    backgroundColor: "#222222"
}

const clock = {
    fontSize: "40px",
    fontFamily: "CiscoSans, Tahoma",
    display: "block",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const itemBody = {
    lineHeight: "0.8",
    fontFamily: "CiscoSansHeavy, Tahoma",
    fontSize: "15px",
    display: "block",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    marginLeft: "10px",
    fontWeight: "900"
}

const program = {
    backgroundColor: "#000000",
    lineHeight: "0.8",
    fontWeight: "bold",
    fontSize: "15px",
    marginRight: "15px",
}

const programItem = {
    lineHeight: "28px",
    fontFamily: "CiscoSansHeavy, CiscoSans, Tahoma",
    fontSize: "24",
    fontWeight: "900",
    color: "#ffffff",
    alignment: "left"
}

const programItemTime = {
    lineHeight: "28px",
    fontFamily: "CiscoSans, Tahoma",
    fontSize: "24",
    color: "#ffffff",
    fontWeight: "300",
    alignment: "left"
}

const programHeader = {
    lineHeight: "3.0",
    fontFamily: "CiscoSans, Tahoma",
    fontWeight: "bold",
    fontSize: "25px",
    alignment: "left"
}

const backgroundButton = {
    color: "#17D4FE",
    backgroundColor: "transparent"
}

const padding = {
    padding: "0",
    margin: "0",
    border: "0px solid",
    display: "inline-block",
    verticalAlign: "top"
}

const styles = {
  body: body,
  clock: clock,
  jumbotron: jumbotron,
  program: program,
  backgroundButton: backgroundButton,
  programItem: programItem,
  programItemTime: programItemTime,
  programHeader: programHeader,
  outerjumbotron: outerjumbotron,
  miniJumbotron: miniJumbotron,
  clockJumbotron: clockJumbotron,
  padding:padding,
  itemBody:itemBody,
  card:card
}



export default styles;
