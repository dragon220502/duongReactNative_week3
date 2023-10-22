import React from "react";
import {StyleSheet,
    Image,
    Text,
    View
} from "react-native";
import anh1 from '../assets/circle.png'
export default function App1a(props){
    return (
    <View style = {style.container}>
       <View style ={style.herder} >
            <View style = {style.herder1}>
               <Image style ={style.logo} source={anh1}/>
            </View>
            <View style = {style.herder2}>
            <text style={{fontSize:25, fontWeight:"bold"}} >GROW </text>
                <text style={{fontSize:25, fontWeight:"bold"}} >YOUR BUSINESS</text>
            </View>
       </View>
       <View style={style.body}>
            <View style ={style.body1}>
                <Text style={{fontSize:15, fontWeight:"bold"}}>We will help you to grow your business using </Text>
                <Text style={{fontSize:15, fontWeight:"bold"}}>online server</Text>
            </View>
            <View style ={style.body2}>
                <button style={{width:125,height:45, backgroundColor:'#E3C000',fontSize: 18,fontWeight:'bold'}}>LOGIN</button>
                <button style={{width:125,height:45, backgroundColor:'#E3C000',fontSize: 18,fontWeight:'bold'}}>SIGN UP</button>
            </View>
            <View style ={style.body3}>
            <Text style={{fontSize:18, fontWeight:"bold"}}>HOW WE WORK? </Text>
            </View>

       </View>
    </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#C7F4F6',
        width:360,
        height:640,
    },
    herder:{
        flex:1,
    },
    herder1:{
        flex:2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    herder2:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 142,
        height:142,
    },
    body:{
        flex:1,
    },
    body1:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body2:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    body3:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});