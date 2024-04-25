// ---------------- React and redux tools imports---------------
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
      <div>
        <Outlet />
      </div>
  );
};

export default Main;
