import Fallback1 from "./FallBackChild1";

export default function Child1({name}) {
   try{
        if(!name){
            throw new Error("Name not provided");
        }

        return(
            // Implement Try-Catch block 
            // thus Fallback1 component is rendered when error exists in Child1 component
            // Else renders name of user
            <div>
                <h1>Name of user: {name.toUpperCase()}</h1>
            </div>
        )
   }
   catch(error){
    return <Fallback1/>
   }
}