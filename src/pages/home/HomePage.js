import React from 'react';
import { Route, Navigate, Link } from 'react-router-dom';
import Authentication from '../authentication/Authentication';

export default function HomePage(props) {
  // Access isLoggedIn prop
  const { isLoggedIn, setIsLoggedIn } = props;

  // Set isLoggedIn to true when component mounts
  React.useEffect(() => {
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  // HOC to check if user is authenticated
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isLoggedIn === true
        ? <Component {...props} />
        : <Navigate to='/login' />
    )} />
  );

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, user!</h1>
          {/* Add more personalized content here */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      ) : (
        <div>
          <h1>Welcome to the Home Page!</h1>
          <p>Please login to access your dashboard.</p>
          <Link to="/authentication"><Authentication /></Link>
        </div>
      )}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Add dashboard content here */}
    </div>
  );
}
