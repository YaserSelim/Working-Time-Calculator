import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,TouchableOpacity,Text,TextInput, TabBarIOS } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import AwesomeButton from "react-native-really-awesome-button";


class TextAnput extends Component{
  constructor(props){
    super(props);
    this.state={
      childArr:props.Arr
    }
  }
  render(){
    const indx=this.props.Index;
    const arr = this.props.Arr;

 return(
   <TextInput autoFocus={this.props.autoFocus} multiline={true} height={this.state.childArr[indx]} onContentSizeChange={(event)=>{
    var h= event.nativeEvent.contentSize.height;
    if (h>arr[indx])
    {arr[indx]=h;
      this.setState({childArr:arr})
    this.props.action();

    }

   }}></TextInput>
 )}

}
 
export default class ExampleThree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead:[['Head']],
      widthArr: [60],
      heightArr:[40],
      numRows:1,
      numColumns:1,
      textArr:[]
    }
this.addRow=this.addRow.bind(this);
this.addColumn = this.addColumn.bind(this);
  }
  addColumn(){
    const tb = this.state.tableHead;
    const numColumns = this.state.numColumns+1;
    const numRows = this.state.numRows;
    const widArr = this.state.widthArr;
    const heightAr = this.state.heightArr;
    widArr.push(60);

    for (let i = 0; i<tb.length; i++){
      tb[i].push(<TextAnput Index ={i} autoFocus={false} Arr={heightAr} action={()=>{this.setState({heightArr:heightAr});this.forceUpdate();console.log("updated");}}></TextAnput>);


    }
    this.setState({tableHead:tb,widthArr:widArr,numColumns:numColumns});

  }
  addRow(){

    const tb = this.state.tableHead;
    const numColumns = this.state.numColumns;
    const arr = [];
    const numRo= this.state.numRows+1;
    const heightAr = this.state.heightArr;
    heightAr.push(30);
    let bol = true;
    for (let i =0; i<numColumns; i++){
      arr.push(<TextAnput Index ={heightAr.length-1} autoFocus={bol} Arr={heightAr} action={()=>{this.setState({heightArr:heightAr});this.forceUpdate();
    console.log("updates");
    }}></TextAnput>);
      bol = false;
    }
    tb.push(arr);
    this.setState({tableHead:tb,numRows:numRo,heightArr:heightAr});

  }

  render() {
    const state = this.state;


    
 
    return (
      <View style={styles.container}>
        <ScrollView>
        <ScrollView horizontal={true}>
          <View>
            <View style= {{flexDirection:'row'}}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}} >
           
                {
                
                   

                  state.tableHead.map((rowData, index) => {
                    let stl ;
                    let hei =  20;
                    if (index == 0) {
                      stl = styles.header;
                      hei = 300;
                    }
                    else{
                      stl = styles.row;
                    }
                    return(

                    <Row
                      key={index}
                      data={rowData}
                      style={[stl, index%2 && {backgroundColor: '#F7F6E7'}]}
                      widthArr={state.widthArr}
                      heigthArr = {state.widArr}
                      height = {state.heightArr[index]}

                      textStyle={styles.text}
                    />)
                  })
                }
              

            </Table>
            <TouchableOpacity style={styles.btn2} onPress = {this.addColumn}>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={[styles.btn1]} onPress = {this.addRow}>
              </TouchableOpacity>
  

          </View>

          
        </ScrollView>
        
        </ScrollView>
        <AwesomeButton width={64} height={30} style={styles.btn} borderColor='red' backgroundColor='#09F7EF' backgroundDarker='#0BBFB9'
       onPress={this.addRow}>
    <Text>Save</Text>
</AwesomeButton>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1,flexDirection:'column', padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { backgroundColor: '#15B792' },
  text: { textAlign: 'center', fontWeight: '100' },
  row: { backgroundColor: '#E7E6E1' },
  btn:{alignItems: 'center',justifyContent: 'center',   position: 'absolute',
  bottom:7,
  right:6},
  btn1:{height: 16,backgroundColor:'red',alignItems: 'center',justifyContent: 'center'},
  btn2:{width :16,backgroundColor:'red'}

});