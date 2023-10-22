import React from "react";
import { StyleSheet,Image,Text, View, TextInput } from 'react-native';
import loginImage from '../assets/circle.png'
import passImage from '../assets/padlock.png'


export default function App2a() {
    return (
        <View style= {style.container}>
            <View style={style.div1}>
                <text style={{fontSize:25,fontWeight:'bold'}}>LOGIN</text>
            </View>
            <View style={style.div2}>
                <Image style={{width:30, height:30}} source={loginImage}/>
                <input type="email"></input>
            </View >

            <View style={style.div3}>
                
            </View>
            <View style={style.div4}>
                
            </View>
        </View>
    );

}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FBCB00',
        width:360,
        height:640,
        padding:30
    },
    div1:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
    div2:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    div3:{
        flex: 1,
       
    },
    div4:{
        flex: 1,
        
    },
})