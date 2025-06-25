import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const { data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div style={{ textAlign: "left" }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço (R$)</th>
            </tr>
          </thead>
          <tbody>
            {loading && <p>Carregando</p>}
            {items &&
              items.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    {parseFloat(product.price).toFixed(2).replace(".", ",")}
                  </td>
                  <td>
                    <button onClick={() => handleRemove(product.id)}>
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:{" "}
            <input
              type="text"
              name="name"
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              id=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar produto" />
        </form>
      </div>
    </div>
  );
}

export default App;
