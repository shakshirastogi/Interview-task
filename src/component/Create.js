import React, {useState,useEffect} from 'react'
import '../Style/main.css'
import logo from '../images/Curd-logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//   import {useHistory } from 'react-router-dom'
 import axios from 'axios';
export default function Create(props) {
//   let history = useHistory();
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
const [data, setData] = useState([]);

const InputEvent = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
}
function addEmployeeDetails(e) {
    e.preventDefault();
        axios.post('http://localhost:4000/employee-details', formdata).then(res => {
        setData(res.data);
     })
}
// showing error msg
const toatify =()=>{
    toast.error(data)
}
  return (
        <div>
             <div className="container">
                <div className="inner_div">
                    <div className="row">
                        <form className="col s9" onSubmit={addEmployeeDetails}>
                            <img src={logo} alt="cointab-logo" />
                            <div className="row-2">
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="username" value={formdata.username} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Username</label>
                                </div>

                                <div className="input-field row-2">
                                    <input id="icon_email" type="text" name="email" value={formdata.email} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_email">Email</label>
                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="address" value={formdata.address} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Address</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="profile" value={formdata.profile} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Profile</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="skills" value={formdata.skills} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Skills</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="designation" value={formdata.designation} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Designation</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_prefix" type="text" name="salary" value={formdata.salary} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_prefix">Salary</label>

                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_pass" type="text" name="experience" value={formdata.experience} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_pass">Experience</label>
                                </div>
                                <div className="input-field row-2">
                                    <input id="icon_pass" type="text" name="phone" value={formdata.phone} onChange={InputEvent} className="validate" />
                                    <label htmlFor="icon_pass">phone</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light red "onClick={toatify} type="submit">Create
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <ToastContainer/>
        </div>
    )

}
