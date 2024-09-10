import React, { useState } from "react";

const FormDemo = () => {
  const languages = ["Hindi", "English", "French", "Spannish"];
  const [lang, setLang] = useState(new Array(languages.length).fill(false));
  const [gend, setGend] = useState();

  const [showForm,setShowForm] = useState(false)
  const handleCheck = (index) => {
        const updatedLang = lang.map((item,ind)=>ind===index ? !item:item);

        setLang(updatedLang)
  }
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault();setShowForm(true)}}>
        Languages Known :-
        {languages.map((lg,i) => {
          return (
            <>
              <label>{lg} : </label>
              <input type="checkbox" onChange={()=>{handleCheck(i)}} />
            </>
          );
        })}
        <br/>
        Gender : -
        <fieldset id="group1" onChange={(e)=>{console.log(setGend(e.target.value))}}>
            <label>Male</label>
          <input type="radio" value="Male" name="gender" />
          <label>Female</label>
          <input type="radio" value="Female" name="gender" />
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <div style={{display:(showForm)?'block':'none'}}>
        User Details :- <br/>
        Languages Known :- 
        {
            lang.map((i,ind)=>{
                if(i)
                    return <p>{languages[ind]}</p>;
            })
        }
        Gender :-
        {gend}
      </div>
    </div>
  );
};

export default FormDemo;
