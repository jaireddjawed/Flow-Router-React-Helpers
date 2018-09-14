import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'react-mounter';

import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export const name = 'flow-router-react-helpers';

export const render = (app) => {
  React.Children.map(app.props.children, (layout) => {
    React.Children.map(layout.props.children, (element) => {
      const {
        path,
        name,
        title,
        authenticated,
      } = element.props;

      FlowRouter.route(path, {
        name,
        triggersEnter: [() => {
          if (title) {
            document.title = title;
          }

          if (authenticated) {
            if (!Meteor.loggingIn() && !Meteor.user()) {
              FlowRouter.go('Login');
            }
          }
        }],
        action: (params, queryParams) => {
          mount(layout.props.component, {
            children: <element.props.component params={params} queryParams={queryParams} />,
          });
        },
      });
    });
  });
};

export const Route = ({ children }) => (
  {children}
);

Route.defaultProps = {
  children: null,
};

Route.propTypes = {
  children: PropTypes.node,
};

export const pathFor = (path, params) => {
  const query = params && params.query ? FlowRouter._qs.parse(params.query) : {};
  return FlowRouter.path(path, params, query);
};

export const urlFor = (path, params) => Meteor.absoluteUrl(pathFor(path, params));

export const currentRoute = (routeName) => {
  FlowRouter.watchPathChange();
  return FlowRouter.getRouteName() === routeName;
};
