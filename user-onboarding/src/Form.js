import React from "react";
import './App.css'

export default function Form(props){
    const {values, submit, change, disabled, errors,}= props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
  return (
      <form className='form'   onSubmit={onSubmit}>
          <div>
            <h2>Add a new Member!</h2>
            <div>{errors.first_name}</div>
            <div>{errors.email}</div>
            <div>{errors.passwords}</div>
            <div>{errors.tos}</div>
          </div>
         <div>
             <label>Name
                <input
                    value={values.first_name}
                    onChange={onChange}
                    name='first_name'
                    type='text'
                />
             </label>
             <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                />
            <label>Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
            </label>
             </label>Terms of Service
                <input 
                    type='checkbox'
                    name='tos'
                    checked={values.tos}
                    onChange={onChange}
                />
            </div>
            <button id='submitBtn' disabled={disabled}>Submit</button>
      </form>
  )  
}