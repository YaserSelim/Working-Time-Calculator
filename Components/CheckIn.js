import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';



export default class Check extends Component {
    constructor(props){
        super(props);
        this.state={
        }
      }
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.container2,{alignItems:'flex-end'}]}>
           <TouchableOpacity style = {[styles.btn,{backgroundColor:"#37BF0C"}] } onPress={()=>this.props.navigation.navigate('Break')}>
            <Text style={styles.txt}>Break</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container2}>

        <TouchableOpacity style = {styles.btn} onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={styles.txt}>Check out</Text>
        </TouchableOpacity>

        </View>
        </View>


    )
  }
}
const styles = StyleSheet.create({
    container:{flex:1,flexDirection:'row',backgroundColor:'#F1CDF8', alignItems:'center',justifyContent:'center'},
    container2:{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'},

    btn: {alignItems:'center',backgroundColor:'#D1310F',height:120,flex:.9, justifyContent: 'center',alignItems:'center',borderRadius: 25},
    txt:{fontSize:35,fontWeight: "bold" },

});