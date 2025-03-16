import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Icons } from './src/Assets/Components/icons';


import MemberLoginScreen from "./src/screens/MemberLoginScreen";
import MemberDashboardScreen from "./src/screens/MemberDashboardScreen";
import MemberEventsScreen from "./src/screens/MemberEventsScreen";
import MemberPaymentScreen from "./src/screens/MemberPaymentsScreen";
import MemberNewsScreen from "./src/screens/MemberNewsScreen";
import MemberFAQScreen from "./src/screens/MemberFAQScreen";
import MemberProfileScreen from './src/screens/MemberProfileScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#6200ee',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -5,
        },

        drawerStyle: {
          backgroundColor: '#f0f0f0',
          width: 200,
        },
      }}
    >
      <Drawer.Screen name="Home" 
        component={MemberDashboardScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => (
            <Icons.home/>
          ),
        }}
      />

      <Drawer.Screen 
          name="Profile" 
          component={MemberProfileScreen}
          options={{
            drawerLabel: 'Profile',
            drawerIcon: () => (
              <Icons.user/>
            ),
          }}
      />

      <Drawer.Screen 
          name="Events" 
          component={MemberEventsScreen}
          options={{
            drawerLabel: 'Events',
            drawerIcon: () => (
              <Icons.events/>
            ),
          }}
      />

      <Drawer.Screen 
          name="Payments" 
          component={MemberPaymentScreen}
          options={{
            drawerLabel: 'Payments',
            drawerIcon: () => (
              <Icons.payment/>
            ),
          }} 
      />

      <Drawer.Screen 
          name="News" 
          component={MemberNewsScreen}
          options={{
            drawerLabel: 'News',
            drawerIcon: () => (
              <Icons.news/>
            ),
          }} 
      />

      <Drawer.Screen 
          name="FAQ" 
          component={MemberFAQScreen}
          options={{
            drawerLabel: 'Info and FAQs',
            drawerIcon: () => (
              <Icons.faqs/>
            ),
          }}
      />
    </Drawer.Navigator>
  );
};


const App = () => {
  return (
    <SafeAreaProvider
      style={{
        flexGrow: 1,
      }}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MemberLoginScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="MemberLoginScreen" component={MemberLoginScreen} />
            <Stack.Screen name="MemberDashboardScreen" component={MemberDashboardScreen} />
            <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
          </Stack.Navigator>
          
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
