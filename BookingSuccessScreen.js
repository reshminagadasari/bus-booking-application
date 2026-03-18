import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function BookingSuccessScreen({ navigation, route }) {
  const booking = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.success}>Booking Successful 🎉</Text>

      <View style={styles.card}>
        <Text style={styles.title}>
          {booking.from} → {booking.to}
        </Text>

        <Text>{booking.journeyDate}</Text>

        <Text style={styles.travel}>
          {booking.travelName}
        </Text>

        <Text>
          Seat: {booking.seatNumber} · ₹{booking.seatPrice}
        </Text>

        <Text>
          Passenger: {booking.passengerName} (
          {booking.passengerAge}, {booking.passengerGender})
        </Text>

        <Text>
          Boarding: {booking.boardingPoint} (
          {booking.boardingTime})
        </Text>

        <Text style={styles.ticketNo}>
          Ticket No: {booking.ticketNumber}
        </Text>
      </View>

      <Pressable
        style={styles.btn}
        onPress={() =>
          navigation.navigate("MainTabs", {
            screen: "MyTickets",
            params: { booking },
          })
        }
      >
        <Text style={styles.btnText}>View My Tickets</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  success: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  travel: {
    marginTop: 6,
    fontWeight: "bold",
  },
  ticketNo: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#D32F2F",
  },
  btn: {
    backgroundColor: "#FF5252",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
