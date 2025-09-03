import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketService.js"

import "./App.css"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [filteredTickets, setFilteredTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)

 
  useEffect(() => {
    getAllTickets().then(ticketArray => {
      setAllTickets(ticketArray)
      setFilteredTickets(ticketArray) 
    })
  }, [])

  
  useEffect(() => {
    if (showEmergencyOnly) {
      const emergency = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergency)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets]) 

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button className="filter-btn btn-primary" onClick={() => setShowEmergencyOnly(true)}>Emergency</button>
        <button className="filter-btn btn-info" onClick={() => setShowEmergencyOnly(false)}>Show All</button>
      </div>
      <article className="tickets">
        {filteredTickets.map(ticket => (
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div className="ticket-info">emergency</div>
              <div>{ticket.emergency ? "yes" : "no"}</div>
            </footer>
          </section>
        ))}
      </article>
    </div>
  )
}
