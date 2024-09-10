import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const AxiosDemo = () => {
  const [products, setProducts] = useState([]);
  const [display,setDisplay] = useState(false);
  const [postData,setPostData] = useState({})

  const fun = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const post = () =>{

    axios.post('http://localhost:8000/products',postData).then(()=>{
        alert("Added product")
    })
  }

  useEffect(()=>{
    fun();
  },[])
  return (
    <div>
      <button
        onClick={() => {
            console.log(products)
          setDisplay(true)
        }}
      >
        Call Api
      </button>
      <button
        onClick={() => {
          post()
        }}
      >
        Add product
      </button>
      <form>
        <label>Title</label>
        <input type="text" onChange={(e)=>{
            const obj = {
                ...postData,
                title:e.target.value
            }
            setPostData(obj)
        }}/>
        <label>description</label>
        <input type="text" onChange={(e)=>{
            const obj = {
                ...postData,
                description:e.target.value
            }
            setPostData(obj)
        }}/><br/>
        <label>Rating</label>
        <input onChange={(e)=>{
            const obj = {
                ...postData,
                rating:e.target.value
            }
            setPostData(obj)
        }}/>
        <label>Price</label>
        <input onChange={(e)=>{
            const obj = {
                ...postData,
                price:e.target.value
            }
            setPostData(obj)
        }}/>
      </form>
      {display && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {products?.slice(0,10).map((i, ind) => {
              return (
                <tr>
                  <td>{ind}</td>
                  <td>{i.title}</td>
                  <td>{i.price}</td>
                  <td>{i.rating}</td>
                  <td>{i.brand}</td>

                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AxiosDemo;
