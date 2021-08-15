import React from 'react';
import DetailClose from './components/DetailClose';
import axios from 'axios';
import UsersList from './components/UsersList';
import 'materialize-css/dist/css/materialize.min.css';




export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlePadre = this.handlePadre.bind(this);
    this.handleClick = this.handleClick.bind(this);

  this.state = {
    
    detail:false,
    header:true,
    users: [],
    page: 0,
    isLoading: false,
    picture:"",
    userdetail: "",
    errorMsg: ''
   
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
        `https://randomuser.me/api/?page=${page}&results=10`
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

      handleClick=async(userSelected)  =>{ 
        await this.setState({userdetail:userSelected})
        console.log(this.state.userdetail);
    };
     

       handlePadre= async (numeroHijo)=>{
        await this.setState({detail: numeroHijo});
        
        console.log(this.state.detail);
        
      };
    
      DetailOn=()=>{ 
       
        this.setState({ detail: true  }); 
        console.log(this.state.detail);
        this.handleClick();
      };
    
      

  render() {

    const { users, isLoading, errorMsg, detail} = this.state;
   
    return (
      <div>

     
      <div className="main-section" >

        <div onClick={this.DetailOn}>
        {detail &&<DetailClose  handlePadre={this.handlePadre} Detail={this.handleClick}/>}
        <UsersList users={users} />
        
        </div>
        
        {isLoading && <p className="loading">Loading...</p>}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        
        <div className="load-more">
        <button onClick={this.loadMore} className="waves-effect waves-light btn-large"><i className="material-icons left">filter_9_plus</i>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
        
      </div>
      
      </div>
  );
     
    
  }
}