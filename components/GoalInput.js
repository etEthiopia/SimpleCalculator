import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export const GoalInput = props => {
  return (
    <Modal visible = {props.visibility} animationType='slide'>
      <View style={styles.addGoal} >
        <TextInput
          onChangeText={props.newGoalMethod}
          value={props.cGoal}
          style={styles.newGoal}
          placeholder="New Goal"
        />
        <View style={{marginBottom: 20}} >
        <Button onPress={props.addGoalBtnMethod} title="ADD" />
        </View>
        <Button color= 'red' onPress={props.cancelGoalBtnMethod} title="CANCEL" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addGoal: {
    justifyContent: "center",
    alignItems: "stretch",
    flex:1,
    padding: 30,
    
  },
  newGoal: {
    padding: 2,
    marginBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  cancelGoal:{
    
  }
});
