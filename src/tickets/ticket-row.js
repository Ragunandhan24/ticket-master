import React from 'react'
import axios from 'axios'
import api from '../config/api'
import key from '../config/credentials'
import {Link} from 'react-router-dom'

class TicketRow extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange=this.handleChange.bind(this);
        this.state={
            loaded:false
        }
    }
    // constructor is optional here.. props will always be available
    

    handleChange(event) {
        this.setState({
            loaded:true
        })
        const putData= {
            status : this.props.status === "completed" ? "open" : "completed"
        }
        axios.put(`${api.tickets.baseUrl}/${this.props.ticket_code}?api_key=${key}`, putData).then((response)=>{
            this.props.handleStatusChange(response.data);
            this.setState({
                loaded:false
            })
            
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    render() {
        const {ticket_code, name, department, priority, message, status} = this.props
        
        return (
        <tr>
            <td><Link to='/'>{ticket_code}</Link></td>
            <td>{name}</td>
            <td>{department}</td>
            <td>{priority}</td>
            <td>{message}</td>
            <td>{status}</td>
            <td><input type="checkbox" value={ticket_code} checked= {status==="completed" ? true : false}onChange={this.handleChange} disabled={this.state.loaded}/>{this.state.loaded ? <LoadImg/>: ''}</td>
        </tr>)
        
    }
}

function LoadImg () {
    return <img style={{alignContent:"center"}}src={require ('../images/tenor.gif')} alt="loader" width="40" height="40"/>
}

export default TicketRow