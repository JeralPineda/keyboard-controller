import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TextInput, View } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
} from "react-native-keyboard-controller";

export default function Login() {
  return (
    <>
      <ThemedView
        style={{
          flex: 1,
        }}
      >
        <KeyboardAwareScrollView
          bottomOffset={62}
          contentContainerStyle={styles.container}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
            }}
          >
            <View style={styles.card}>
              <ThemedText style={{ padding: 8 }}>Login</ThemedText>
              <TextInput placeholder="Email" style={styles.textInput} />
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ThemedView>

      <KeyboardToolbar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 16,
  },
  listStyle: {
    padding: 16,
    gap: 16,
  },
  textInput: {
    width: "95%",
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d8d8d8",
    backgroundColor: "#fff",
    padding: 8,
    alignSelf: "center",
    marginBottom: 8,
  },
  card: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    gap: 10,
    marginBottom: 16,
  },
});
