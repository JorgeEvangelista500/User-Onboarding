
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema'
import Member from './Details'


const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
  tos: false,
}
const initialMembers = []
const initialDisabled = true

function App() {

  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisable] = useState(initialDisabled)

  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then(resp => {
        setMembers(resp.data)
      }).catch(err => console.error(err))
  }

  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(resp => {
        setMembers([ resp.data, ...members]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(()=> setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name]: value})

}
  const formSubmit = () => {
    const newMember = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password
    }
    postNewMember(newMember)
  }

  useEffect(()=>{
    getMembers()
  }, [])

  useEffect(()=>{
    schema.isValid(formValues).then(valid => setDisable(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header><h1>Members App</h1></header>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {/* {
        members.map(member =>{
          return(
            <Member key={member.id} details={member} />
          )
        })
      } */}
      
    </div>
  );
}

export default App;
