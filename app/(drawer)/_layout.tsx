import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Button, View, XStack } from 'tamagui';

import { HeaderButton } from '../../components/HeaderButton';

import { Container } from '~/tamagui.config';

const DrawerLayout = () => (
  <Drawer
    screenOptions={{
      drawerPosition: 'right',
      headerLeft: () => <></>,
      headerRight: () => (
        <XStack flex={1} alignItems="center">
          <Button transparent disabled size="$3">
            <AntDesign name="search1" style={{ fontSize: 18 }} />
          </Button>
          <DrawerToggleButton />
        </XStack>
      ),
      swipeEnabled: false,
    }}>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Nativshark',
        headerTitleAlign: 'left',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Tabs',
        drawerLabel: 'Tabs',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
        headerRight: () => (
          <Link href="/modal" asChild>
            <HeaderButton />
          </Link>
        ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
