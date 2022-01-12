import React, { useState} from 'react';

import axios from 'axios';




function SearchBar()  {
    const BarStyling = {width: "1200px", backgroundColor: "#3CBC8D" , color: "white" , border: "none", padding: "0.5rem"};
    
    const [searchId, setSearchId ] = useState('');

    const [employee, setEmployee] = useState([]);
   

    const handleClick = ((e , id) => {
            e.preventDefault();
            console.log(id);
           
            axios.get(`http://localhost:4000/employee/view/${searchId}`)
            .then( res => {
                setEmployee(res.data); 
             
            })
         
    })


    
    return (
        <>
        <div className = "container" 
                style = {{ 
                backgroundImage: "linear-gradient(to right,#ff5722 0%,#ff9800 100%)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width:'100%',
                height: '100vh' 
                }}
                >
        <div className="block" style = {{display: 'flex', justifyContent: 'center'}}>
            <form className = "form"  > <br/> 
                
                <input
                style = {BarStyling}
                value = {searchId}
                placeholder = {"Enter Employee ID"}
                onChange= { (e) => {setSearchId(e.target.value)} }
                />
               <button  className = "btn-success btn-lg"  onClick={ (e) => handleClick(e, searchId ) }>Search </button>
                </form>
        </div>        
                <br/>
                <br/>
                <div>  
                                   <table className = "table table-hover table-dark">
                                    <thead className = "thead-light">
                                        <tr>
                                            <th>Employee Id</th>
                                            <th>Employee Name</th>
                                            <th>Salary</th>
                                            <th>Address</th>
                                            <th>Team</th>
                                            <th>Gender</th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        
                                        <tr>
                                            <td>{employee._id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.salary}</td>
                                            <td>{employee.address}</td>
                                            <td>{employee.team}</td>
                                            <td>{employee.gender}</td>
                                        </tr>
                                        
                                    </tbody>   
                                    </table>  
                            </div>    
                          
                  
                            
                        
                
        </div>
        
        </>
    );
}

export default SearchBar;



  