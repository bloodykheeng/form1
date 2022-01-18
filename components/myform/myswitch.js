import React,{useState} from "react";
import {View, Text, StyleSheet, Switch} from "react-native";

function MySwitch(){
const[isNew, setIsNew] = useState(false);
return(
<Switch value={isNew} onValueChange={newvalue =>{setIsNew(newvalue)}}/>
);
}
export default MySwitch;