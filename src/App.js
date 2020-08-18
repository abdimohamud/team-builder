import React, {useState, useEffect} from 'react';
import Form from './Components/Form'
import TeamList from './Components/TeamList'
import { v4 as uuid } from "uuid";
import './App.css';

const initialFriendsList = [
    {
      id: uuid(),
      Member: "Michael",
      email: "michael@lambda.com",
      role: "Full-Stack"
    }
  ];
  
  const initialFormValues = {
    Member: "",
    email: "",
    role: ""
  };


const fakeAxiosGet = () => {
  return Promise.resolve({
    status: 200,
    success: true,
    data: initialFriendsList
    });
  };
const fakeAxiosPost = (url, { username, email, role }) => {
  const newFriend = { id: uuid(), username, email, role };
  return Promise.resolve({ status: 200, success: true, data: newFriend });
  };


function App() {
  const [friends, setFriends] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const updateForm = (inputName, inputValue) => { 
    setFormValues({ ...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
  
    const friend = {
    
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    
    if (!friend.username || !friend.email) return
   
    fakeAxiosPost('fake.com', friend)
      .then(res => {
        
        const newFriendFromAPI = res.data
        setFriends([...friends, newFriendFromAPI])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setFriends(res.data))
  }, [])
  

   
  


  

  return (
    <div className="App">
      <div className="Intro-output">
         <h1>Welcome To The Team!</h1>
    {
      friends.map(friend => {
        return (
          <TeamList key={friend.id} details={friend} />
        )
      })
    }
      </div>
     
    <div>
    <Form values={formValues}
        update={updateForm}
        submit={submitForm} />


    </div>
  </div>

  

  

);
}

export default App;
