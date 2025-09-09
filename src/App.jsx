import { TicketList } from "./components/tickets/TicketList.jsx"
import { CustomersList } from "./components/customers/CustomersList.jsx"
import { EmployeesList } from "./components/employees/EmployeesList.jsx"


export const App = () => {
  return (
    <>
      <TicketList />
      <CustomersList />
      <EmployeesList />
    </>
  )
}
