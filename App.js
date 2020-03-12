import React, { useState, Component } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    //   const numbers = [
    //     "0",
    //     "1",
    //     "2",
    //     "3",
    //     "4",
    //     "5",
    //     "6",
    //     "7",
    //     "8",
    //     "9",
    //     ".",
    //     "(   )"
    //   ];
    //   const operations = ["/", "x", "+", "-"];
    //   const [statement, setStatement] = useState("0");
    //   const [result, setResult] = useState("");

    //   const makeSense = () => {
    //     var sense = false;
    //     if (statement.length > 2) {
    //       if (
    //         numbers.slice(0, 9).includes(statement.charAt(statement.length - 1))
    //       ) {
    //       }
    //     }
    //   };

    //   const ButtonPress = x => {
    //     console.log("PRESSED V: " + x);

    //     if (statement === "0") {
    //       setStatement(x);
    //     } else {
    //       setStatement(cStatement => cStatement + x);
    //     }
    //   };
    //   const Back = () => {
    //     console.log("BACK PRESSED");
    //     if (statement.length === 1) {
    //       setStatement("0");
    //     } else if (statement.length >= 1) {
    //       setStatement(cStatement =>
    //         cStatement.substring(0, cStatement.length - 1)
    //       );
    //     }
    //   };
    //   const OperationPress = x => {
    //     console.log("OPERATION PRESS: " + x);
    //     if (statement !== "0") {
    //       setStatement(cStatement => cStatement + x);
    //     }
    //   };
  }

  render() {
    let rows = [];
    
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.keypads}>
            <Text style={styles.textButtons}>{i + 1}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={{ fontSize: 50 }}></Text>
        </View>
        <View style={styles.calculation}>
          <Text style={{ fontSize: 30 }}></Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>
            <TouchableOpacity onPress={() => Back()} style={styles.dpkeypads}>
              <Text style={styles.dpTextButtons}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              //onPress={() => OperationPress(operations[0])}
              style={styles.okeypads}
            >
              <Text style={styles.oTextButtons}></Text>
            </TouchableOpacity>
            <TouchableOpacity
              //onPress={() => OperationPress(operations[1])}
              style={styles.okeypads}
            >
              <Text style={styles.oTextButtons}></Text>
            </TouchableOpacity>
            <TouchableOpacity
              //onPress={() => OperationPress(operations[2])}
              style={styles.okeypads}
            >
              <Text style={styles.oTextButtons}></Text>
            </TouchableOpacity>
            <TouchableOpacity
              //onPress={() => OperationPress(operations[3])}
              style={styles.okeypads}
            >
              <Text style={styles.oTextButtons}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
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
