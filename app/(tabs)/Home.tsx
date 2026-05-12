import { categories, discussions } from "@/assets/assets";
import notification from "@/assets/images/bell.png";
import search from "@/assets/images/search-light.png";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const flatListRef = useRef();
  const [activeTab, setActiveTab] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-slate-600">
      <View className="mt-6 flex flex-row justify-between items-center mx-4">
        <View className="flex flex-col gap-1">
          <Text className="text-3xl text-white font-serif">Hello, John 👋</Text>
          <Text className="text-lg text-white">Good to see you again!</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={notification}
            className="w-10 h-10"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View className="mx-4 mt-4">
        <TextInput
          placeholder="Search TechSphere..."
          className="bg-slate-800 px-10 py-4 rounded-xl text-lg text-white"
        />
        <Image
          source={search}
          className="w-8 h-8 absolute top-3 left-2"
          resizeMode="contain"
        />
      </View>
      <View className="mt-4 mx-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl text-white font-black">Categories</Text>
          <TouchableOpacity>
            <Text className="text-xl text-purple-600">See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 9 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mt-3">
              <Pressable
                onPress={() => setActiveTab(item)}
                className={`px-4 py-3 rounded-2xl ${
                  activeTab === item ? "bg-violet-600" : "bg-[#111827]"
                }`}
              >
                <Text
                  className={`font-medium ${
                    activeTab === item ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.title}
                </Text>
              </Pressable>
            </View>
          )}
        />
      </View>
      <View className="mt-4 mx-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl text-white font-black">
            Trending Discussions
          </Text>
          <TouchableOpacity>
            <Text className="text-xl text-purple-600">See all</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex flex-col gap-4">
          {discussions.map((discussion, index) => (
            <View
              key={index}
              className="flex flex-col gap-2 bg-black/40 px-4 py-6 items-center rounded-lg"
            >
              <Text className="text-xl font-bold text-center">
                {discussion.description}
              </Text>
              <View className="flex flex-row items-center gap-2">
                <Text className="text-lg text-white">{discussion.title}</Text>
                <Text className="text-lg text-white">{discussion.view}</Text>
                <Text className="text-lg text-white">{discussion.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
