import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/adduser" component={AddUser} exact />
          <Route path="/edituser" component={EditUser} exact />
          <Route path="/user/:id" component={ViewUser} exact />
        </Container>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
