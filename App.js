import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";

import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="pink" />
      <View>
        <View
          style={{
            height: 50,
            backgroundColor: "#393939",

            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 30, width: 60, marginLeft: 20 }}
            source={require("./assets/images/logoIMDb.png")}
          />
        </View>

        <ScrollView>
          <View
            style={{
              height: 300,
              backgroundColor: "#212121",
              marginBottom: 20,
            }}
          >
            <Text style={styles.title}>Interstellar</Text>

            <Text style={styles.txt}> 2014</Text>
            <View style={styles.description}>
              <Image
                style={{ height: 150, width: 100, marginLeft: 20 }}
                source={require("./assets/images/158828.jpg")}
                resizeMode="contain"
              />
              <View style={{ flex: 1, margin: 10 }}>
                <Text style={styles.txt}>
                  Loremm pppp iii oooo pppp pspdpf pdpdpf dsfppfd dfpfpff fppfd
                  dfbhsj dsdjjf sjbsj kjdbnds fdjbnfjkf Loremm pppp iii oooo
                  pppp pspdpf pdpdpf dsfppfd dfpfpff fppfd dfbhsj dsdjjf sjbsj
                </Text>
                <TouchableOpacity
                  style={{ backgroundColor: "#0476BA", margin: 20 }}
                  onPress={() => {
                    console.log("pressed !");
                  }}
                >
                  <Text style={{ color: "white" }}>+ADD TO WATCHLIST </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ height: 300, backgroundColor: "#212121" }}>
            <Text style={styles.title}>Top Billed Cast</Text>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Image
                    style={{ height: 150, width: 100, marginLeft: 20 }}
                    source={require("./assets/images/anne-hathaway.jpg")}
                    resizeMode="contain"
                  />
                  <Text style={styles.txt}> Anne Hathaway</Text>
                </View>

                <View>
                  <Image
                    style={{ height: 150, width: 100, marginLeft: 20 }}
                    source={require("./assets/images/Jessica-Chastain.jpg")}
                    resizeMode="contain"
                  />
                  <Text style={styles.txt}> Jessica Chastain</Text>
                </View>

                <View>
                  <Image
                    style={{ height: 150, width: 100, marginLeft: 20 }}
                    source={require("./assets/images/matthew-mcconaughey.jpeg")}
                    resizeMode="contain"
                  />
                  <Text style={styles.txt}> Matthew Mcconaughey</Text>
                </View>

                <View>
                  <Image
                    style={{ height: 150, width: 100, marginLeft: 20 }}
                    source={require("./assets/images/anne-hathaway.jpg")}
                    resizeMode="contain"
                  />
                  <Text> Anne Hathaway</Text>
                </View>

                <View>
                  <Image
                    style={{ height: 150, width: 100, marginLeft: 20 }}
                    source={require("./assets/images/anne-hathaway.jpg")}
                    resizeMode="contain"
                  />
                  <Text style={styles.txt}> Anne Hathaway</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },

  title: {
    marginLeft: 20,
    color: "white",
    fontSize: 30,
  },
  txt: {
    marginLeft: 20,
    color: "white",
  },

  description: {
    flexDirection: "row",
  },

  // height: Platform.OS === "ios" ? 200 : 100,
});
