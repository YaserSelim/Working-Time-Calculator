import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,TouchableOpacity,Text,TextInput, TabBarIOS } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead:[['Head']],
      widthArr: [100],
      numRows:1,
      numColumns:1
    }
this.addRow=this.addRow.bind(this);
this.addColumn = this.addColumn.bind(this);
  }
  addColumn(){
    const tb = this.state.tableHead;
    const numColumns = this.state.numColumns+1;
    const numRows = this.state.numRows;
    const widArr = this.state.widthArr;
    widArr.push(100);

    for (let i = 0; i<tb.length; i++){
      tb[i].push(<TextInput></TextInput>);


    }
    this.setState({tableHead:tb,widthArr:widArr,numColumns:numColumns});

  }
  addRow(){

    const tb = this.state.tableHead;
    const numColumns = this.state.numColumns;
    const arr = [];
    const numRo= this.state.numRows+1;
    let bol = true;
    for (let i =0; i<numColumns; i++){
      arr.push(<TextInput autoFocus={bol}></TextInput>);
      bol = false;
    }
    tb.push(arr);
    this.setState({tableHead:tb,numRows:numRo});

  }

  render() {
    const state = this.state;

    
 
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} vertical ={true}>
          <View>
            <View style= {{flexDirection:'row'}}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}} >
           
                {
                
                   

                  state.tableHead.map((rowData, index) => {
                    let stl ;
                    console.log("index "+index);
                    if (index == 0) {
                      stl = styles.header;
                    }
                    else{
                      stl = styles.row;
                    }
                    return(

                    <Row
                      key={index}
                      data={rowData}
                      style={[stl, {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />)
                  })
                }
              

            </Table>
            <TouchableOpacity style={styles.btn2} onPress = {this.addColumn}>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn1} onPress = {this.addRow}>
              </TouchableOpacity>

          </View>

          
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  btn:{height: 40, width:70,backgroundColor:'blue',alignItems: 'center',justifyContent: 'center'},
  btn1:{height: 4, width:80,backgroundColor:'green',alignItems: 'center',justifyContent: 'center'},
  btn2:{height:80,width :4,backgroundColor:'red'}

});