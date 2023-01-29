import { Provider } from 'react-redux';
import { store, Index } from '../config/index';

import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Index />
    </Provider>);
}

export default App;
