import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";
import PropTypes from "prop-types";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() == input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>

      <View style={styles.row}>
        {/* Image */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      {/* Sentence container */}
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type in English"
        style={styles.textInput}
        textAlignVertical="top"
        multiline={true}
      />

      <Button text="Check" onPress={onButtonPress} disabled={!input} />
    </>
  );
};

export default OpenEndedQuestion;
