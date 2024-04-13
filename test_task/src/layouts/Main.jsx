import { Outlet } from 'react-router-dom';
import style from './Main.module.css';

const Main = () => {
  return (
      <div>
        <Outlet />
      </div>
  );
};

export default Main;
