import { NavLink } from "react-router-dom";

import * as Styles from "./Menu.styles";

const Menu = () => {
  return (
      <Styles.Container>
        <Styles.WrapperMenu>
          <Styles.Logo>
            <img src="/images/minilogo.png" alt="logo" />
          </Styles.Logo>
          <Styles.Menu>
            <Styles.MenuItem>
              <NavLink to='/'>
                Home
              </NavLink>
            </Styles.MenuItem>
          </Styles.Menu>
        </Styles.WrapperMenu>
      </Styles.Container>
  );
};

export default Menu;
