import React from 'react';
import { View,StyleSheet,SafeAreaView} from 'react-native';
import {  Avatar,Caption,Title,Text,TouchableRipple,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';


const ProfileScreen=({navigation})=> {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image 
          source={{
            uri:'https://i7.pngguru.com/preview/305/877/239/oggy-cartoon-network-drawing-television-talking-tom-and-friends.jpg'
          }}
          size={80}
          />
            <View style={{marginLeft:20}}>
              <Title  style={styles.title,{marginTop:16,marginBottom:6}}>Lakshit Paliwal</Title>
              <Caption  style={styles.caption}>@Lakshit_0</Caption> 
            </View>
        </View>
      </View>


      <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name='map-marker-radius' color='#777777' size={25}/>
            <Text style={{color:'#777777',marginLeft:25}}>rajasthan IN </Text>
          </View>
          <View style={styles.row}>
            <Icon name='phone' color='#777777' size={25}/>
            <Text style={{color:'#777777',marginLeft:25}}>+91-9462628513</Text>
          </View>
          <View style={styles.row}>
            <Icon name='email' color='#777777' size={25}/>
            <Text style={{color:'#777777',marginLeft:25}}>lakshitpaliwal27@gmail.com</Text>
          </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox,{
          borderRightColor:'#dddddd',
          borderRightWidth:1
        }]}>
          <Title>Rs 500</Title>
          <Caption>Wallet Money</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>4</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
<ScrollView>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='heart-outline' color='#FF6347' size={25}/>            
            <Text style={styles.menuItemText}> your Favourite </Text>
          </View>
        </TouchableRipple>
        
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='bank' color='#FF6347' size={25}/>            
            <Text style={styles.menuItemText}> Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='bank' color='#FF6347' size={25}/>            
            <Text style={styles.menuItemText}> Payment</Text>
          </View>
        </TouchableRipple><TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='bank' color='#FF6347' size={25}/>            
            <Text style={styles.menuItemText}> Payment</Text>
          </View>
        </TouchableRipple>
        
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='share-outline' color='#FF6347' size={25}/>            
            <Text style={styles.menuItemText}> Tell to your friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='settings-outline' color='#FF6347' size={25}/>            
            <Text style={styles.menuItemText}> setting </Text>
          </View>
        </TouchableRipple>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
} 
export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection:{
      paddingHorizontal:30 ,
      marginBottom:25,
      marginTop:25,
    },
    
    title:{
      fontSize:14,
      fontWeight:'bold'
    },
    caption:{
      fontSize:14,
      lineHeight:14,
      fontWeight:'500'
    },
    row:{
      flexDirection:'row',
      marginBottom:10
    },
    infoBoxWrapper:{
      borderBottomColor:'#dddddd',
      borderBottomWidth:1,
      borderTopColor:'#dddddd',
      borderTopWidth:1,
      flexDirection:'row',
      height:100
    },
    infoBox:{
      width:'50%',
      alignItems:'center',
      justifyContent:'center'
    },
    menuWrapper:{
      marginTop:10,

    },
    menuItem:{
      flexDirection:'row',
      paddingVertical:15,
      paddingHorizontal:30
    },
    menuItemText:{
      color:'#777777',
      marginLeft:20,
      fontWeight:'600',
      fontSize:16,
      lineHeight:26
    }

    
  });

