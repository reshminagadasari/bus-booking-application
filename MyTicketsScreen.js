import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function MyTicketsScreen({ route }) {
  const [tickets, setTickets] = useState([]);

  // Receive new booking
  useEffect(() => {
    if (route.params?.booking) {
      setTickets((prev) => [route.params.booking, ...prev]);
    }
  }, [route.params?.booking]);

  const renderTicket = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.route}>
        {item.from} → {item.to}
      </Text>

      <Text style={styles.date}>{item.journeyDate}</Text>

      <Text style={styles.travel}>{item.travelName}</Text>

      <View style={styles.row}>
        <Text>Seat: {item.seatNumber}</Text>
        <Text>₹{item.seatPrice}</Text>
      </View>

      <Text>
        Passenger: {item.passengerName} (
        {item.passengerGender}, {item.passengerAge})
      </Text>

      <Text>
        Boarding: {item.boardingPoint} (
        {item.boardingTime})
      </Text>

      <Text style={styles.ticketNo}>
        Ticket No: {item.ticketNumber}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tickets</Text>

      {tickets.length === 0 ? (
        <Text style={styles.empty}>
          No bookings yet
        </Text>
      ) : (
        <FlatList
          data={tickets}
          keyExtractor={(item) => item.ticketNumber}
          renderItem={renderTicket}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#777",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  route: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "#666",
  },
  travel: {
    fontWeight: "bold",
    marginVertical: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  ticketNo: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#D32F2F",
  },
});
