import Fallback1 from "./Fallback1";

export default function Child1({name}) {
    return(
        (name)? <div>
            <h1>Name of User: {name.toUpperCase()}</h1>
        </div> : <Fallback1/>
    )
}