import { useState, useEffect } from "react"
import { getAllTickets } from "../../services/ticketService.js"
import "./Ticket.css"
import { Ticket } from "./Ticket.jsx"
import { TicketFilterBar } from "./TicketFilteBar.jsx"

export const TicketList = () => {

  const [allTickets, setAllTickets] = useState([])
  const [filteredTickets, setFilteredTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

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

  useEffect(()=>{
    const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])

return (
  <div className="tickets-container">
    <h2>Tickets</h2>
    <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}  />
    <article className="tickets">
      {filteredTickets.map((ticketOb) => {
        return (
          <Ticket key={ticketOb.id} ticket={ticketOb} />
        )
      })}
    </article>
  </div>
)
}