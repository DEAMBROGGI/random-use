
import React  from "react";





class DetailClose extends React.Component{

  constructor(props) {
    super(props);

this.state={
  numeroHijo:false,
  userSelect:""
  

}

  }
  
  

 

DetailOff=()=>{

  const {numeroHijo} = this.state;
  
  this.setState({ numeroHijo: false });
 
  this.props.handlePadre(numeroHijo);
  console.log(numeroHijo);
  
};


    render(){
    
     
  return (
  
      <div className="row detalle  ">




          <div className="col detalle s12 m11 l7 center-align">
              <div className=" col s12 m12 l12 detalle">
                  <div className="Info">
                      <div className="card center-align Info" >
                          <div className="col s12 m5 l5 img-detalle Info">
            <img src={this.props.userdetail.picture.large} alt="Logo" className="circle responsive-img img-detalle Info"></img>
       </div>
                          <div className="col s12 m7 l7 center-align Info">
                         
        <h3>{this.props.userdetail.name.first} {this.props.userdetail.name.last}</h3>
        <h6>{this.props.userdetail.email}</h6>
        <h5>{this.props.userdetail.location.street.number} {this.props.userdetail.location.street.name}</h5>
                              <h5>{this.props.userdetail.location.city} </h5>
                              <h5>{this.props.userdetail.location.state}</h5>
                              <h5>{this.props.userdetail.location.country}</h5>
                          </div>
        </div>
                      <div onClick={this.DetailOff} className="btn-floating light red">CLOSE</div>
                  </div>
       
    </div>
  </div>

</div>
  );
};
}




export default DetailClose;
