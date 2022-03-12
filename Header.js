import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View} from 'react-native';

export default class Header extends React.Component
{
  render()
  {
    return(
       <View style={style.tabstyle}>
         <View style={{flex:1,flexDirection:'row-reverse',padding:15,justifyContent:"flex-start",}}>
         <Image style={[style.iconstyle,{marginHorizontal:0,}]} source={require("./img/youtube.png")}/>
         <Text style={style.youtubetext }>YouTube</Text>
         </View>
         <View style={{flex:1,flexDirection:'row',padding:15,justifyContent:"flex-start"}}>
           <Image style={[style.iconstyle,{borderRadius:15}]} source={require("./img/persons/1.png")}/>
           <Image style={style.iconstyle} source={require('./img/icon/search.png')}/>
           <Image style={style.iconstyle} source={require('./img/icon/video-camera.png')}/>
         
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
      marginHorizontal:10,
    },
    tabstyle:
    {
      flex:0.1,
      flexDirection:"row-reverse",
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:"#ffffff",
      borderBottomColor:"#e6e6e6",
      borderBottomWidth:2,
    }
    ,
    youtubetext:
    {
      flex:1,
      color:"#242424",
      fontSize:25,
      fontWeight:'800',

    },
  }
);