import { Component } from 'react';
import './search.css'

class SearchPanel extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState(({
            term 
        }))
        this.props.onSearchChange(term);
    }

    render(){
        return (
            <input 
                type = "text" 
                className = "form-control search-input"
                placeholder = "Find employee"
                onChange = {this.onSearchChange}
                value = {this.state.term}    
            />
        )
    }

    
}

export default SearchPanel;