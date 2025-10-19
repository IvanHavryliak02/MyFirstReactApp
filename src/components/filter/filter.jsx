import { Component } from 'react';
import './filter.css'

class Filter extends Component{

    constructor(props){
        super(props)
        this.state = {
            currFilter: 'all'
        }
    }

    onFilterChange = (e) => {
        const newFilter = e.target.getAttribute('data-type')
        this.setState({
            currFilter: newFilter
        })
        this.props.onFilterChange(newFilter)
    }

    render() {
        const {currFilter} = this.state;
        const buttonsParams = [
            {dataType: 'all', onClickMethod: this.onFilterChange, className: 'btn', text: 'All employees', id: 1},
            {dataType: 'increase', onClickMethod: this.onFilterChange, className: 'btn', text: 'up for promotion', id: 2},
            {dataType: 'salary', onClickMethod: this.onFilterChange, className: 'btn', text: 'Salary over 1000$', id: 3}
        ]
        const buttons = buttonsParams.map(buttonParam => {
            const {dataType, onClickMethod, className, text, id} = buttonParam;
            const activeClass = dataType === currFilter ? ' btn-light' : ' btn-outline-light'
            return (
                <button 
                    className={className + activeClass}
                    onClick = {onClickMethod}
                    data-type = {dataType}
                    type='button'
                    key={id}>
                        {text}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
    
}

export default Filter;