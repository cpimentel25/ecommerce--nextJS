import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuFigure />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOption />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function MenuFigure() {
  return (
    <Menu>
      <Link href="/figures">
        <Menu.Item>Figures</Menu.Item>
      </Link>
      <Link href="/patterns">
        <Menu.Item>Patterns</Menu.Item>
      </Link>
    </Menu>
  );
}

function MenuOption() {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="user outline" />
        My Account
      </Menu.Item>
    </Menu>
  );
}
