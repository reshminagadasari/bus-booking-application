import React from "react";
import { View, Text, Modal, Pressable } from "react-native";

export default function SeatLegendModal({ visible, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex:1, backgroundColor:"#0006", justifyContent:"center" }}>
        <View style={{
          backgroundColor:"#fff",
          margin:20,
          padding:20,
          borderRadius:12
        }}>
          <Text style={{ fontWeight:"bold", marginBottom:10 }}>
            Know your seat types
          </Text>

          <Text>🟩 Available</Text>
          <Text>⬜ Booked</Text>
          <Text>🔵 Female only</Text>
          <Text>🟢 Selected</Text>

          <Pressable onPress={onClose} style={{ marginTop:15 }}>
            <Text style={{ color:"#FF5252" }}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
