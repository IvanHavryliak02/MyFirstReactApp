import ListItem from '../list-item/list-item';
import './list.css'

const List = ({data}) => {

    const apidata = data.map(item => {
        const {id, ...itemProps} = item;
        return <ListItem key={id} {...itemProps}/>
    })
    return (
        <ul className="list-group list">
            {apidata}
        </ul>
    );
}

export default List;