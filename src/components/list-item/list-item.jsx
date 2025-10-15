import { Component } from 'react';
import './list-item.css'

class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            increase: false,
            liked: false
        }
    }

    changeLike = () => {
        this.setState(({liked}) => ({
            liked: !liked
        }))
    }

    changeIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, liked} = this.state;
        const increasedClass = increase ? ' increase' : ''
        const likedClass = liked ? ' like' : '';

        return (
            <li 
                className={"list-group-item d-flex justify-content-between" + increasedClass + likedClass}
            >
                <span 
                    className="list-group-item-label"
                    onClick={this.changeLike}
                >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.changeIncrease}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
    
}

export default ListItem;