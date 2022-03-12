import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View} from 'react-native';

export default class Footer extends React.Component
{
  render()
  {
    return(
        
       <View style={style.tabstyle}>
          <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
           <Image style={style.iconstyle} source={require("./img/icon/folder.png")}/>
           <Text>Library</Text>
           </View>

           <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
           <Image style={style.iconstyle} source={require("./img/icon/notification.png")}/>
           <Text>Activity</Text>
           </View>

           <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
           <Image style={style.iconstyle} source={require("./img/icon/subscription.png")}/>
           <Text>Subscriptions</Text>
           </View>

           <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
           <Image style={style.iconstyle} source={require("./img/icon/trending-topic.png")}/>
           <Text>Trending</Text>
           </View>

           <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
           <Image style={style.iconstyle} source={require("./img/icon/home.png")}/>
           <Text>Home</Text>
           </View>

         </View>
       
      );
  }
}
const style =StyleSheet.create(
  {
    iconstyle:{
      width:30,
      height:30,
      // marginHorizontal:10,
    },
    tabstyle:
    {
      flex:0.1,
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
      borderTopColor:"#e6e6e6",
      borderTopWidth:2,
    },
    icontext:
    {
      textAlign:'center',
    }
  }
);