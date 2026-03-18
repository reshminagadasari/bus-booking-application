import React from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function PolicyBottomSheet({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      {/* Overlay */}
      <Pressable style={styles.overlay} onPress={onClose}>
        {/* Bottom Sheet */}
        <Pressable style={styles.sheet}>
          {/* Close Button */}
          <Pressable onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕</Text>
          </Pressable>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Other policies</Text>

            <View style={styles.item}>
              <Text style={styles.itemTitle}>👶 Child passenger policy</Text>
              <Text style={styles.itemText}>
                Children above the age of 6 will need a ticket
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.itemTitle}>🎒 Luggage policy</Text>
              <Text style={styles.itemText}>
                Excess baggage over 20 kgs per passenger will be chargeable
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.itemTitle}>🐶 Pets policy</Text>
              <Text style={styles.itemText}>Pets are not allowed</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.itemTitle}>🍺 Liquor policy</Text>
              <Text style={styles.itemText}>
                Carrying or consuming liquor inside the bus is prohibited
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.itemTitle}>⏱ Pickup time policy</Text>
              <Text style={styles.itemText}>
                Bus operator is not obligated to wait beyond the scheduled
                departure time
              </Text>
            </View>
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000066",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: "80%",
  },
  closeBtn: {
    alignSelf: "center",
    marginBottom: 10,
  },
  closeText: {
    fontSize: 22,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    marginBottom: 14,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemText: {
    color: "#555",
    fontSize: 13,
    marginTop: 4,
  },
});
