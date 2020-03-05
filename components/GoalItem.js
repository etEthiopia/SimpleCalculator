import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Button
} from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.goalView}>
      <Text style={styles.goalText}> {props.goal.value} </Text>
      <TouchableNativeFeedback onPress={() => props.deleteGoal(props.goal.key)}>
        <View
          
          style={styles.deleteMainView}
        ></View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  goalView: {
    paddingRight: 0,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 8,
    marginVertical: 5
  },
  goalText: {
    margin: 10,
    flex: 5
  },
  deleteMainView: {
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: "red",
    flex: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});

export default GoalItem;
