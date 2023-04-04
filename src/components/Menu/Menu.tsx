import Link from "next/link";
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
            <Styles.Link>Início</Styles.Link>
          </Styles.MenuItem>
          <Styles.MenuItem>
              <Styles.Link>Sobre</Styles.Link>
          </Styles.MenuItem>
          <Styles.MenuItem>
            <Styles.Link>Portifólio</Styles.Link>
          </Styles.MenuItem>
        </Styles.Menu>
      </Styles.WrapperMenu>
    </Styles.Container>
  );
};

export default Menu;
