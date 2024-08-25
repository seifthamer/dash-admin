import React, { useEffect, useState } from "react";
import '../CSS/Tabl.css';
import axios from 'axios'

function GestionLibrairie() {
  const [users , setUsers] = useState();
  useEffect(()=>{
    const getAllUsers = async()=>{
      try {
        const res = await axios.get('http://localhost:5000/user/all');
        console.log(res.data.filter(user => user.role === 'client'))
        setUsers(res.data.filter(user => user.role === 'librairie'))
      } catch (error) {
        console.log(error)
      }
    }
    getAllUsers();
  },[])
const deleteLib = async(id)=>{
  try {
    const res = await axios.delete(`/deleteusers/:id`);
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className="content-container">
      <div id="app">
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3" />
            </a>
          </header>
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">Gestion Librairie</h2>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                      <th>Nom</th>
                        <th>role</th>
                        <th>Email</th>
                        <th>modifier</th>
                        <th>supprimer</th>
                      </tr>
                    </thead>
                    <tbody>
                    {users?.map((item)=>(
                        <tr>
                        <td>
                         {item.name} 
                        </td>
                        <td>{item.role}</td>
                        <td>{item.email}</td>
                        <td><button>edit</button> </td>
                        <td><button onClick={()=>deleteLib(item._id)}>delete</button></td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Contextual classes end */}
        <footer>
          <div className="footer clearfix mb-0 text-muted"></div>
        </footer>
      </div>
    </div>
  );
}

export default GestionLibrairie;
