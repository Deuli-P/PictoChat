import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackScreen } from "./src/Navigation/NavigationStack";
import ModalButton from "./src/components/ModalButton";


export default function App() {

  return (
         <SafeAreaProvider>
            <StackScreen />
            <ModalButton />
         </SafeAreaProvider>
  );
}