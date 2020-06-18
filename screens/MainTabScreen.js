import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExplorScreen from './ExplorScreen';
import ProfileScreen from './ProfileScreen';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen=()=>{
    return(
        <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
       <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor:'#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExplorScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="send" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
};

export default MainTabScreen;

const HomeStackScreen=({navigation})=>{
    return(
     <HomeStack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:'#009387',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
            fontWeight:'bold'
            }
        }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Overview',
            headerLeft:()=>(
              <Icon.Button name='navicon' size={30}
                backgroundColor='#009387'
                onPress={ () => navigation.openDrawer()} 
              ></Icon.Button>
              )
          }}
          />
        </HomeStack.Navigator>
  
    )};


const DetailsStackScreen=({navigation})=>{
   return(

   <DetailsStack.Navigator screenOptions={{
           headerStyle:{
             backgroundColor:'#694fad',
           },
           headerTintColor:'#fff',
           headerTitleStyle:{
             fontWeight:'bold'
           }
       }}>
         
         <DetailsStack.Screen name="Details" component={DetailsScreen} 
         options={{
          headerLeft:()=>(
            <Icon.Button name='navicon' size={30}
              backgroundColor='#694fad'
              onPress={() => navigation.openDrawer()}          
              ></Icon.Button>
            )
         }} />
     </DetailsStack.Navigator>
   )};

