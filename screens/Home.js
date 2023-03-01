import { StyleSheet, Text, View,
  TouchableOpacity,Image, ImageBackground, BackHandler,
  Linking} from 'react-native';
import React,{Component,Fragment} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileTab from './ProfileTab';
import HomeTab from './HomeTab';

const Home = () => {
    const Tab = createBottomTabNavigator();

    function HomeScreen() {
        return (
          //Home screen code
          <HomeTab/>

        );
      }
      
      function Wallet() {
        return (
          //wallet screen code
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Wallet!</Text>
          </View>
        );
      }

      function Profile() {
        return (
          //profile screen code
          //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //<Text>Profile!</Text>
          //</View>
          <ProfileTab/ >
        );
      }
      
  return (
    
      <Tab.Navigator>
        <Tab.Screen 
        name= "Home"
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen 
        name="Wallet" 
        component={Wallet} 
        options={{
        tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
          }}/>  
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
              ),
            }}/>
      
      </Tab.Navigator>
    
  )
}

export default Home;

//const styles = StyleSheet.create({
  
//});