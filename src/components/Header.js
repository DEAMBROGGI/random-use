import React from "react";

class Header extends React.Component {

  someMethod = () => {
    this.props.handler("Hola mundo")
  }
 
  render() {
    return(
      <div>
      <button onClick={this.someMethod}>Clic aqui</button>
      </div>
    )
  }
};

export default Header;