import React,{useState,useEffect} from 'react'
import axios  from 'axios'

export default function Delete() {
    const [state, setstate] = useState()
    useEffect(() => {
        axios.get('http://localhost:4000//delete/:id').then(res => {
            setstate(res.data)
       
        
        }).catch((err)=>{console.log(err)})
         },[state])
       
    return (
        <div>
            
        </div>
    )
}
