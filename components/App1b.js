import React from "react";
import {StyleSheet, Image, Text, View, TextInput} from 'react-native';
import padlock from '../assets/padlock.png'

export default function App1b(){
    return(
        <View style={style.container}>
            <View style = {style.div1}>
                <Image style={{width:105,height:117}} source={padlock}/>
            </View>
            <View style = {style.div2}>
                <text style={{fontSize:25,fontWeight:'bold'}}>FORGET</text>
                <text style={{fontSize:25,fontWeight:'bold'}}>PASSWORD</text>
            </View>
            <View style = {style.div4}>
                <text style={{fontSize:15,fontWeight:'bold'}}>Provide your account’s email for which you </text>
                <text style={{fontSize:15,fontWeight:'bold'}}>want to reset your password</text>

            </View>
            <View style = {style.div3}>
                <Text>Email </Text>
                <input type="email" />
            </View>
            
            <View style = {style.div5}>
                <button style={{width:305,height:45, fontSize:25,fontWeight:'bold', backgroundColor:'#E3C000'}}>NEXT</button>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D1F4F6',
        width: 360,
        height:640,
    },
    div1:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    div2:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    div3:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start',
        
        marginTop:40,
        marginRight:20,
        marginLeft:20,
    },
    div4:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    div5:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
})