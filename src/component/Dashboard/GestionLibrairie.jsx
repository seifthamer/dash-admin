import React from "react";
import '../CSS/Tabl.css';
function GestionLibrairie() {


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
                        <th>Description</th>
                        <th>Adresse</th>
                        <th>Num Tel</th>
                        <th>Email</th>
                        <th>Nb Produit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                         Darsoufa 
                        </td>
                        <td>Desc</td>
                        <td>Mahdia</td>
                        <td>96 256 478 </td>
                        <td>Dorsaf@gmail.com</td>
                        <td>Produit</td>
                      </tr>
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
