
import React from "react";





class User extends React.Component{
  constructor(props) {
    super(props);
    this.Detail = this.Detail.bind(this);
  
  this.state = {
  userID:"",
  detail:false,

}
  }


  Detail=async({currentTarget,})  =>{ 
     
    this.setState({userID: currentTarget.id });

    const userSelected = this.props;
    
    this.setState({userSelected:currentTarget})
    //this.props.handleClick(userSelected);
    console.log(userSelected);
};

  render(){


  return (
    

<div className="user" id={this.state.id}  onClick={this.Detail}>
  
        <div className="col " >
        <div id={this.props.login.uuid} className="card small">
            <div className="center-align ">
                <img src={this.props.picture.medium} alt={this.props.name.first} className="circle responsive-img " />
            </div>
            <div className="center-align ">
                <div className="name">
                 {this.props.name.first} {this.props.name.laste}
                </div>
                <div className="city">
                 {this.props.location.city}
                </div>
                <div>
                 {this.props.location.country}
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};
}
export default User;