import { Component } from 'react';
import './add-employees.css'

class AddEmployees extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            salary: ''
        })
    }

    render(){
        const {onAddEmployee} = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onAddEmployee({name: name, salary: salary});
                        this.clearForm();
                    }}
                >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name='name'
                        value={name}
                        onChange={this.onValueChange} 
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}  
                    />

                    <button type="submit"
                            className="btn btn-outline-light"
                    >Add</button>
                </form>
            </div>
        );
    }
}
    

export default AddEmployees;