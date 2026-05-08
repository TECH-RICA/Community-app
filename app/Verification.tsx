import left from "@/assets/images/arrow-left.png";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Verification = () => {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      if (code[index] === "") {
        if (index > 0) {
          inputs.current[index - 1].focus();
          const newCode = [...code];
          newCode[index - 1] = "";
          setCode(newCode);
        }
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled" className="flex-1 bg-white">
      <SafeAreaView className="bg-[#fff] flex-1">
        <TouchableOpacity
          className="bg-white/40 w-10 ml-2 rounded-full mt-4 items-center"
          onPress={() => router.push("/SignUp")}
        >
          <Image source={left} className="w-10 h-10" />
        </TouchableOpacity>
        <View className="flex flex-col gap-1 items-center justify-center">
          <Text className="text-3xl font-serif">Verification</Text>
          <Text className="text-lg text-black">
            Enter the Verification Code sent to your email.
          </Text>
        </View>
        <View className=" flex flex-row gap-4 justify-center mt-6 space-x-3">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              className="w-14 h-14 border border-gray-700 rounded-full text-center text-lg font-semibold"
            />
          ))}
        </View>
        <View className="flex flex-row gap-1 items-center mt-6 justify-center">
          <Text className="text-lg text-black font-serif">
            If you didn't receive a code.
          </Text>
          <TouchableOpacity>
            <Text className="text-lg text-red-600 font-serif">Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="justify-center items-center bg-[#2DD4BF] mx-10 mt-6 py-3 rounded-lg">
          <Text className="font-serif text-xl text-white">Verify</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Verification;
