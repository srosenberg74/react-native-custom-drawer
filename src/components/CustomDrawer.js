import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../../assets/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../../assets/user-profile.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            John Doe
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                marginRight: 5,
              }}
            >
              280 coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex:1, backgroundColor: "#fff", paddingTop: 10}}>
        <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: "#ccc"}}>
        <TouchableOpacity
        onPress={()=>{
          
        }}
        style={{
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
        }}>
          <Ionicon
          name="share-social-outline"
          size={22} 
          />
        <Text style={{fontSize: 15, marginLeft: 5}}>Tell a Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          
        }}
        style={{
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
        }}>
          <Ionicon
          name="exit-outline"
          size={22} 
          />
        <Text style={{fontSize: 15, marginLeft: 5}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
