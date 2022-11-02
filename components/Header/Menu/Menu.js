import { useState, useEffect } from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";

export default function MenuWeb() {
  const [showModal, setShowModal] = useState(false);
  const [tittleModal, setTittleModal] = useState("Sing In");
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
      console.log(response);
    })();
  }, [auth]);

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
            {user !== undefined && (
              <MenuOption
                onShowModal={onShowModal}
                user={user}
                logout={logout}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        tittle={tittleModal}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setTittleModal={setTittleModal} />
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
  const { onShowModal, user, logout } = props;

  return (
    <Menu>
      {user ? (
        <>
          <Link href="/orders">
            <Menu.Item>
              <Icon name="game" />
              My orders
            </Menu.Item>
          </Link>
          <Link href="/wishlist">
            <Menu.Item>
              <Icon name="heart outline" />
              Wishlist
            </Menu.Item>
          </Link>
          <Link href="/account">
            <Menu.Item>
              <Icon name="user outline" />
              {user.name} {user.lastname}
            </Menu.Item>
          </Link>
          <Link href="/cart">
            <Menu.Item className="m-0">
              <Icon name="cart" />
            </Menu.Item>
          </Link>

          <Menu.Item onClick={logout} className="m-0">
            <Icon name="power off" />
          </Menu.Item>
        </>
      ) : (
        <Menu.Item onClick={onShowModal}>
          <Icon name="user outline" />
          My Account
        </Menu.Item>
      )}
    </Menu>
  );
}
