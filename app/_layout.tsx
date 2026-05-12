import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="Verification" options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPwdModal" options={{ headerShown: false }} />
      <Stack.Screen name="ResetPwd" options={{ headerShown: false }} />
    </Stack>
  );
}
