import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigatehandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigatehandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
