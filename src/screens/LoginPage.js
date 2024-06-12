import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Loading from "../components/Loading";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/icon_login.png")}
      />
      <Text>Login Page </Text>
      <Text>Welcome {result} </Text>
      <TextInput
        onChangeText={setEmail}
        style={styles.textInput}
        placeholder="email"
        keyboardType="email-address"
        value={email}
      />
      <TextInput
        onChangeText={setPassword}
        style={styles.textInput}
        placeholder="password"
        secureTextEntry={true}
        value={password}
      />
      <Pressable
        onPress={() => {
          setIsLoading(true)
          setResult(email + ' ' + password)
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "blue" : "gray",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

    {isLoading &&  <Loading setIsLoading={setIsLoading}/>}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    width: "80%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    width: 120,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
