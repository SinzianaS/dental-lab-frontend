import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function Home(props) {
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
        : <Redirect to='/login' />
    )} />
  );

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>You are now logged in.</p>
      {/* Add more content here */}

      {/* Authenticated route */}
      <PrivateRoute path="/dashboard" component={Dashboard} />
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
