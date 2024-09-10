import { useState } from "react";
import "./App.css";
import Auth from "./Day1/Auth.js";
import InputDemo from "./Day1/InputDemo.js";
import Show from "./Day1/Show.js";
import ClassCompo from "./classCompo.js";
import { FunctonalCompo } from "./functonalCompo.js";
import IncDec from "./incDec.js";
import ListAndKeys from "./Day2/ListAndKeys.js";
import Excercise1 from "./Day2/Excercise1.js";
import User from "./Day3/User.js";
import Shopping from "./Day3/Shopping.js";
import FormDemo from "./Day3/FormDemo.js";
import LifeCycleDemo from "./Day4/LifeCycleDemo.js";
import RouterDemo from "./Day5/RouterDemo.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Day6Demo from "./Day6/Day6Demo.js";
import Day7Demo from "./Day7/Day7Demo.js";
import Day8Demo from "./Day8/Day8Demo.js";
import Day9Demo from "./Day9/Day9Demo.js";
import Day10Demo from "./Day10/Day10Demo.js";
import Day11Demo from "./Day11/Day11Demo.js";
import Day12Demo from "./Day12/Day12Demo.js";

function App() {
  const [message, setMesage] = useState("Parent");
  const [user, setUser] = useState("Karttekay");

  const disp = (newUser) => {
    setUser(newUser);
  };
  return (
    <div className="App">
      {/* <ClassCompo name={"Hello World"} message={message} />
      <FunctonalCompo />
      <IncDec />
      <Show />
      <InputDemo />
      <Auth />
      <button
        onClick={() => {
          setMesage("Child Compoenent");
        }}
      >
        Change Child value
      </button>

      <h1>---------------------------Day2-----------------------</h1>
      <ListAndKeys />
      <Excercise1 />
      <h1>---------------------------Day3-----------------------</h1>
      <h4>Name in Parent :- {user}</h4>
      <User user={user} disp={disp} />
      <Shopping />
      <FormDemo />
      <h1>---------------------------Day4-----------------------</h1>
      <LifeCycleDemo />
      <h1>---------------------------Day5-----------------------</h1>
      <RouterDemo />
      <h1>--------------------------Day 6-----------------------</h1>
      <Day6Demo />
      <h1>--------------------------Day 7-----------------------</h1>
      <Day7Demo />
      <h1>--------------------------Day 8-----------------------</h1>
      <Day8Demo/>
      <h1>--------------------------Day 9-----------------------</h1>
      <Day9Demo/>
      <h1>--------------------------Day 10-----------------------</h1>
      <Day10Demo/>
      <h1>--------------------------Day 11-----------------------</h1>
      <Day11Demo/> */}
      <h1>--------------------------Day 12-----------------------</h1>
      <Day12Demo/>

    </div>
  );
}

export default App;
