# Flow Router React Helpers

Flow Router React Helpers shortens your router code by creating a Flow Router API similar to React Router version 3.

### Prerequisites

Install the Flow Router & the React Helpers Packages.

```
meteor add kadira:flow-router
meteor add jaireddjawed:flow-router-react-helpers
```

## Quick Start

Here's an example of using Flow Router with React Helpers.

imports/ui/layouts/MainLayout.jsx
```jsx
/* NPM Modules */
import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const MainLayout = ({ children }) => (<>
  <Navigation />
  <div className="container">
    {children}
  </div>
  <Footer />
</>);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

```

imports/startup/client/routes.jsx

```jsx
/* NPM Modules */
import React from 'react';

/* Meteor Modules */
import { Route, render } from 'meteor/jaireddjawed:flow-router-react-helpers';

/* Layouts */
import MainLayout from '../../ui/layouts/MainLayout';
import AuthenticatedLayout from '../../ui/layouts/AuthenticatedLayout';

/* Pages */
import Home from '../../ui/pages/Home';
import Signup from '../../ui/pages/Signup';
import Login from '../../ui/pages/Login';
import RecoverPassword from '../../ui/pages/RecoverPassword';
import ResetPassword from '../../ui/pages/ResetPassword';
import Dashboard from '../../ui/pages/Dashboard';

render(<>
  <Route component={MainLayout}>
    <Route name="home" path="/" title="Home" component={Home} />
    <Route name="Signup" path="/signup" title="Signup" component={Signup} />
    <Route name="Login" path="/login" title="Login" component={Login} />
    <Route name="Recover-Password" path="/recover-password" title="Recover Password" component={RecoverPassword} />
    <Route name="Reset-Password" path="/reset-password/:token" title="Reset Password" component={ResetPassword} />
  </Route>
  <Route component={AuthenticatedLayout}>
    <Route name="dashboard" path="/dashboard" title="Dashboard" component={Dashboard} authenticated />
  </Route>
</>);
```

## Additional Helpers
You can get a routes path by name and determine the active route.

imports/ui/components/Navigation.jsx
```jsx
import { pathFor, currentRoute } from 'meteor/jaireddjawed:flow-router-react-helpers';

const Navigation = () => (
  <nav className="navbar nav">
    <ul className="ml-auto">
      <div className={`nav-item ${currentRoute('login') ? 'active' : ''}`}>
        <a href={pathFor('login')} className='nav-link'>Login</a>
      </div>
      <div className={`nav-item ${currentRoute('signup') ? 'active' : ''}`}>
        <a href={pathFor('signup')} className='nav-link'>Signup</a>
      </div>
    </ul>
  </nav>
);
```

## Router Rules

Here are all of the available rules for the Router Component.

### component (React Component)
If it's a layout component, a children prop is required to display pages.

### name (string)
Name of the route.

### path (string)
Path of the route.

### title (string)
The current page's title. Optional.

### authenticated (boolean)
Redirects the user to the '/login' path if they aren't logged in.

### onEnter (function)
Called when a user enters a page.

### onExit (function)
Called when a user exits a page.
