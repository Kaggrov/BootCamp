import React from "react";
import {Table} from "react-bootstrap";
import "./ListAndKeys.css";

const ListAndKeys = () => {
  const numbers = [
    {
      name: "KG",
      email: "kg2gmail.com",
      phone: "1111",
    },
    {
      name: "KGaw",
      email: "k1g2gmail.com",
      phone: "112212",
    },
    {
      name: "KGfd",
      email: "kg12gmail.com",
      phone: "112542",
    },
    {
      name: "KG",
      email: "kg2gmail.com",
      phone: "111422",
    },
  ];
  const people = [
    {
      name: "KG",
      email: "kg2gmail.com",
      phone: "1111",
      address:[
        'Gurugram',
        'Noida',
        'Indore',
        'Ahemdabad'
      ]
    },
    {
      name: "KGaw",
      email: "k1g2gmail.com",
      phone: "112212",
      address:[
        'Gurugram',
        'Noida',
        'Indore',
        'Ahemdabad'
      ]
    },
    {
      name: "KGfd",
      email: "kg12gmail.com",
      phone: "112542",
      address:[
        'Gurugram',
        'Noida',
        'Indore',
        'Ahemdabad'
      ]
    },
    {
      name: "KG",
      email: "kg2gmail.com",
      phone: "111422",
      address:[
        'Gurugram',
        'Noida',
        'Indore',
        'Ahemdabad'
      ]
    },
  ];
  return (
    <div>
      ListAndKeys
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {numbers.map((i) => {
          return (
            <tr>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
            </tr>
          );
        })}
      </table>
      <br />
      {/* With react bootstrap  */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((i, ind) => {
            return (
              <tr>
                <td>{ind}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      {/* Conditional render */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((i, ind) => {
            if (i.phone === "1111") {
              return (
                <tr>
                  <td>{ind}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    <br/>
    <br/>
      {/* Nested Map */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {people.map((i, ind) => {

              return (
                <tr>
                  <td>{ind}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                  <td>
                    <ul>
                        {
                            i.address.map((arr)=>{
                                return <li>{arr}</li>
                            })
                        }
                    </ul>
                  </td>
                </tr>
              );
            
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListAndKeys;
