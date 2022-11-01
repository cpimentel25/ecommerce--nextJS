import { useState } from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";

export default function MenuWeb() {
  const [showModal, setShowModal] = useState(false);
  const [tittleModal, setTittleModal] = useState('Sing In');

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuFigure />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOption onShowModal={onShowModal} />
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        tittle={tittleModal}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setTittleModal={setTittleModal}/>
      </BasicModal>
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

function MenuOption(props) {
  const { onShowModal } = props;

  return (
    <Menu>
      <Menu.Item onClick={onShowModal}>
        <Icon name="user outline" />
        My Account
      </Menu.Item>
    </Menu>
  );
}
