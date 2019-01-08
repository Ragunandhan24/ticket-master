import React from 'react'
import TicketRow from '../tickets/ticket-row'
import Progress from '../tickets/progress'
import scrollable from '../../src/index.css'

function TicketTable (props) {
    return (
        <div>
            
            <Progress tickets={props.tickets}/>
            <div className="scrollable">
                <table className="table table-bordered" style={{tableLayout:"fixed", width:"100%"}}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Priority</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tickets.map((ticket)=>{
                            return <TicketRow key= {ticket.ticket_code} ticket_code = {ticket.ticket_code} name={ticket.name} department={ticket.department} priority = {ticket.priority} message = {ticket.message} status={ticket.status} handleStatusChange={props.handleStatusChange}/>
                        })}
                        {/* <TicketRow tickets={props.tickets}/> To have control over what field needed in the object we pass it as seperate props or attribute*/}
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}


export default TicketTable