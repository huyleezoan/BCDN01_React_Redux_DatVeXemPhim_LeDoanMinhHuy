import logo from './logo.svg';
import './App.css';
import { store } from './redux/configStore.js';
import { Provider } from 'react-redux';

import BaiTapDatVeXemPhim from './BaiTapBookingTicket/BaiTapDatVeXemPhim';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapDatVeXemPhim />
      </Provider>
    </div>
  );
}

export default App;
