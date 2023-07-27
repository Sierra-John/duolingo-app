import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = () => {
  const onButtonPress = () => {};

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>

      <View style={styles.row}>
        {/* Image */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>Sentence</Text>
        </View>
      </View>

      {/* Sentence container */}
      <TextInput placeholder="Type in English" style={styles.textInput} />

      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </>
  );
};

export default OpenEndedQuestion;
