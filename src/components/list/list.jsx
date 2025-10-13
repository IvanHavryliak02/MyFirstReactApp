import ListItem from '../list-item/list-item';
import './list.css'

const List = () => {
    return (
        <ul className="list-group list">
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </ul>
    );
}

export default List;