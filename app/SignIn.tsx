import Google from "@/assets/images/Google.png";
import left from "@/assets/images/arrow-left.png";
import eye_open from "@/assets/images/eye-dark.png";
import eye_close from "@/assets/images/eye-slash-dark.png";
import github from "@/assets/images/github.png";
import linkedin from "@/assets/images/linkedin.png";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import ForgotPwdModal from "./ForgotPwdModal";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#0284C7" }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 40,
      }}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={20}
    >
      <SafeAreaView className="flex-1">
        <TouchableOpacity
          onPress={() => router.push("/SignUp")}
          className="bg-white/40 w-10 ml-2 rounded-full mt-4 items-center"
        >
          <Image source={left} className="w-10 h-10" />
        </TouchableOpacity>
        <View className="flex flex-col gap-1 items-center justify-center mt-8">
          <Text className="text-4xl ml-6 font-serif font-bold text-black">
            Welcome Back 👋
          </Text>
          <Text className="text-lg text-white">
            Login to continue to TechSphere
          </Text>
        </View>

        <View className="flex flex-col mt-10 gap-6">
          <View className="mx-4 flex flex-col gap-2">
            <Text className="text-xl font-serif">Email</Text>
            <TextInput
              placeholder="Enter email"
              className="bg-white/40 text-white text-md px-4 py-4 rounded-md"
            />
          </View>
          <View className="mx-4 flex flex-col gap-2">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-xl font-serif">Password</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text className="text-lg font-serif text-teal-400">
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Enter password"
              className="bg-white/40 text-white text-md px-4 py-4 rounded-md"
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
        <ForgotPwdModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
        <TouchableOpacity className="justify-center items-center bg-[#2DD4BF] mx-10 mt-8 py-3 rounded-lg">
          <Text className="text-xl font-serif text-white">Login</Text>
        </TouchableOpacity>
        <Text className="text-lg text-white mt-8 text-center">
          Or continue with
        </Text>
        <View className="flex-row justify-center items-center gap-4 mt-8">
          <TouchableOpacity className="bg-white/50 p-4 mx-2 rounded-lg">
            <Image source={Google} className="w-12 h-12" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/50 p-4 mx-2 rounded-lg">
            <Image source={github} className="w-12 h-12" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/50 p-4 mx-2 rounded-lg">
            <Image source={linkedin} className="w-12 h-12" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-center mt-20">
          <Text className="text-xl font-serif text-white">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/SignUp")}>
            <Text className="text-teal-400 font-serif text-xl"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
