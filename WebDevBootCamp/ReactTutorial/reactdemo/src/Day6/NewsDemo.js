import React, { useEffect, useState } from "react";

import axios from "axios";
import { Card,Row,Col } from "react-bootstrap";



const NewsDemo = () => {
  const [data, setData] = useState([]);
  const [category,setCategory] = useState('genral')


  const categories= ['general','sports','business','entertainment','technology','science','health']

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=668ce27aa51246fc94c824c1f0804e54`
      )
      .then((data) => {
        console.log(data);
        setData(data.data.articles);
      });
  }, [category]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=668ce27aa51246fc94c824c1f0804e54`
      )
      .then((data) => {
        console.log(data);
        setData(data.data.articles);
      });
  }, []);

  return (
    <div>
      NewsDemo
      <div style={{display:'flex',flexDirection:'row',gap:'12px'}}>
        {
            categories.map((val)=>{
                return <button onClick={()=>{setCategory(val)}}>
                    {val}
                </button>
            })
        }
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((article, idx) => (
          <Col key={idx}>
            <Card onClick={()=>{window.open(article.url,'-blank')}} style={{cursor:'pointer'}}>
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default NewsDemo;
