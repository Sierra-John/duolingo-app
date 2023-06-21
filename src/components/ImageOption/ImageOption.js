import { View, Text, Image } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const ImageOption = ({ image, text }) => (
  <View style={styles.optionContainer}>
    <Image
      source={{
        uri: image,
      }}
      resizeMode="contain"
      style={styles.optionImage}
    />
    <Text style={styles.optionText}>{text.toUpperCase()}</Text>
  </View>
);

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageOption;
