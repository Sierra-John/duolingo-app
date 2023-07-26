import React, { useState } from "react";
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";

import styles from "./styles";

import ImageOption from "./src/components/ImageOption/ImageOption";
import Button from "./src/components/Button/Button";
import question from "./assets/data/oneQuestionWithOption";

function App() {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    console.warn("Pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
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
