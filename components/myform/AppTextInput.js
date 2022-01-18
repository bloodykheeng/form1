import React from "react";
import {View, StyleSheet,Text,TextInput, Platform} from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput ({icon,style, ...otherProps}){

return(<View style={styles.container}>

{icon && <MaterialCommunityIcons name={icon} size={40} style={styles.icon} />}
<TextInput 

style={styles.textinput,style}
{...otherProps}
/>
</View>);
}

export default AppTextInput;
const styles = StyleSheet.create({
	container:{
		backgroundColor:colors.light,
		borderRadius:25,
		flexDirection:"row",
		width:"50%",
		padding:15, 
		marginVertical:10},
	textinput:{
		color:colors.dark,
		fontSize:18,
		fontFamily:Platform.OS ==="android" ? "roboto" : "avenir"
	},
	icon:{
	marginRight:10
	},
});