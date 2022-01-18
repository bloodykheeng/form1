import React,{useState} from "react";
import {StyleSheet, Text, View, Platform,TouchableWithoutFeedback, 
Modal,Button,FlatList ,TouchableOpacity} from "react-native";

import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";


function AppPicker({icon ,items, placeholder}){
	const categories =[
{label:"furniture",value:1,},
{label:"clothing",value:2,},
{label:"cameras",value:3,},
];

const [modalvisible, setmodalvisible] = useState(false);
return(
	<>
	<TouchableWithoutFeedback onPress={()=>setmodalvisible(true)}>
	<View style={styles.container}>
	{icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20}/>}
	<Text style={styles.text}>{placeholder}</Text>
	<MaterialCommunityIcons  name="chevron-down" size={20}/>
	</View>
	</TouchableWithoutFeedback>

	<Modal visible={modalvisible} animationType="slide">
	<>
	<Button title="closeeeed" onPress={()=> setmodalvisible(false)}/>
	
	<FlatList 
	data={categories}
	
	renderItem={({item})=>(
	<TouchableOpacity onPress={(item)=>console.log(item.value)}>
	<Text>{item.label} </Text>
	</TouchableOpacity>
		)
	}
	keyExtractor ={(item,index)=>item.value}
	/>
	</>
	</Modal>
	</>
)
}
export default AppPicker;
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
	},text:{
		flex:1,
	},
})