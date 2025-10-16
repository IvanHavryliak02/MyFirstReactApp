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
                
            ]
        }
    }


    deleteElement = (id) => {
        this.setState(({APIData}) => (
            {
                APIData: APIData.filter(elem => elem.id !== id)
            }
        ))
    }

    createElement = (obj) => {
        this.setState(({APIData}) => {
            obj.id = APIData.length !== 0 ? APIData[APIData.length - 1].id + 1 : 0;
            return {
                APIData: [...APIData, obj]
            }
        })
    }

    render(){
        const {APIData} = this.state;
        return (
            <div className="app">
                <Info/>

                <div className="search-panel">
                    <Search/>
                    <Filter/>
                </div>

                <List 
                    data={APIData}
                    onDelete = {this.deleteElement}
                />
                <AddEmpolyees
                    onAddEmployee = {(obj) => this.createElement(obj)}
                />
            </div>
        );
    }
    
}

export default App;