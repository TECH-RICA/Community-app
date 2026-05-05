import logo from "@/assets/images/logo.png";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Welcome");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-teal-100">
      <Image source={logo} className="w-48 h-48" />
      <Text className="text-4xl font-semibold">TechSphere</Text>
    </SafeAreaView>
  );
}
