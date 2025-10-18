import './info.css' 

const Info = ({elementsAmount, increaseAmount}) => {
    return (
        <div className="info">
            <h1>Employee management in the company Exemple</h1>
            <h2>Total number of employees: {elementsAmount}</h2>
            <h2>Will receive a bonus: {increaseAmount} </h2>
        </div>
    );
}

export default Info;