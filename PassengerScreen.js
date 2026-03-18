import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

export default function PassengerScreen({ navigation, route }) {
  // ✅ SAFE destructuring with fallback
  const {
    from = "N/A",
    to = "N/A",
    journeyDate = "N/A",
    bus = {},
    seat = {},
    boarding = {},
    dropping = {},
  } = route.params || {};

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");

  const handleConfirm = () => {
    if (!name || !age) {
      alert("Please enter passenger details");
      return;
    }

    navigation.navigate("BookingSuccess", {
      passengerName: name,
      passengerAge: age,
      passengerGender: gender,

      from,
      to,
      journeyDate,

      travelName: bus.travelName || "Unknown Travels",
      busType: bus.busType || "Bus",

      seatNumber: seat.id || "NA",
      seatPrice: seat.price || 0,

      boardingPoint: boarding.place || "NA",
      boardingTime: boarding.time || "NA",
      droppingPoint: dropping.place || "NA",

      ticketNumber:
        "TJ" + Math.floor(100000000 + Math.random() * 900000000),
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Passenger Details</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Passenger Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Age"
          keyboardType="number-pad"
          value={age}
          onChangeText={setAge}
          style={styles.input}
        />

        <View style={styles.genderRow}>
          {["Male", "Female"].map((g) => (
            <Pressable
              key={g}
              style={[
                styles.genderBtn,
                gender === g && styles.genderSelected,
              ]}
              onPress={() => setGender(g)}
            >
              <Text>{g}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* SUMMARY */}
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Booking Summary</Text>
        <Text>{from} → {to}</Text>
        <Text>Date: {journeyDate}</Text>
        <Text>Bus: {bus.travelName || "N/A"}</Text>
        <Text>Seat: {seat.id || "N/A"} · ₹{seat.price || 0}</Text>
        <Text>
          Boarding: {boarding.place || "N/A"} ({boarding.time || "N/A"})
        </Text>
      </View>

      <Pressable style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm Booking</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F5F5F5" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  genderRow: { flexDirection: "row", justifyContent: "space-around" },
  genderBtn: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 100,
    alignItems: "center",
  },
  genderSelected: {
    backgroundColor: "#E3F2FD",
    borderColor: "#2196F3",
  },

  summary: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryTitle: { fontWeight: "bold", marginBottom: 6 },

  confirmBtn: {
    backgroundColor: "#D32F2F",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
