import ListItem from '../list-item/list-item';
import './list.css'

const List = ({data, onDelete, onToggleProp}) => {

    const apidata = data.map(item => {
        const {id, ...itemProps} = item;
        return <ListItem 
            key={id} 
            {...itemProps} 
            onDelete = {() => onDelete(id)}
            onToggleProp = {
                (e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
            }
        />
    })
    return (
        <ul className="list-group list">
            {apidata}
        </ul>
    );
}

export default List;