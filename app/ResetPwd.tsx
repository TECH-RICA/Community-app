import eye_open from "@/assets/images/eye-dark.png";
import eye_close from "@/assets/images/eye-slash-dark.png";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import left from "../assets/images/arrow-left.png";

const ResetPwd = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(0);
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 40,
      }}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={20}
    >
      <SafeAreaView className="flex-1 bg-white">
        <TouchableOpacity
          className="bg-white/40 w-10 ml-2 rounded-full mt-4 items-center"
          onPress={() => router.push("/Verification")}
        >
          <Image source={left} className="w-10 h-10" />
        </TouchableOpacity>
        <Text className="text-3xl font-serif text-black text-center">
          Reset Password
        </Text>
        <View className="flex flex-col mt-8 gap-3">
          <View className="mx-4 flex flex-col gap-2">
            <Text>Enter new Password</Text>
            <TextInput
              className="text-white text-md px-4 py-4 rounded-md border border-gray-500 border-1"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? eye_open : eye_close}
                className="w-8 h-8 absolute right-4 bottom-4"
              />
            </TouchableOpacity>
          </View>
          <View className="mx-4 flex flex-col gap-2">
            <Text>Confirm Password</Text>
            <TextInput
              className="text-white text-md px-4 py-4 rounded-md border border-gray-500 border-1"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? eye_open : eye_close}
                className="w-8 h-8 absolute right-4 bottom-4"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          className="justify-center items-center bg-[#2DD4BF] mx-10 mt-6 py-3 rounded-lg"
          onPress={() => router.push("/(tabs)/Home")}
        >
          <Text className="font-serif text-xl text-white">Reset Password</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ResetPwd;
