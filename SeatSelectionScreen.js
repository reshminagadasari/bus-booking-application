import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

const LOWER_DECK = [
  { id: "L1", price: 899, available: true },
  { id: "L2", price: 550, available: true },
  { id: "L3", price: 550, available: false },
  { id: "L4", price: 550, available: true },
  { id: "L5", price: 550, available: true },
];

const UPPER_DECK = [
  { id: "U1", price: 850, available: true },
  { id: "U2", price: 780, available: true },
  { id: "U3", price: 780, available: false },
  { id: "U4", price: 780, available: true },
];

export default function SeatSelectionScreen({ navigation, route }) {
  const { from, to, journeyDate, bus } = route.params || {};

  const [selectedSeat, setSelectedSeat] = useState(null);

  const renderSeat = (seat) => {
    const isSelected = selectedSeat?.id === seat.id;

    return (
      <Pressable
        key={seat.id}
        disabled={!seat.available}
        onPress={() => setSelectedSeat(seat)}
        style={[
          styles.seat,
          !seat.available && styles.sold,
          isSelected && styles.selected,
        ]}
      >
        <Text style={styles.seatText}>₹{seat.price}</Text>
        {!seat.available && <Text style={styles.soldText}>Sold</Text>}
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Seats</Text>
        <Text style={styles.route}>
          {from} → {to}
        </Text>
      </View>

      {/* WOMEN OFFER */}
      <View style={styles.offer}>
        <Text style={styles.offerText}>Women deal 10% OFF</Text>
      </View>

      <ScrollView>
        <View style={styles.deckRow}>
          {/* LOWER DECK */}
          <View style={styles.deck}>
            <Text style={styles.deckTitle}>Lower deck</Text>
            {LOWER_DECK.map(renderSeat)}
          </View>

          {/* UPPER DECK */}
          <View style={styles.deck}>
            <Text style={styles.deckTitle}>Upper deck</Text>
            {UPPER_DECK.map(renderSeat)}
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.busName}>{bus?.travelName}</Text>
          <Text style={styles.busInfo}>
            {bus?.busType} · {journeyDate}
          </Text>
        </View>

        <Pressable
          disabled={!selectedSeat}
          style={[
            styles.continueBtn,
            !selectedSeat && styles.disabled,
          ]}
          onPress={() =>
            navigation.navigate("BoardingDropping", {
              from,
              to,
              journeyDate,
              bus,
              seat: selectedSeat,
            })
          }
        >
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },

  header: {
    padding: 14,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  route: {
    fontSize: 12,
    color: "#666",
  },

  offer: {
    backgroundColor: "#FCE4EC",
    padding: 8,
    alignItems: "center",
  },
  offerText: {
    color: "#C2185B",
    fontSize: 12,
    fontWeight: "bold",
  },

  deckRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  deck: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "45%",
  },
  deckTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  seat: {
    borderWidth: 2,
    borderColor: "#4CAF50",
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    alignItems: "center",
  },
  seatText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  sold: {
    borderColor: "#ccc",
    backgroundColor: "#eee",
  },
  soldText: {
    fontSize: 10,
    color: "#999",
  },
  selected: {
    backgroundColor: "#C8E6C9",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  busName: {
    fontWeight: "bold",
  },
  busInfo: {
    fontSize: 11,
    color: "#666",
  },

  continueBtn: {
    backgroundColor: "#FF5252",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  disabled: {
    backgroundColor: "#ccc",
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
