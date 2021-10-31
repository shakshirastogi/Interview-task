import axios from 'axios'
//getEmpoyees.............
const url = "http://localhost:4000/get-details";
export const getEmployees = async()=>{
  
    return await axios.get(`${url}`)
}
//addEmployess............
// const url2 = "http://localhost:4000/employee-details"
// export  function addEmpoyees(){
//   axios.post(url2).then((resp)=>{
//         console.log(resp)
//     });

// }
//getAddedEmployeesByid..............
const url2 = "http://localhost:4000";
export const getAddedEmpById = async(id)=>{
    id = id ||''
    return await axios.get(`${url2}/${id}`)
   
}
//editEmployeeById...................
const url4 = "http://localhost:4000/update";
export const editEmpById = async(id, formdata)=>{
return  await axios.patch(`${url4}/${id}`,formdata)
}
//deleteEmployeeData..................
const url5 = "http://localhost:4000/delete";
export const deleteEmpDataById = async(id)=>{
    return await axios.delete(`${url5}/${id}`)
}