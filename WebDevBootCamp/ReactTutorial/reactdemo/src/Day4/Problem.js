import React, { useEffect, useState } from "react";
import ValidateForm from "./ValidateForm.js";

const Problem = () => {
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    if (timer <= 0) {
      return;
    }
    const timerId = setTimeout(() => {
      setTimer((p) => p - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timer]);
  return (
    <div>
      Time remaining :- {timer}
      <br />
      <ValidateForm />
    </div>
  );
};

export default Problem;
