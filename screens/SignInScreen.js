import React,{useEffect} from 'react';
import {Button,StatusBar,TextInput,TouchableOpacity,Dimensions,View,StyleSheet,Image, TouchableOpacityBase} from 'react-native';
import {Text} from 'react-native-paper';
// import SplashCancel from './SplashCancel';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native-paper';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import {AuthContext} from '../components/Context';

const SignInScreen=({navigation})=> {
    const [isLoading,setIsLoading]=React.useState(true);

    const [data,setData] = React.useState({
        email: '',
        password: '',
        secureTextEntry: true,
        emailTextInput: false,
        passwordTextInput:false
    });

    const{cancelCross}=React.useContext(AuthContext);

     const{signIn}=React.useContext(AuthContext);

     
  const textInputChange=(value1)=>{
      if(value1.length != 0){
          setData({
                            // here we are doing array destructuring operator  to get excisting state
            ...data,   
            email:value1,
            emailTextInput:true
          })          
      } else{
        setData({
            ...data,
            email:value1,
            emailTextInput:false
          }) 
      }
  }

  const HandlePassword=(value1)=>{
    if(value1.length != 0){
        setData({
          ...data,   
          email:value1,
          passwordTextInput:true
        })          
    } else{
      setData({
          ...data,
          email:value1,
          passwordTextInput:false
        }) 
    }
}

    const updatePasswordText=()=>{
        setData({
            ...data,
            passwordTextInput:false,
            passwordTextInput:!data.passwordTextInput
            //it will be opposite value , it means  when it wll be false then it wll be true and when it wll be true then it wll be false
        })
    }

           
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
    <View style={styles.container}>
        {/* <StatusBar backgroundColor="yellow" barStyle="dark-content" /> */}
        <Animatable.View animation="bounceInDown" style={styles.header}>
        <Text style={styles.text_header}>All Sounds </Text>
        <Text style={styles.text_footer}>Welcome ! </Text>
            <Animatable.View  animation="bounceIn">
                    <TouchableOpacity  
                      onPress={()=>{cancelCross()}}>
                        <Feather 
                        name='x'
                        color='black'
                        size={20}
                        />
                    </TouchableOpacity>
            </Animatable.View>        
    
        {/* <SplashCancel/> */}
        </Animatable.View>
        <Animatable.View  animation="bounceInUp" style={styles.footer}>
        <Text style={styles.text_footer}>email </Text>
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    color='blue'
                    size={25}
                />
                <TextInput
                    placeholder='Enter your Email'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(value1)=>textInputChange(value1)}
                />
                {data.emailTextInput?   
                                    // checking data by eye icon,if its true
                    <Animatable.View  animation="bounceIn">
                        <Feather 
                        name='check-circle'
                        color='darkgreen'
                        size={20}
                        />
                    </Animatable.View>
                 :null}   
                                     {/* other it give null */} 
               
            </View> 
            <Text style={[styles.text_footer ,{marginTop:30}]}>password </Text>
            <View style={styles.action}>
            <Feather
                name='lock'
                color='blue'
                size={25}
                />
                <TextInput
                    placeholder='Enter your password'
                    style={styles.textInput}
                    autoCapitalize='none'
                    secureTextEntry={data.passwordTextInput ? true:false}
                    //passwordTextInput  is true then it will be true otherwise it will be false
                    onChangeText={(value1)=>HandlePassword(value1)}

                />
            
           
            <TouchableOpacity
                onPress={updatePasswordText}
             >
                {data.passwordTextInput ?
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={25}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={25}
                        />
                }
                </TouchableOpacity>
            </View>  
             
            <Animatable.View animation="zoomIn" style={styles.button}>
                 <TouchableOpacity onPress={()=>{signIn()}}>
                    <LinearGradient 
                        colors={['yellow','blue']}
                        style={styles.signIn}
                    >
                        <Text style={ [ styles.textSign ,{color:'#ffffff'} ] }>
                            Sign In 
                        </Text>
                    </LinearGradient>
                 </TouchableOpacity>
            </Animatable.View>

            <TouchableOpacity
                onPress={()=>navigation.navigate('SignUpScreen')}
                style={[
                    styles.signIn, {
                    borderColor:'yellow',
                    borderWidth:1,
                    marginTop:20,
                    backgroundColor:'red'
                }]}
            >
                <Text>
                    Sign Up
                </Text>
            </TouchableOpacity>

        </Animatable.View>

    </View>
  );
}
export default SignInScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffee58'
  },
  footer: {
    flex: 3,
    backgroundColor: '#4db6ac',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  
  text_header: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});

