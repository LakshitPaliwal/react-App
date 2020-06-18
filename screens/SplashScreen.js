import React from 'react';
import { TouchableOpacity,StatusBar,Dimensions,View,StyleSheet,Image} from 'react-native';
import {
    Button,
    Text,    
} from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

// import LinearGradient from 'react-native-linear-gradient'; 
// if use LinearGradient as in Ios or Android then follow this steps
// 1- Open terminal
// 2- Then run "cd ios"
// 3- Then run "pod install"
// and we have to add this in ../ios/Podfile and add this below line:- 
// pod 'BVLinearGradient', :path => '../node_modules/react-native-linear-gradient'
// and save the Podfile
// now it will Work
// Otherwise it'll give this error "linear gradient in react native view config not found fr name BVLinear gradient"
// but we wil work with Expo we don't need to do this.
// here we'll working with Expo then we need to Install ($ expo install expo-linear-gradient ) and add this library :-
import { LinearGradient } from 'expo-linear-gradient';
import SignInScreen from './SignInScreen';

const SplashScreen=({navigation})=> {
  return (
    <View style={styles.container}>
                {/* <StatusBar backgroundColor="#6495ed" /> */}
        <View style={styles.header}>
            <Animatable.Image
            animation="bounceIn"
            source={require('../assets/card2.jpg')}
            style={styles.logo}
            resizeMode="stretch"
            />

        </View>
        <Animatable.View animation="bounceInUp" style={styles.footer}>
            <Text style={styles.title}>Stay Home and Stay safe</Text>
            <Text style={styles.text}>please Sign IN </Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <Animatable.View animation="bounceInLeft"> 
                    <LinearGradient 
                        colors={['#6495ed','lightblue']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Chalu Kr </Text>
                            <MaterialIcons
                                name='navigate-next'
                                size={30}
                                color='#ffffff'
                            />
                    </LinearGradient>
                </Animatable.View>
                </TouchableOpacity>
            </View>

        </Animatable.View>

    </View>
  );
}
export default SplashScreen;



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor:'#6495ed'
      
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 60,
        paddingVertical: 50,
        paddingHorizontal: 30,
        marginBottom:50,
        borderBottomLeftRadius :100,       
        borderBottomRightRadius:100       
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderTopLeftRadius: 50,
        borderBottomRightRadius:100       
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
        
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });