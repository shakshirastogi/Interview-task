import { useState, useEffect } from 'react';
import TableContext from "./tableContext"
import { getEmployees } from '../Service/api';
const TableState = (props) => {

    //GetAllEmployees, this is a read opration
    const [getEmp, setEmp] = useState([])
    useEffect(() => {
        getAllEmployees();
    }, [getEmp])
    const getAllEmployees = async () => {
        const response = await getEmployees();
        setEmp(response.data)
    }
    return (
        <TableContext.Provider value={{ getEmp }}>
            {props.children}
        </TableContext.Provider>
    )
}

export default TableState;
