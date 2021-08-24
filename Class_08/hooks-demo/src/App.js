import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './App.css';

const BigList = ({ list, onItemClick }) => {
  return (
    <ul>
      {
        list.map(item => <li onClick={ onItemClick }>{item}</li>)
      }
    </ul>
  )
} 




function App() {
  const [displayName, setDisplayName ] = useState("");
  const [isSubmited, setSubmited] = useState(false);
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ age, setAge ] = useState("");
  const firstNameInputRef = useRef(null);
  const sumbitedTimes = useRef(0);


  useEffect(() => {
    fetchDisplayName();
    firstNameInputRef.current.focus();
  }, [])

  useEffect(() => {
    if (isSubmited) {
      alert("USER ADDED SUCCESFULLY")
      setSubmited(false);
      sumbitedTimes.current++;
    }
  }, [isSubmited])

  const fetchDisplayName = async () => {
      // const data = await fetch("some api");
      // const displayName = data.json();
      // setDisplayName(displayName);
      setTimeout(() => {
        setDisplayName("FETCHED DISPLAY NAME");
      }, 1000)
  }


  const handleFirstName = e => {
    setFirstName(e.target.value)
  }
  const handleLastName = e => {
    setLastName(e.target.value)
  }
  const handleAge = e => {
    setAge(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    const dataToBeSend = {
      firstName,
      lastName,
      age
    }
    // make a post call sending the dataToBeSend
    fetch("https://localhost:8080/addProct", {
      method: "POST",
      body: JSON.stringify(dataToBeSend)
    })
    setSubmited(true);
    setAge("");
    setFirstName("");
    setLastName("");
  }


  const calculateAge = () => {
    for (let index = 0; index < 1000000000 ; index++) {}
    return age + 2;
  }
  const newAge = useMemo(() => calculateAge(), [ age ]);

  const handleClick = useCallback(() => { console.log('CLICKED')}, [])

  console.log('FIRST NAME', firstName)
  console.log('LAST NAME', lastName)
  console.log('AGE', age)
  console.log(sumbitedTimes)
  return (
    <div className="App">
      <h1>{ displayName }</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="firstName">FIRST NAME: </label>
        <input
          ref={ firstNameInputRef }
          type="text"
          name="firstName"
          value={firstName}
          onChange={ handleFirstName }
          placeholder="Insert first name..." 
        />
        <br/>
        <label htmlFor="lastName">LAST NAME: </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={ handleLastName }
          placeholder="Insert last name..." 
        />
        <br/>
        <label htmlFor="age">AGE: </label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={ handleAge }
        />
        <br />
        <button type="submit"> ADD USER</button>
        <span>
          {newAge}
        </span>
      </form>
      <BigList list={ [1,2,3,45,5,6,6,7,7,5,4,4,3,3,5,5,56,6] } onItemClick={handleClick} />
    </div>
  );
}

export default App;
