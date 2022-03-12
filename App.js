import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,ScrollView} from 'react-native';
  import Header from './Header';
  import Footer from './Footer';
import Video from './Video';
export default class App extends React.Component
{
  state={
    videos:[
      {
        id:0,
        title:"ReactNatie App",
        user:"Ahmed Elrouby",
        view:"120 K view",
        time:"12:30 hours ago",
        numMessag:3,
        image:require("./img/persons/1.png"),
        videoId:"0-S5a0eXPoc"
      },
      {
        id:1,
        title:"App ",
        user:"sayrd adel",
        view:"120 K view",
        time:"12:30 hours ago",
        numMessag:3,
        image:require("./img/persons/1.png"),
        videoId:"0-BfZvXx_W-sc"
      },
      {
        id:2,
        title:"Flutter App",
        user:"Ali Mohamed",
        view:"120 K view",
        time:"12:30 hours ago",
        numMessag:3,
        image:require("./img/persons/1.png"),
        videoId:"g-0B_Vfc9qM"
      },
    ]
  }
  render()
  {
    return(
     <View style={{flex:1}}>
       <Header/>
       <ScrollView style={{flex:1}}>
        
       {
          this.state.videos.map((item,index)=>(
            <Video title={item.title } user={item.user } view={item.view } time={item.time } videoId={item.videoId}/>
            // <View style={style.container}>
            // <Image style={style.image} source={item.image}/>
            // <View style={{flex:1 ,flexDirection:'column',height:60,}}>
            // <Text style={style.name}>{item.name}</Text>
            // <Text style={style.message}>{item.message}</Text>
            // </View>
            // <View style={{flex:0.5 ,flexDirection:'column-reverse',flexWrap:"wrap",height:60,}}>
            // <Text style={style.notify}>{(!item.numMessag)?"":item.numMessag}</Text>
            // <Text style={{flex:0.35,color:"#62c568"}}>{item.time}</Text>
            // </View>
            
      
            // </View>
            ))
       }
     </ScrollView>
     <Footer/>
     </View> 
     
      );
  }
}
const style =StyleSheet.create(
  {
    container:
    {
      padding:15,
      flex:1,
      alignItems:'center',
      flexDirection:'row-reverse',
      justifyContent:"space-around",
      backgroundColor:"#ffffff",
      borderBottomColor:"#112211",
      borderBottomWidth:0.5,
      fontSize:30
    },
    notify:
    {
      flex:.5,
      width:30,
      height:30,
      backgroundColor:"#62c568",
      borderRadius:15,
      textAlign:'center',
      lineHeight:30,
      color:"white"
    },
    image:
    {
      flex:.3,
      width:60,
      height:60,
      borderRadius:30,
    },
    iconstyle:{
      width:25,
      height:25,
      marginHorizontal:10,
    }
    ,
    name:{
      flex:1,
      marginHorizontal:5,
      fontSize:17,
      fontWeight:'600',
      color:"#121213",
    },
    message:{
      flex:1,
      fontSize:10,
      fontWeight:'300',
      color:"#737476",
    },
    tabstyle:
    {
      color:"#9eacad",
      width:90,
      textAlign:'center',
    },
    whatstext:
    {
      color:"white",
      padding:10,
      fontSize:20,
      fontWeight:'800'

    }
    ,
    container2:
    {
      flex:1,
      justifyContent: 'center',
      alignItems: "center"
    },
    
    btn:
    {
      backgroundColor:"#ffcc12",
      padding:10,
      width:80,
      height:40,
      borderRadius:5
    },
    bg:
    {
      flex:1,
      justifyContent: 'center',
      alignItems: "center"
    },
    logo:
    {
      width:500,
      height:200
    }
  }
);