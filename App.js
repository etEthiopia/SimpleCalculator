import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import GoalItem from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const newGoalInputHandler = enteredText => {
    console.log(enteredText);
    setEnteredGoal(enteredText);
  };

  const addGoalBtnHandler = () => {
    if (enteredGoal.length > 0) {
      setCourseGoals(currentGoals => [
        ...courseGoals,
        { key: Math.random().toString(), value: enteredGoal }
      ]);
    }
    setIsAddModal(false);
  };

  const cancelGoalBtnHandler = () => {
    setIsAddModal(false);
  };

  const deleteGoalHandler = goaltoDelete => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goaltoDelete);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
      </View>
      <GoalInput
        newGoalMethod={newGoalInputHandler}
        cGoal={enteredGoal}
        visibility={isAddModal}
        addGoalBtnMethod={addGoalBtnHandler}
        cancelGoalBtnMethod={cancelGoalBtnHandler}
      />

      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.key}
        renderItem={itemData => (
          <GoalItem goal={itemData.item} deleteGoal={deleteGoalHandler} />
        )}
      />

      {/* <ScrollView style={styles.goalsContainer}>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.goalView}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 15
  },
  addGoal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  goalsContainer: {
    paddingVertical: 10
  },
  addButton: {
    marginBottom: 20
  },
  goalView: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5
  }
});
