import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import { Provider } from 'react-redux';
import store from '../store/store';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default RootLayout;
