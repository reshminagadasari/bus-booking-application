import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

const BOARDING_POINTS = [
  { id: "1", time: "20:15", place: "Saketh Tower" },
  { id: "2", time: "20:30", place: "ECIL" },
  { id: "3", time: "20:40", place: "Radhika Theatre" },
  { id: "4", time: "21:00", place: "Ameerpet" },
];

const DROPPING_POINTS = [
  { id: "1", time: "07:45", place: "Mini Bypass" },
];

export default function BoardingDroppingScreen({ navigation, route }) {
  // ✅ RECEIVE DATA FROM PREVIOUS SCREEN
  const {
    from,
    to,
    journeyDate,
    bus,
    seat,
  } = route.params || {};

  const [selectedBoarding, setSelectedBoarding] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Boarding Point</Text>

      <FlatList
        data={BOARDING_POINTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.card,
              selectedBoarding?.id === item.id && styles.selected,
            ]}
            onPress={() => setSelectedBoarding(item)}
          >
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.place}>{item.place}</Text>
          </Pressable>
        )}
      />

      <View style={styles.divider} />

      <Text style={styles.title}>Dropping Point</Text>

      <View style={styles.card}>
        <Text style={styles.time}>{DROPPING_POINTS[0].time}</Text>
        <Text style={styles.place}>{DROPPING_POINTS[0].place}</Text>
      </View>

      <Pressable
        style={[
          styles.continueBtn,
          !selectedBoarding && styles.disabled,
        ]}
        disabled={!selectedBoarding}
        onPress={() =>
          navigation.navigate("Passenger", {
            // ✅ PASS EVERYTHING FORWARD
            from,
            to,
            journeyDate,
            bus,
            seat,
            boarding: selectedBoarding,
            dropping: DROPPING_POINTS[0],
          })
        }
      >
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#FF5252",
  },
  time: {
    fontWeight: "bold",
  },
  place: {
    color: "#555",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  continueBtn: {
    backgroundColor: "#FF5252",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  disabled: {
    backgroundColor: "#ccc",
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
