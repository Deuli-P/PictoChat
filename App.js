import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackScreen } from "./src/Navigation/NavigationStack";



export default function App() {

  return (
         <SafeAreaProvider>
            <StackScreen />
         </SafeAreaProvider>
  );
}