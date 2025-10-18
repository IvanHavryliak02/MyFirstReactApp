import ListItem from '../list-item/list-item';
import './list.css'

const List = ({data, onDelete, onChangeIncrease, onChangeLike}) => {

    const apidata = data.map(item => {
        const {id, ...itemProps} = item;
        return <ListItem 
            key={id} 
            {...itemProps} 
            onDelete = {() => onDelete(id)}
            onChangeIncrease = {() => onChangeIncrease(id)}
            onChangeLike = {() => onChangeLike(id)}
        />
    })
    return (
        <ul className="list-group list">
            {apidata}
        </ul>
    );
}

export default List;