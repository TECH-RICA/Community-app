import { slides } from "@/assets/assets";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const Welcome = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userInterracted, setUserInterracted] = useState(false);
  const flatListRef = useRef();

  const handleScroll = (e) => {
    const slideIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
    setUserInterracted(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentSlide + 1) % slides.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <SafeAreaView className="flex-1 bg-teal-700 " style={{ width, height }}>
      <FlatList
        data={slides}
        ref={flatListRef}
        horizontal
        pagingEnabled
        showHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            className="flex justify-center items-center"
            style={{ padding: 28 }}
          >
            <Image
              source={item.image}
              style={{ width: 300, height: 300, borderRadius: 30 }}
              resizeMode="contain"
            />
            <View className="flex flex-col gap-2 items-center">
              <Text className="text-2xl font-bold text-black">
                {item.title}
              </Text>
              <Text className="text-lg text-white">{item.description}</Text>
            </View>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          bottom: "24%",
        }}
      >
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              {
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#ccc",
                marginHorizontal: 5,
                position: "relative",
                top: 40,
              },
              currentSlide === index && {
                backgroundColor: "teal",
                flexGrow: 0.1,
              },
            ]}
          />
        ))}
      </View>
      {currentSlide === slides.length - 1 ? (
        <>
          <View className="flex flex-row items-center relative bottom-[10%] mx-6 justify-between">
            <TouchableOpacity
              className="bg-teal-600 px-8 py-4 items-center rounded-full"
              onPress={() => router.push("/SignUp")}
            >
              <Text className="text-2xl text-white font-bold">Sign Up.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white px-8 py-4 items-center rounded-full"
              onPress={() => router.push("/SignIn")}
            >
              <Text className="text-2xl text-black font-bold">Sign In</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default Welcome;
