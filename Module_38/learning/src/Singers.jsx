export default function Singer({singer}){
    return (
        <div>
            <h3>Singer: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}