// import CopyNavbar from './components/CopyNavbar';
// import { Navbar } from './components/Navbar';

import { useState } from "react";

function HideOnLoad(props){

  if(props.isLoaded){
    return <ul>{props.children}</ul>
  }
  return <h2 id="heading">Loading...</h2>;
}

function displayUserList(props){
  return(<li>props.name</li>)
}

function App() {
  const [loaded, setLoadStatus] = useState(false);
  const [users, setUsers] = useState({})

  function getUsers(url){
    fetch(url)
    .then(response => response.json())
    .then(response => {

      setLoadStatus(true);
      setUsers(response);

      response.map(user => displayUserList(user))
    })
  }

  return (
    <>
    <HideOnLoad isLoaded={loaded}>
      {
        Array.isArray(users) ?
          users.map(user => {
            return (<li>{'> ' + user.username + '\t:\t' + user.name}</li>)
          }) : null
      }
    </HideOnLoad>
      {
        getUsers("https://jsonplaceholder.typicode.com/users")
      }

    </>
  );
}

export default App;