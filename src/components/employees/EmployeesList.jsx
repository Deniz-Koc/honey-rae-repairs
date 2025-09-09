import { useState, useEffect } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray)
    })
  }, [])

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <div key={employeeObj.id}>
            {employeeObj.user?.fullName}
          </div>
        )
      })}
    </div>
  )
}
