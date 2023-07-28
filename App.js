import React, { useEffect, useState } from "react";
import { Text, View, Image, Alert } from "react-native";

import styles from "./styles";

import ImageOption from "./src/components/ImageOption/ImageOption";
import Button from "./src/components/Button/Button";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";

//import questions from "./assets/data/imageMulatipleChoiceQuestions";
//import questions from "./assets/data/openEndedQuestions";
import questions from "./assets/data/allQuestions";

function App() {
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

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert("Wrong!");
  };

  return (
    <View style={styles.root}>
      {currentQuestion.type == "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type == "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
    </View>
  );
}

export default App;
