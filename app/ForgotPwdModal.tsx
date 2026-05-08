import { useRouter } from "expo-router";
import React from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

type ForgotPwdModalProps = {
  visible: boolean;
  onClose: () => void;
};
const ForgotPwdModal = ({ visible, onClose }: ForgotPwdModalProps) => {
  const router = useRouter();
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View className="flex-1 justify-end bg-black/60">
        <View className="bg-white rounded-t-3xl p-6 h-[45%]">
          <View className="w-16 h-1 bg-gray-300 self-center rounded-full mb-6" />
          <Text className="text-2xl font-bold mb-3">Forgot Password</Text>
          <Text className="text-gray-500 mb-6 text-lg">
            Enter your email to receive a verification code.
          </Text>
          <TextInput
            placeholder="Enter your email"
            className="bg-gray-500/50 text-white text-md px-4 py-4 rounded-md"
          />
          <TouchableOpacity
            className="bg-[#0891B2] mt-8 py-3 mx-8 flex items-center rounded-lg"
            onPress={() => router.push("/Verification")}
          >
            <Text className="text-xl font-bold">Send Code</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center mt-5" onPress={onClose}>
            <Text className="text-red-500 text-xl font-bold">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ForgotPwdModal;
