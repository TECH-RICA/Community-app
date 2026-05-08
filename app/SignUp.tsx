import Google from "@/assets/images/Google.png";
import eye_open from "@/assets/images/eye-dark.png";
import eye_close from "@/assets/images/eye-slash-dark.png";
import github from "@/assets/images/github.png";
import linkedin from "@/assets/images/linkedin.png";
import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
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
        <View className="flex flex-col items-center justify-center mt-4 gap-1">
          <Text className="text-2xl font-bold font-serif">Create Account</Text>
          <Text className="text-lg text-white">
            Join TechSphere community today..
          </Text>
        </View>

        <View className="flex flex-col gap-4 mt-10">
          <View className="flex flex-col gap-2 mx-4">
            <Text className="text-lg font-serif font-bold">Full Name</Text>
            <TextInput
              placeholder="Enter full name"
              className="bg-white/40 text-white rounded-md px-4 py-4"
            />
          </View>
          <View className="flex flex-col gap-2 mx-4">
            <Text className="text-lg font-serif font-bold">Email</Text>
            <TextInput
              placeholder="Enter email"
              className="bg-white/40 text-white rounded-md px-4 py-4"
            />
          </View>
          <View className="flex flex-col gap-2 mx-4">
            <Text className="text-lg font-serif font-bold">Password</Text>
            <TextInput
              placeholder="Enter password"
              className="text-white bg-white/40 rounded-md px-4 py-4"
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
        <View className="flex flex-row gap-2 items-center mx-4 mt-6">
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <View className="flex-row flex-wrap items-center">
            <Text className="text-white">I agree with the</Text>
            <TouchableOpacity>
              <Text className="ml-1 text-teal-400">Terms of Service</Text>
            </TouchableOpacity>
            <Text className="ml-1 text-white">and</Text>
            <TouchableOpacity>
              <Text className="ml-1 text-teal-400">Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          className="justify-center items-center bg-[#2DD4BF] mx-10 mt-10 py-3 rounded-lg"
          onPress={() => router.push("/Verification")}
        >
          <Text className="text-xl font-serif text-white">Sign Up</Text>
        </TouchableOpacity>

        <Text className="text-lg mt-8 text-center text-white">
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
          <Text className="text-xl text-white font-serif">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/SignIn")}>
            <Text className="text-teal-400 ml-1 text-xl font-serif">Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
