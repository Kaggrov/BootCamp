import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
    return(
        <div>
            <Child1 ></Child1>
            <Child2></Child2>
            <Child1 name={"Karttekay"}/>
            <Child2 locality={"Gurugram"}/>
        </div>
    )
}

export default Parent;