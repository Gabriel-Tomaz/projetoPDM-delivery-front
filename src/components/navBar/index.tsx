import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider, Drawer } from 'react-native-paper';
import Icon from "react-native-vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";

const NavBar = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

    const Navigation = useNavigation();

    function goToPage(page: any){
        Navigation.navigate(page);
    }

  return (
      <Provider>
        <View
            style={{
              paddingTop: 50,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
          <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}>  <Icon name="menu" style={{fontWeight: 'bold',
                  fontSize: 20}}/></Button>}>
            <Menu.Item onPress={() => goToPage('Home')} title="Home" />
            <Menu.Item onPress={() => goToPage('Profile')} title="Profile" />
            <Menu.Item onPress={() => goToPage('Cardapio')} title="Cardápio" />
            <Menu.Item onPress={() => goToPage('Produtos')} title="Produtos" />
            <Menu.Item onPress={() => goToPage('')} title="Sacola" />
            <Menu.Item onPress={() => goToPage('')} title="Meus pedidos" />
            <Divider />
            <Menu.Item onPress={() => goToPage('Login')} title="Sair" />
          </Menu>
        </View>
      </Provider>
  );
};

export default NavBar;