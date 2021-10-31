import React, { useState, useEffect, useContext } from 'react'
import logo from '../images/Curd-logo.png'
import {getAddedEmpById,editEmpById} from '../Service/api';
import { useParams,useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Edit() {
    const {id} = useParams();
    let history = useHistory();
    const [formdata, setformdata] = useState({
        username: "",
        email: "",
        address: "",
        profile: "",
        skills: "",
        designation: "",
        salary: "",
        experience: "",
        phone: ""
    
    })
    const {username,email,address,profile,skills,designation,experience,phone,salary} = formdata
    useEffect(() => {
        loadEmployeeData();
 }, [])
  const loadEmployeeData = async ()=>{
  const response = await getAddedEmpById(id) 
  setformdata(response.data)
  }
const InputEvent = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
}
 const editEmployeeDetails =async(e)=> {
    e.preventDefault();
  await editEmpById(id,formdata);
  history.push('/emplist')

}
const toatify =()=>{
    toast.success("Edit Successfully");
}
    return (
        <div>
             <div className="container">
                <div className="inner_div">
                    <div className="row">
                        <form className="col s9" onSubmit={editEmployeeDetails}>
                            <img src={logo} alt="cointab-logo" />
                            <div className="row-2">
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="username" value={username} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Username</label>
                                </div>

                                <div className="input-field row-2">
                                    <input id="icon_email" type="text" name="email" value={email} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_email">Email</label>
                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="address" value={address} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Address</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="profile" value={profile} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Profile</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="skills" value={skills} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Skills</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="designation" value={designation} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Designation</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="salary" value={salary} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Salary</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_pass" type="text" name="experience" value={experience} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_pass">Experience</label>
                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_pass" type="text" name="phone" value={phone} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_pass">phone</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light red " type="submit" onClick={toatify}>Edit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}
