import ListItem from '../list-item/list-item';
import './list.css'

const List = ({data, onDelete}) => {

    const apidata = data.map(item => {
        const {id, ...itemProps} = item;
        return <ListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
        />
    })
    return (
        <ul className="list-group list">
            {apidata}
        </ul>
    );
}

export default List;