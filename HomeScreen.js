import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

export default function HomeScreen({ navigation, route }) {
  const user = route.params?.user;

  // ❌ NO DEFAULT VALUES
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeyDate, setJourneyDate] = useState("");

  const handleFindBuses = () => {
    if (!from || !to || !journeyDate) {
      Alert.alert("Missing details", "Please select From, To and Date");
      return;
    }

    navigation.navigate("BookingFlow", {
      screen: "BusList",
      params: {
        from,
        to,
        journeyDate,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.greeting}>
        Hey {user?.name || "Guest"} 👋
      </Text>

      {/* SEARCH CARD */}
      <View style={styles.card}>
        {/* FROM */}
        <Text style={styles.label}>From</Text>
        <TextInput
          placeholder="Enter source city"
          value={from}
          onChangeText={setFrom}
          style={styles.input}
        />

        {/* TO */}
        <Text style={styles.label}>To</Text>
        <TextInput
          placeholder="Enter destination city"
          value={to}
          onChangeText={setTo}
          style={styles.input}
        />

        {/* DATE */}
        <Text style={styles.label}>Journey Date</Text>
        <TextInput
          placeholder="DD MMM (e.g. 22 Dec)"
          value={journeyDate}
          onChangeText={setJourneyDate}
          style={styles.input}
        />

        {/* FIND BUSES */}
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={handleFindBuses}
        >
          <Text style={styles.searchText}>Find Buses</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#F1F1F1",
    padding: 14,
    borderRadius: 8,
    marginTop: 5,
  },
  searchBtn: {
    backgroundColor: "#FF5252",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  searchText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
