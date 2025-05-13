
export default function GradeDisplay(props:any){

    return(
        <div className="border border-black-300 p-4">
        <div className="col">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.teacher}</p>
        </div> 
        </div>
    );
}