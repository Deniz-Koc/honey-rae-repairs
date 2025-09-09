import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { User } from "../users/User.jsx"

export const CustomersList = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray)
    })
  }, [])

  return (
    <div className="customers">
      {customers.map((customerOb) => {
        return <User key={customerOb.id} user={customerOb} />
      })}
    </div>
  )
}
