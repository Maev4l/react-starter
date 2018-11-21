import React from 'react';

import { Link } from 'react-router-dom';
import { Menu, Sidebar } from 'semantic-ui-react';

export const NavSideBar = ({ path }) => (
  <Sidebar as={Menu} animation="overlay" width="thin" visible icon="labeled" vertical inverted>
    <Menu.Item name="first" active={path === '/'} as={Link} to="/">
      First
    </Menu.Item>
    <Menu.Item name="second" active={path === '/second'} as={Link} to="/second">
      Second
    </Menu.Item>
  </Sidebar>
);

const extraHeaderMenuItems = [];
export const registerHeaderMenuItems = (components) => {
  components.forEach((cmp) => extraHeaderMenuItems.push(cmp));
};

export const NavHeaderBar = ({ history, store }) => {
  const matchedItems = extraHeaderMenuItems.filter(({ pathname }) => pathname === history.location.pathname);

  return (
    <Menu borderless style={{ border: 0, borderRadius: 0 }}>
      {matchedItems
        ? matchedItems.map(({ key, component: RegisteredComponent }) => (
            <Menu.Item key={key}>
              <RegisteredComponent />
            </Menu.Item>
          ))
        : null}
      <Menu.Menu position="right">
        <Menu.Item>{/* <Button icon="sign out" content="Logout" labelPosition="left" /> */}</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
