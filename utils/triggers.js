import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';

export const isAuthenticated = () => {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    // Redirect to login
    FlowRouter.go('/login');
  }
};

export const checkUserRole = (allowedRoles, groupId) => {
  const isUserInRole = allowedRoles.find(role =>
    (Roles.userIsInRole(Meteor.userId(), role, groupId)));

  if (!isUserInRole) {
    // Redirect
  }
};

/*
const render = FlowRouterHelper.init({
  loginRoute: '/login',
});

render(
  <>
    <Router layout={MainLayout}>
      <Route component={Signup} path="/signup" />
    </Router>
    <Router layout={Protected}>
      <Route component={Admin} allowedRoles=['owner', 'admin'] path="/admin" authenticated />
    </Router>
  </>
);
*/
