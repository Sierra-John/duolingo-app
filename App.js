import React, { useEffect, useState } from "react";
import { Text, View, Image, Alert } from "react-native";

import styles from "./styles";

import ImageOption from "./src/components/ImageOption/ImageOption";
import Button from "./src/components/Button/Button";
import questions from "./assets/data/imageMulatipleChoiceQuestions";

function App() {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You Won!");
      // Move back to begining
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onButtonPress = () => {
    if (selected.correct) {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
    } else {
      Alert.alert("Wrong!");
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id == option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  );
}

export default App;
