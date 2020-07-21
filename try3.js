import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialIcons'



import * as SQLite from 'expo-sqlite';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['ID', 'Name', 'Mo', 'Di-Do', 'Fr-Sa'],
      DataTable: [
        ['1', 'Frühlingsbrot', '3', '4', '5'],
        ['2', 'Bauernbrottrestrbnohkegfrahlbbezhus', 'c', 'd', 'e'],
        ['3', '2', '3', '4', '5'],
        ['4', 'b', 'c', 'd', 'e'],
        ['5', '2', '3', '4', '5']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialIcons'



import * as SQLite from 'expo-sqlite';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['ID', 'Name', 'Mo', 'Di-Do', 'Fr-Sa'],
      DataTable: [
        ['1', 'Frühlingsbrot', '3', '4', '5'],
        ['2', 'Bauernbrottrestrbnohkegfrahlbbezhus', 'c', 'd', 'e'],
        ['3', '2', '3', '4', '5'],
        ['4', 'b', 'c', 'd', 'e'],
        ['5', '2', '3', '4', '5']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});
