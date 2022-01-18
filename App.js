import React,{useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput } from 'react-native';

import AppTextInput from "./components/myform/AppTextInput";
import MySwitch from "./components/myform/myswitch";
import AppPicker from "./components/myform/AppPicker";

const categories =[
{label:"furniture",value:1,},
{label:"clothing",value:2,},
{label:"cameras",value:3,},

];

export default function App() {
    const [firstname,setfirstname] = useState('');
  
    return (
    <View style={styles.container}>
    <AppTextInput icon="camera" 
    placeholder="email"
    style={{
          borderBottomColor:"#ccc",
          borderBottomWidth:1
      }}

    />
    <MySwitch />
     <AppPicker items={categories} icon="apps" placeholder="category" />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
