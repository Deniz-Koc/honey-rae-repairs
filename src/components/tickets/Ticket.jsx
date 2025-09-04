export const Ticket = ({ticket, name}) => {
    return <section className="ticket">
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div className="ticket-info">emergency</div>
              <div>{ticket.emergency ? "yes" : "no"}</div>
            </footer>
          </section>
}