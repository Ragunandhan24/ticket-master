import React from 'react'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            search:''
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })

        this.props.handleSearch(event.target.value);
    }

    render () {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" name="search" value={this.state.search} placeholder="Search by Code" className="form-control"onChange={this.handleChange}/>
                </div>
                
            </form>
        )
    }
}

export default SearchForm