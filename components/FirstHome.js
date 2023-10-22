import React from "react";
import{StyleSheet, Image, View,Text, Button} from 'react-native'
import circle from '../assets/circle.png'

export default function FirstHome(){
    return(
        <View style ={style.container}>
            <View style={style.div1}>
                <Image style={{width:140, height:140}} source={circle}/>
            </View>
            <View style={style.div2}>
                <Text style={{fontSize:25, fontWeight: 'bold'}}>GROW </Text>
                <Text style={{fontSize:25, fontWeight: 'bold'}}>YOUR BUSINESS</Text>
            </View>
            <View style={style.div4}>
                <Text style={{fontSize:15, fontWeight: 'bold'}}>We will help you to grow your business using </Text>
                <Text style={{fontSize:15, fontWeight: 'bold'}}>online server</Text>

            </View>
            <View style={style.div3}>
                <button style={{height:48, width:119,backgroundColor:'#E3C000', fontSize:20, fontWeight:'bold'}}>LOGIN</button>
                <button style={{height:48, width:119,backgroundColor:'#E3C000', fontSize:20, fontWeight:'bold'}}>SIGN UP</button>
            </View>
            
        </View>
    );


}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00CCF9',
        width:360,
        height:640,
    },
    div1:{
        flex:2,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',

    },
    div2:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    div3:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
    },
    div4:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
});