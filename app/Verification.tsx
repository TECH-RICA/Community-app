import left from "@/assets/images/arrow-left.png";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Verification = () => {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  return (
    <SafeAreaView className="bg-[#0284C7] flex-1">
      <TouchableOpacity
        className="bg-white/40 w-10 ml-2 rounded-full mt-4 items-center"
        onPress={() => router.push("/SignUp")}
      >
        <Image source={left} className="w-10 h-10" />
      </TouchableOpacity>
      <View className="flex flex-col gap-1 items-center justify-center">
        <Text className="text-3xl font-serif">Verification</Text>
        <Text className="text-lg text-white">
          Enter the Verification Code sent to your email.
        </Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Verification;
