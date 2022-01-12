import React, { useState}   from 'react';
import styles from './Form.css';

import axios from 'axios';
function Form() {



const [name, setName] = useState('');
const [salary, setSalary] =  useState('');
const [address, setAddress] = useState('');
const [team, setTeam] = useState('');
const [gender, setGender] = useState('');

const [employee, setEmployee] = useState([]);

const handleSubmit = ((e) => {
        e.preventDefault();
        if(gender){
            console.log('Submit the form')
        }
        
        const newEmployee = {name, salary, address, team, gender};
        
        setEmployee ((employee) => {
            return [...employee, newEmployee]
        }); 

     
        axios.post('http://localhost:4000/employee/add', newEmployee)
            .then(res => console.log(res.data));
          
        setName('');
        setSalary('');
        setAddress('');
        setTeam('');
        setGender('');

})


return  (
    <>
    <div    className = "container" 
            style = {{ 
            backgroundImage: "linear-gradient(to right,#ff5722 0%,#ff9800 100%)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width:'100%',
            height: '100vh' 
            }}
    >
      
    <div className="block" style = {{display: 'flex', justifyContent: 'center'}}>
    <form className = "form" onSubmit = { handleSubmit }> <br/> 
            
            <label htmlFor = "name">Employee Name </label>
            <input 
            type = "text"
            id = "name"
            value = {name}
            onChange = { (e) =>  { setName(e.target.value) } } 
            name = "name" required/> 
             <br/>

            <label htmlFor = "salary">Salary </label>
            <input
            type = "text"
            id = "salary"
            value = {salary}
            onChange = { (e) =>  { setSalary(e.target.value) } }
            name = "salary" required/>
            <br/>

            <label className = {styles.address} htmlFor = "address">Employee Address </label>
            <input 
            type = "text"
            id = "address"
            value = {address}
            onChange = { (e) => { setAddress(e.target.value) }}
            name = "address" required />
            <br/>
            <label htmlFor = "team">Team </label>
            <input 
            type = "text"
            id = "team"
            value = {team}
            onChange = { (e) => { setTeam(e.target.value) }}
            name = "team" required />
            <br/>
            <label htmlFor = "address">Gender </label>
            <div>
            <input type = "radio" id = "gender" value = "Male" checked={gender === 'Male'} onChange = { (e) => { setGender(e.target.value) } } />Male 
            <input type = "radio" id = "gender" value = "Female" checked={gender === 'Female'} onChange = { (e) => { setGender(e.target.value) } } />Female
            <input type = "radio" id = "gender" value = "Other" checked={gender === 'Other'} onChange = { (e) => { setGender(e.target.value) } } />Other 
            </div>
            <button className = "btn-success btn-lg" type = "submit" >Add Employee</button>
    </form>
    <br/>
    </div>
    </div>
    </>
)
};
export default Form;