import React,{useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    ActivityIndicator

} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../components/Context';


export function DrawerContent(props) { 
//      here I can't use const function it givs an error ,like 
//     const DrawerContent=(props)=>{ }; 
// export default DrawerContent;
    const [isLoading,setIsLoading]=React.useState(true);
 
    const{cancelCross}=React.useContext(AuthContext);
    const{signOut,toggleTheme}=React.useContext(AuthContext);


    const paperTheme =useTheme();
   
 
           
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
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop:15}}>
                        <Avatar.Image
                        source={{
                            uri:'https://yt3.ggpht.com/a/AGF-l78S1yiP9cq-4HWtdYydcUWeIwXOFCRLMz2REQ=s900-c-k-c0xffffffff-no-rj-mo'
                        }} 
                        size={50}
                        />
                        <View style={{
                            marginLeft:15,
                            flexDirection:'column'}}>
                            <Title style={styles.title}>Lakshit Paliwal</Title>
                            <Caption style={styles.caption}>@lakshit_0</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={styles.paragraph ,styles.caption}>51</Paragraph>
                            <Caption style={styles.caption}>following</Caption>              
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={styles.paragraph,styles.caption}>412</Paragraph>
                            <Caption style={styles.caption}>followers</Caption>              
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.bottomDrawerSection}>
                     <DrawerItem 
                        icon={({color,size})=>(
                            <Icon 
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('HomeTab')}}
                    />
                    <DrawerItem 
                        icon={({color,size})=>(
                            <Icon 
                                name="account"
                                color={color}
                                size={size}
                            />
                     )}
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}
                    />

                    <DrawerItem 
                        icon={({color,size})=>(
                            <Icon 
                                name="help-rhombus-outline"
                                color={color}
                                size={size}
                            />
                     )}
                    label="Help"
                    onPress={() => {props.navigation.navigate('Help')}}
                    />
                    <DrawerItem 
                        icon={({color,size})=>(
                            <Icon 
                                name="cogs"
                                color={color}
                                size={size}
                            />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Settings')}}
                    />
                    <DrawerItem 
                        icon={({color,size})=>(
                            <Icon 
                                name="face-agent"
                                color={color}
                                size={size}
                            />
                    )}
                    label="ContactUs"
                    onPress={() => {props.navigation.navigate('ContactUs')}}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preference">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark} />
                            </View>
                        </View>
                    </TouchableRipple>

                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                icon={({color,size})=>(
                    <Icon 
                    name="exit-to-app"
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Up"
                onPress={()=>{signOut()}}
            />
        </Drawer.Section>
    </View>
  );
}



const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });