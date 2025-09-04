import { useState, useEffect } from "react"
import { getAllTickets } from "../../services/ticketService.js"
import "./Ticket.css"
import { Ticket } from "./Ticket.jsx"

export const TicketList = () => {

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
{filteredTickets.map((ticketOb) => {
        return (
          <Ticket key={ticketOb.id} ticket={ticketOb} name="Joe"/>

    )
})}
      </article>
    </div>
  )
}