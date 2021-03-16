import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
