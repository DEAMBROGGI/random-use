
import React from "react";



class DetailClose extends React.Component{

  constructor(props) {
    super(props);

this.state={
  numeroHijo:false,

}

  }

    Carga=()=>{
      console.log(this.state)
      console.log(this.props)
    }

DetailOff=()=>{

  const {numeroHijo} = this.state;
  
  this.setState({ numeroHijo: false });
 
  this.props.handlePadre(numeroHijo);
  console.log(numeroHijo);
  console.log(this.state)
};
    render(){
      
        
  return (
    
<div className="row">

<div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src="../logo192.png" alt="Logo"></img>
          <span className="card-title">Card Title</span>
          <div onClick={this.DetailOff} className="btn-floating halfway-fab waves-effect waves-light red">CLOSE</div>
        </div>
        <div className="card-content">
          <p>SECCION DE CARGA DE DATOS DE USUARIO</p>
        </div>
      </div>
    </div>
  </div>





  
    
  
  
      
</div>
  );
};
}




export default DetailClose;
