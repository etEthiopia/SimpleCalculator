import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

export default function App() {
  const numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "(   )"
  ];
  const operations = ["/", "x", "+", "-"];
  const [statement, setStatement] = useState("0");
  const [result, setResult] = useState("");

  const makeSense = () => {
    var sense = false;
    if (statement.length > 2) {
      if (
        numbers.slice(0, 9).includes(statement.charAt(statement.length - 1))
      ) {
      }
    }
  };

  const ButtonPress = x => {
    console.log("PRESSED V: " + x);

    if (statement === "0") {
      setStatement(x);
    } else {
      setStatement(cStatement => cStatement + x);
    }
  };
  const Back = () => {
    console.log("BACK PRESSED");
    if (statement.length === 1) {
      setStatement("0");
    } else if (statement.length >= 1) {
      setStatement(cStatement =>
        cStatement.substring(0, cStatement.length - 1)
      );
    }
  };
  const OperationPress = x => {
    console.log("OPERATION PRESS: " + x);
    if (statement !== "0") {
      setStatement(cStatement => cStatement + x);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={{ fontSize: 50 }}>{statement}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={{ fontSize: 30 }}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[7])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[7]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[8])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[8]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[9])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[9]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[4])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[4]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[5])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[5]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[6])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[6]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[1])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[2])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[3])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[3]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[10])}
              style={styles.keypads}
            >
              <Text style={{ fontSize: 50 }}>{numbers[10]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[0])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ButtonPress(numbers[11])}
              style={styles.keypads}
            >
              <Text style={styles.textButtons}>{numbers[11]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity onPress={() => Back()} style={styles.dpkeypads}>
            <Text style={styles.dpTextButtons}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => OperationPress(operations[0])}
            style={styles.okeypads}
          >
            <Text style={styles.oTextButtons}>{operations[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => OperationPress(operations[1])}
            style={styles.okeypads}
          >
            <Text style={styles.oTextButtons}>{operations[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => OperationPress(operations[2])}
            style={styles.okeypads}
          >
            <Text style={styles.oTextButtons}>{operations[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => OperationPress(operations[3])}
            style={styles.okeypads}
          >
            <Text style={styles.oTextButtons}>{operations[3]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: "#918c87",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15
  },
  calculation: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    backgroundColor: "#918c87"
  },
  buttons: {
    flex: 6,
    flexDirection: "row"
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow",
    justifyContent: "space-between"
  },
  operations: {
    flex: 1,
    backgroundColor: "black"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch"
  },
  keypads: {
    flex: 1,
    backgroundColor: "wheat",
    justifyContent: "center",
    alignItems: "center"
  },
  okeypads: {
    flex: 1,
    backgroundColor: "#453D2B",
    justifyContent: "center",
    alignItems: "center"
  },
  dpkeypads: {
    flex: 1,
    backgroundColor: "#998860",
    justifyContent: "center",
    alignItems: "center"
  },
  dpTextButtons: {
    fontSize: 20,
    color: "black"
  },
  textButtons: {
    fontSize: 30
  },
  oTextButtons: {
    fontSize: 30,
    color: "wheat"
  }
});
