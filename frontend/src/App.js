import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Container>
          <main className="py-3">
            <Route path="/" component={HomeScreen} exact />
            <Route path="/products" component={HomeScreen} exact />
            <Route path="/products/:id" component={ProductScreen} />
          </main>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
