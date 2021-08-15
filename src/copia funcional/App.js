import React from 'react';
import Header from './components/Header';
import axios from 'axios';
import UsersList from './components/UsersList';
import 'materialize-css/dist/css/materialize.min.css';

export default class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
    header:false,
    errorMsg: ''
  };

  componentDidMount() {
    this.setState({ isLoading: true, header:true });
    axios
      .get('https://randomuser.me/api/?page=0&results=50')
      .then((response) => {
        console.log(response.data);
         this.setState({ users: response.data.results, errorMsg: '' });
      })
      .catch((error) =>
        this.setState({
          errorMsg: 'Error while loading data. Try again later.'
        })
      )
      .finally(() => {
        this.setState({ isLoading: false, header: false });
      });
  }

  render() {
    const { users, isLoading, errorMsg, header } = this.state;
  
    return (
      <div className="main-section">
        {header && <Header />}
        {isLoading && <p className="loading">Loading...</p>}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <UsersList users={users} />
      </div>
    );
  }
}