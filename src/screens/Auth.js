import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import backgroundImage from "../../assets/img/logo.png";
import commonStyles from "../commonStyles";

export default class Auth extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmePassword: "",
    stageNew: true,
  };

  signinOrSignup = () => {
    if (this.state.stageNew) {
      Alert.alert("Sucesso!", "Criar conta");
    } else {
      Alert.alert("Sucesso!", "Logar");
    }
  };
  render() {
    return (
      <ImageBackground style={styles.background}>
        <Text style={styles.title}>Ampix Sistemas</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? "Crie sua conta" : "Informe seus dados"}
          </Text>
          {this.state.stageNew && (
            <TextInput
              placeholder="Nome"
              value={this.state.name}
              style={styles.input}
              onChangeText={(name) => this.setState({ name })}
            />
          )}
          <TextInput
            placeholder="E-mail"
            value={this.state.email}
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            placeholder="Senha"
            value={this.state.password}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          {this.state.stageNew && (
            <TextInput
              placeholder="Confirme a Senha"
              value={this.state.confirmePassword}
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(confirmePassword) =>
                this.setState({ confirmePassword })
              }
            />
          )}
          <TouchableOpacity onPress={this.signinOrSignup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {this.state.stageNew ? "Registrar" : "Entrar"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => this.setState({ stageNew: !this.state.stageNew })}
        >
          <Text style={styles.buttonText}>
            {this.state.stageNew
              ? "Já possui conta?"
              : "Ainda não possui conta ?"}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#AAA",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: commonStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10,
  },
  subtitle: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  formContainer: {
    borderRadius: 25,
    backgroundColor: "rgba( 0, 0, 0, 0.8)",
    padding: 20,
    width: "90%",
  },
  input: {
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: "#FFF",
    padding: 15,
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#080",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    color: "#FFF",
    fontSize: 20,
  },
});
