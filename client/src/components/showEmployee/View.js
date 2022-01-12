import React , { Component }  from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';
export default class View2 extends Component {
    state = {
        employee: []
    }

    
    componentDidMount(){
        this.mounted = true;
        axios.get('http://localhost:4000/employee/')
        .then(res => {
            const employee = res.data;
            this.setState({ employee });
        })
    }
    componentWillUnmount(){
        this.mounted = false;
    }
   
    handleDelete = ((e, id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/employee/delete/${id}`)
        
        .then(res => {
            console.log(res);
            console.log(res.data)   
        })
        window.location.reload(true);
    })
    render() {
        return (
            <div>
                <table className='table table-hover table-dark'>
                <thead className = "thead-light">
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Salary</th>
                            <th>Address</th>
                            <th>Team</th>
                            <th>Gender</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  this.state.employee.map(emp => 
                            <tr>
                            <td>{emp._id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.address}</td>
                            <td>{emp.team}</td>
                            <td>{emp.gender}</td>
                            <td>
                                <Link to = {`/employee/update/${emp._id}`} className = "btn btn-primary">Update</Link>
                            </td>
                            <td>
                                <button type = "submit" onClick={ (e) => this.handleDelete(e, emp._id) }>Delete</button>
                            </td>
                            
                        </tr>
                        ) }
                    </tbody>
                </table>
                <Pagination count = {10} />
            </div>
        )
    }

}

