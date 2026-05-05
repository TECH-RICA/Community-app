import { Image, Text, View } from "react-native";
import logo from '@/assets/images/logo.png'
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-teal-100">
      <Image source={logo} className="w-48 h-48" />
      <Text className='text-4xl font-semibold'>TechSphere</Text>
    </SafeAreaView>
  );
}
