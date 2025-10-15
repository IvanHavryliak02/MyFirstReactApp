import './app.css';
import Info from '../info/info';
import Search from '../search/search';
import Filter from '../filter/filter';
import List from '../list/list';
import AddEmpolyees from '../add-employees/add-employees'

function App() {

    const APIData = [
        {name: 'Michel Smith', salary: 1000, increase: true, id: 1},
        {name: 'Alex Robok', salary: 2000, increase: true, id: 2},
        {name: 'Andrew Milex', salary: 3000, increase: false, id: 3},
        {name: 'Ivan Havryliak', salary: 4000, increase: false, id: 4},
        {name: 'Jason More', salary: 10000, increase: true, id: 5}
    ]

    return (
        <div className="app">
            <Info/>

            <div className="search-panel">
                <Search/>
                <Filter/>
            </div>

            <List data={APIData}/>
            <AddEmpolyees/>
        </div>
    );
}

export default App;