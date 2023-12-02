import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import OrderList from './components/Orderlist';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <OrderList />
      </div>
    </Provider>
  );
};

export default App;
