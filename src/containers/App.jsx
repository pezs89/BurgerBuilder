import React from 'react';

import Layout from './Layout';

import '../assets/scss/main.scss';
import 'font-awesome-sass-loader';
import BurgerBuilder from './BurgerBuilder';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    )
  }
}

export default App;