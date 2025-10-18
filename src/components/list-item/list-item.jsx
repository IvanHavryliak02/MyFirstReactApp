import { Component } from 'react';
import './list-item.css'

class ListItem extends Component {

    render() {
        const {
            name, 
            salary, 
            onDelete, 
            onToggleProp, 
            increase, 
            like} = this.props;
        
        const toggleStatus = (status, className) => status ? ` ${className}` : '';
        
        const increaseClass = toggleStatus(increase, 'increase')
        const likeClass = toggleStatus(like, 'like')

        return (
            <li 
                className={
                    "list-group-item d-flex justify-content-between" + 
                    increaseClass + 
                    likeClass
                }
            >
                <span 
                    className="list-group-item-label"
                    onClick={onToggleProp}
                    data-toggle='like'
                >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle='increase'
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
    
}

export default ListItem;