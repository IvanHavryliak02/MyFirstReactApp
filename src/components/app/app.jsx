import './app.css';
import Info from '../info/info';
import Search from '../search/search';
import Filter from '../filter/filter';
import List from '../list/list';
import AddEmpolyees from '../add-employees/add-employees'

function App() {
    return (
        <div className="app">
            <Info/>

            <div className="search-panel">
                <Search/>
                <Filter/>
            </div>

            <List/>
            <AddEmpolyees/>
        </div>
    );
}

export default App;