import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loaded : false,
      users  : null,
    }

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(url){
        fetch(url)
        .then(response => response.json())
        .then(response => {
          this.setState({
            loaded : true,
            users : response});
            },
          error => console.log(error))
  }

  HideOnLoad(props){

    if(props.isLoaded){
      return <ul>{props.children}</ul>
    }
    return <h2 id="heading">Loading...</h2>;
  }

  

  render() {
    return (
      <>
        <this.HideOnLoad isLoaded={this.state.loaded}>
          {
            Array.isArray(this.state.users) ?
              this.state.users.map(user => {
                return (<li>{'> ' + user.username + '\t:\t' + user.name}</li>)
              }) : null
          }
        </this.HideOnLoad>
      
          {
            this.getUsers("https://jsonplaceholder.typicode.com/users")
          }
      </>
        
    )
  }
}
