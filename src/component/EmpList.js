import { Link } from "react-router-dom";
import React,{useContext} from 'react';
import {deleteEmpDataById,getEmployees} from '../Service/api'
import tableContext from '../ContextApi/tableContext';
export default function EmpList() {
  const context = useContext(tableContext)
  const {getEmp} = context
  const mapData = getEmp;
  const deleteEmployeeData = async(id)=>{
   await deleteEmpDataById(id);
    getEmployees();
}
return (
     <div className="container table-responsive">
    <table className="table table-bordered">
      <thead className="danger">
      <tr>
          <th>id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Profile</th>
          <th>Skills</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Experience</th>
          <th>Phone</th>
          <th>Action</th>
          </tr>
      </thead>
      <tbody>
     {mapData.map((list)=>{
        return(
         <tr> 
          <td >{list._id }</td>
          <td>{list.username}</td>
          <td>{list.email }</td>
          <td>{list.address}</td>
          <td>{list.profile}</td>
          <td>{list.skills}</td>
          <td>{list.designation}</td>
          <td>{list.salary}</td>
          <td>{list.experience}</td>
          <td>{list.phone}</td>
          <td><button className="btn waves-effect waves-light red " type="buttion">
                                <i className="material-icons right"><Link to={`/edit/${list._id}`}>edit</Link></i>
                            </button> <button className="btn waves-effect waves-light blue" type="buttion" onClick={()=>deleteEmployeeData(list._id)}>
                                <i className="material-icons right">delete</i>
                            </button></td>
                            </tr>  
                            )
      })}
    </tbody>
    </table>
  </div>

    )
}
