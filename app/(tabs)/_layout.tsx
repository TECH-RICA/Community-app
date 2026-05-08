import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Dimensions, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 16,
          right: 16,
          elevation: 0,
          backgroundColor: "#0284C7",
          marginHorizontal: 10,
          paddingHorizontal: 10,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{ alignItems: "center", paddingTop: 10, width: width / 5 }}
            >
              <Ionicons name="home" color={color} size={size} />
              <Text className="text-lg text-white">Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{ alignItems: "center", paddingTop: 10, width: width / 5 }}
            >
              <Ionicons name="search" color={color} size={size} />
              <Text className="text-lg text-white">Discover</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                height: 55,
                width: 55,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 99999,
                backgroundColor: "purple",
                marginBottom: 30,
              }}
            >
              <Ionicons name="add" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{ alignItems: "center", paddingTop: 10, width: width / 5 }}
            >
              <Ionicons
                name="chatbubble-ellipses-outline"
                color={color}
                size={size}
              />
              <Text className="text-lg text-white">Messages</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{ alignItems: "center", paddingTop: 10, width: width / 5 }}
            >
              <Ionicons name="person" color={color} size={size} />
              <Text className="text-lg text-white">Profile</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
