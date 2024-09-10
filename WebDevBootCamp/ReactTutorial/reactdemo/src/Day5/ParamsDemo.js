import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const ParamsDemo = () => {
  const { n } = useParams();
  const [x,setx] = useSearchParams();
  return (
    <div>
      ParamsDemo
      {n}
      SearchParams = {x.get('city')}
    </div>
  );
};

export default ParamsDemo;
