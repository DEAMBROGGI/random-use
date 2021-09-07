import React from 'react';
import DetailClose from './components/DetailClose';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlePadre = this.handlePadre.bind(this);
    this.handlePadre = this.handlePadre.bind(this);

  this.state = {
    
    detail:false,
    header:true,
    users: [],
    page: 0,
    isLoading: false,
    picture:"",
    userdetail: "",
    errorMsg: '',
    userselected:""
   
  };
}
  
  componentDidMount() {
    this.loadUsers();
    
    
    console.log(this.state.detail)
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.page !== this.state.page) {
      this.loadUsers();
    }
  }

  

  loadUsers = async () => {
    try {
      const { page } = this.state;
  
      this.setState({ isLoading: true});
      const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=12`
      );
      console.log(response.data);
      
      this.setState((prevState) => ({
        
        users: [...prevState.users, ...response.data.results],
        errorMsg: ''
      }));
    } catch (error) {
      this.setState({
        errorMsg: 'Error while loading data. Try again later.'
      });
    } finally {
      this.setState({ isLoading: false  });
     
    }
    
    
  };
      loadMore = () => {
        this.setState((prevState) => {
          return {
            page: prevState.page + 1
          };
        });
      };

     

       handlePadre= async (numeroHijo)=>{
        await this.setState({detail: numeroHijo});
        
        console.log(this.state.detail);
        
      };

      handleClick= async (userSelected)=>{
        await this.setState({userdetail: userSelected});
        
        console.log(this.state.userdetail);
        
      };
    
      DetailOn=()=>{ 
    
        this.setState({ detail: true  }); 
        
        
        
      };
    
      Detail=async({currentTarget})  =>{ 
     

         const seleccionado = this.state.users.find(user => 
         user.login.uuid === currentTarget.id) 
      await  this.setState({userdetail :seleccionado});
   
      console.log(currentTarget.id);
  
      console.log(this.state.userdetail);
  
    };

  render() {
   
    const { users, isLoading, errorMsg, detail, userdetail} = this.state;
   
    return (
      <div>

     
      <div className="main-section" >
      {detail &&<DetailClose  handlePadre={this.handlePadre} userdetail={userdetail} />}
   
        <div className="row" onClick={this.DetailOn}>
     {
        users.map((user) =>(
 
 
  
         
            <div  key={user.login.uuid} value={user.login.uuid} className="user col s6 m3 l2" >
          
        <div id={user.login.uuid} className="card small " onClick={this.Detail}>
            <div className="center-align ">
                <img src={user.picture.medium} alt={user.name.first} className="circle responsive-img " />
            </div>
            <div className="center-align ">
                <div className="name">
                 {user.name.first}, {user.name.last}
                </div>
                <div className="city">
                 {user.location.city}
                </div>
                <div>
                 {user.location.country}
                </div>
            </div>
        </div>
      </div>
       
))
        

        }  

        
        </div>
        
        {isLoading && <p className="loading">Loading...</p>}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        
                <div className="load-more ">
                    <button onClick={this.loadMore} className=" row btn-floating light red "><div><i className="material-icons icono col s6 m6 l6">filter_9_plus</i></div>
                        <div className="Info text col s6 m6 l6">{isLoading ? 'Loading...' : 'Load More'}</div>
        </button>
      </div>
        
      </div>
      
      </div>
  );
     
    
  }
}