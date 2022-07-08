import React, { useState }  from 'react'
import Header from './components/Header/Header';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList'



function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }

  return (
    <div>
      <Header />
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}  />
    </div>
  );
}

export default App;
