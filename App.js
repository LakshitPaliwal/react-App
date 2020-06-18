import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { View } from 'react-native';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { ActivityIndicator } from 'react-native-paper';
import { 
  Provider as PaperProvider ,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
  } from 'react-native-paper';

import {DrawerContent} from './screens/DrawerContent';
import DetailsScreen from './screens/DetailsScreen';
import MainTabScreen from './screens/MainTabScreen';
import ContactUs from './screens/ContactUs';
import Settings from './screens/Settings';
import Help from './screens/Help';
import RootStackScreen from './screens/RootStackScreen';
import {AuthContext} from './components/Context';



const Drawer=createDrawerNavigator();

const App=()=>{
  
const [isLoading,setIsLoading]=React.useState(true);
const [userToken,setUserToken]=React.useState(null);

const [isDarkTheme,setIsDarkTheme]=React.useState(false);


const CustomDefaultTheme={
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors:{
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background:'#ffffff',
    text:'#333333'
  }
}

const CustomDarkTheme={
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors:{
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background:'#333333',
    text:'#ffffff'
  }
}

const theme=isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
//if isDarkTheme is  true to CustomDarkTheme them switch to dark mode otherwise set to CustomDefaultTheme


const authContext=React.useMemo(()=>
({
  cancelCross:()=>{
    setUserToken('asaas');
    setIsLoading(false);
  },
    signIn:()=>{
      setUserToken('aaaa');
      setIsLoading(false);
    },
    signOut:()=>{
      setUserToken(null);
      setIsLoading(false);
    },
    signUp:()=>{
      setUserToken('aaaa');
      setIsLoading(false);
    },
    toggleTheme:()=>{
      setIsDarkTheme(isdarkTheme=> !isdarkTheme);
    }
})
,[])
// in useMemo i pass an empty array ,[]  in last line to pass doesn't run  every time , we render the screen


useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false)
  },1000)
},[]);

if(isLoading){
  return(
  <View style={{flex:1,justifyContent:"center",alignItems:"center"}} >
          <ActivityIndicator  size="large"/>
  </View>
  );
}


  return(
      <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer  theme={theme}>
            {userToken != null?(
              <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                <Drawer.Screen name="Help" component={Help} />
                <Drawer.Screen name="ContactUs" component={ContactUs} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
            )
            :
               <RootStackScreen  />
          }
            
        </NavigationContainer>
        </AuthContext.Provider>
        </PaperProvider>

  )
}
export default App;
 