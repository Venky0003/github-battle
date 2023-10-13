import React from 'react';
import Battle from './Battle';
import Popular from './Popular';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Footer';
import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLader: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLader: false });
    },2000);
  }

  render() {
    return (
      <div className="container">
        {this.state.showLoader ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact>
                <Popular />
              </Route>
              <Route path="/battle">
                <Battle />
              </Route>
              <Footer />
            </div>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
