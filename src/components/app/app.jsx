import './app.css';
import { Component } from 'react';
import Info from '../info/info';
import Search from '../search/search';
import Filter from '../filter/filter';
import List from '../list/list';
import AddEmpolyees from '../add-employees/add-employees'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            APIData: [
                { name: 'John Ador', salary: 1000, increase: false, like: false, id: 1 },
                { name: 'Liam Brooks', salary: 1250, increase: false, like: false, id: 2 },
                { name: 'Emma Collins', salary: 980, increase: false, like: false, id: 3 },
                { name: 'Noah Reed', salary: 1120, increase: false, like: false, id: 4 },
                { name: 'Olivia Gray', salary: 1340, increase: false, like: false, id: 5 }
            ],
            term: '',
            filter: 'all'
        }
    }

    changeFilterType = (filterType) => {
        this.setState(({filter}) => (
            {filter: filterType}
        ))
    }

    deleteElement = (id) => {
        this.setState(({APIData}) => (
            {
                APIData: APIData.filter(elem => elem.id !== id)
            }
        ))
    }

    createElement = (obj) => {
        if(obj.name && obj.salary){
            const newObj = {
            ...obj, 
            increase: false,
            like: false,
            }
            this.setState(({APIData}) => {
                newObj.id = APIData.length !== 0 ? APIData[APIData.length - 1].id + 1 : 0;
                return {
                    APIData: [...APIData, newObj]
                }
            })
        }  
    }

    onToggleProp = (id, prop) => {
        this.setState(({APIData}) => (
            {
                APIData: APIData.map(item => {
                    if(item.id === id){
                        return {...item, [prop]: !item[prop]}
                    }
                    return item
                })
            }
        ))
    }

    searchFilter = (data, term, filter) => {
        if(term.length === 0 && filter === 'all'){
            return data 
        }
        return data.filter(item => {
            const nameIndex = item.name.indexOf(term)
            if(nameIndex > -1){
                if(filter === 'all'){
                    return item
                }
                if(filter === 'increase'){
                    return item.increase
                }
                if(filter === 'salary'){
                    return item.salary > 1000
                }
            }
            return false
        })
    }

    onSearchChange = (newValue) => {
        this.setState(({
            term: newValue
        }))
    }

    render(){
        const {APIData, term, filter} = this.state;
        const elementsAmount = APIData.length;
        const increaseAmount = APIData.filter(item => item.increase).length;
        const visibleData = this.searchFilter(APIData, term, filter) 
        return (
            <div className="app">
                <Info elementsAmount={elementsAmount} increaseAmount={increaseAmount}/>

                <div className="search-panel">
                    <Search onSearchChange={this.onSearchChange}/>
                    <Filter onFilterChange={this.changeFilterType}/>
                </div>

                <List 
                    data={visibleData}
                    onDelete = {this.deleteElement}
                    onToggleProp = {this.onToggleProp}
                />
                <AddEmpolyees
                    onAddEmployee = {this.createElement}
                />
            </div>
        );
    }
    
}

export default App;