import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View} from 'react-native';
  import YoutubePlayer from 'react-native-youtube-iframe';
  
export default class Video extends React.Component
{
  render()
  {
    return(
      
       <View style={{flex:1,justifyContent:'center',alignContent:'center',padding:10}}>
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <YoutubePlayer
                height={200}
                play={false}
                videoId={this.props.videoId} style={[style.youtubetext,{height:"100%"}]}/>
          {/* <Text style={[style.youtubetext,{height:300}] }>YouTube</Text> */}
        </View>
         
       <View style={style.tabstyle}>
       <Image style={[style.iconstyle,{borderRadius:15}]} source={require("./img/persons/1.png")}/>
         <View style={{flex:1,justifyContent:"space-between",}}>
         <Text style={[style.titletext,{textAlignVertical:'center',padding:5,}] }>{this.props.title}</Text>
         <View style={{flex:1,flexDirection:'row-reverse',padding:5,justifyContent:"space-between",}}>
         <Text style={[style.titletext ,{fontSize:10,color:"#a8a8a8"}] }>{this.props.user}</Text>
         <Text style={[style.titletext ,{fontSize:10,color:"#a8a8a8"}]}>{this.props.view}</Text>
         <Text style={[style.titletext ,{fontSize:10,color:"#a8a8a8"}]}>{this.props.time}</Text>
         </View>
         </View>
         <Image style={[style.iconstyle,{width: 20,height:20}]} source={require('./img/icon/dots.png')}/>
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
    }
    ,
    titletext:
    {
      flex:1,
      color:"#575757",
      fontSize:15,
      // fontWeight:'800',

    },
  }
);