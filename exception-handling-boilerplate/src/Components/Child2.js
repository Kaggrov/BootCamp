import Fallback2 from "./Fallback2";

export default function Child2({locality}) {
    return(
        (locality)?<div>
            <h1>In locality: {locality.toUpperCase()}</h1>   
        </div>:<Fallback2/>
    )
}