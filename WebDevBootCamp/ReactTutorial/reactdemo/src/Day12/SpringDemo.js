import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const SpringDemo = () => {
  const [data, setData] = useState([]);
  const [val, setVal] = useState("");

  const getBooks = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };
  useEffect(() => {
    getBooks();
  }, []);

  const submitBook = () => {
    console.log(val);

    axios
      .post("http://localhost:8080/books", {
        bookName: val,
      })
      .then(() => {
        getBooks();
      });
  };

  const deleteBook = (id) => {
    axios.delete(`http://localhost:8080/books/${id}`).then(()=>{
        getBooks();
    })
  }

  const updateBook = (id) => {
    axios.put(`http://localhost:8080/books/${id}`,{
        bookName:"Temporary Name"
    }).then(()=>{
        getBooks();
    })
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, ind) => {
            return (
              <tr>
                <td>{ind}</td>
                <td>{i.bookId}</td>
                <td>{i.bookName}</td>
                <td><Button className="btn btn-danger" onClick={()=>deleteBook(i.bookId)}>Delete</Button></td>
                <td><Button className="btn btn-warning" onClick={()=>updateBook(i.bookId)}>Update</Button></td>
                
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <input
          placeholder="Enter Book Name"
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={() => submitBook()}>Submit</button>
      </div>

    </div>
  );
};

export default SpringDemo;
