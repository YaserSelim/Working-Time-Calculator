import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, View, Text,TextInput ,ScrollView,ImageBackground, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Table, Row } from 'react-native-table-component';

import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';
  import { List, ListItem } from 'react-native-elements'



export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            isDialogVisible: false,
            job:"",
            jobs:[]
        };
        


    }
    
  render() { 
    return (
      <ImageBackground  source={require('../assets/background.png')} style={styles.background}
>
      <View style={styles.container}>
          <Dialog
          onDismiss={() => {
            this.setState({ isDialogVisible: false });
          }}
          width={0.9}
          visible={this.state.isDialogVisible}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Job Name"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {
                  this.setState({ isDialogVisible: false });
                }}
                key="button-1"
              />
              <DialogButton
                text="OK"
                bordered
                onPress={() => {
                  job=this.state.job;
                  jobs = this.state.jobs;
                  if (jobs.includes(job)){
                    console.log("hrrrr");

                  }
                  else{
                    console.log("bara");
                    jobs.push(job);
                  }

                  this.setState({ 
                    jobs:jobs,
                    isDialogVisible: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <TextInput autoFocus={true} onChangeText={(jb)=>{this.setState({job:jb})}}></TextInput>
          </DialogContent>
        </Dialog>
        <View style={{flex:5}}>
        <ScrollView  >
        <ScrollView horizontal={true}>
          <View>
          <Table borderStyle={{borderWidth: 0}}>
           
           {
           
              

             this.state.jobs.map((job, index) => {
               const j=[job];
               
               return(

               <Row
                 key={index}
                 data={j}
                 textStyle={styles.jobstxt}
                 widthArr={[500]}
                 backgroundColor='green'

                 

               />)
             })
           }
         

       </Table>

  </View>

          </ScrollView>
          </ScrollView>


            
        </View>
        <View style={{flex:5,alignItems:'center',justifyContent:'flex-end'}}>
       
        

           <TouchableOpacity style = {styles.btn} onPress={()=>this.props.navigation.navigate('CheckIn')}>
            <Text style={styles.txt}>Check In</Text>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.btn} onPress={()=>this.props.navigation.navigate('ResponsiveTable')}>
            <Text style={styles.txt}>Remove Job</Text>
        </TouchableOpacity>

        </View>
        </View>
        </ImageBackground>


    )
  }
}
const styles = StyleSheet.create({
  background:{ width: '100%',height: '100%'},
    container:{flex:1,justifyContent:'center',flexDirection:'column'},

    btn: {alignItems:'center',justifyContent:'center'},
    txt:{backgroundColor: 'white',
      color: '#3A59FF',
      width: 300,
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '2%'},
    txt2:{
      color: 'white',
      width:"100%",
      textAlign: 'left',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '2%'


    },
    jobstxt:{
      textAlign: 'left', fontWeight: 'bold',fontSize:50,color:'white'

    }

});