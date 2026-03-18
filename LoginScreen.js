import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

export default function LoginScreen({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registeredEmail = route.params?.registeredEmail;
  const registeredPassword = route.params?.registeredPassword;

  useEffect(() => {
    if (registeredEmail && registeredPassword) {
      setEmail(registeredEmail);
      setPassword(registeredPassword);
    }
  }, [registeredEmail, registeredPassword]);

  const handleLogin = () => {
    if (email === registeredEmail && password === registeredPassword) {
      window.alert("Login successful");
      navigation.replace("MainTabs");
    } else {
      window.alert("Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {/* ✅ CLEAR REGISTER BUTTON */}
      <Pressable
        style={[styles.button, { backgroundColor: "#fff" }]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "#FF5252", fontWeight: "bold", textAlign: "center" }}>
          Register
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FF6B6B",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF5252",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    cursor: "pointer",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
