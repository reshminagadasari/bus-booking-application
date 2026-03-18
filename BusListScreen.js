import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";

const BUS_LIST = [
  {
    id: "1",
    startTime: "23:00",
    endTime: "07:45",
    duration: "8h 45m",
    seats: "32 Seats (8 Single)",
    travelName: "Rajeswari Travels",
    busType: "Non A/C Seater / Sleeper (2+1)",
    rating: 3.7,
    reviews: 156,
    price: 499,
    tags: ["80% On Time", "Previously booked by you"],
    womenOffer: true,
  },
  {
    id: "2",
    startTime: "00:05",
    endTime: "08:05",
    duration: "8h 00m",
    seats: "26 Seats (5 Single)",
    travelName: "IntrCity SmartBus",
    busType: "Bharat Benz A/C Seater / Sleeper (2+1)",
    rating: 4.7,
    reviews: 496,
    price: 499,
    tags: ["tripReward"],
    womenOffer: false,
  },
  {
    id: "3",
    startTime: "01:20",
    endTime: "09:35",
    duration: "8h 15m",
    seats: "37 Seats (10 Single)",
    travelName: "IntrCity SmartBus",
    busType: "A/C Sleeper (2+1)",
    rating: 4.7,
    reviews: 510,
    price: 439,
    tags: [],
    womenOffer: false,
  },
];

export default function BusListScreen({ navigation, route }) {
  const {
    from = "LB Nagar, Hyderabad",
    to = "Nellore",
    journeyDate = "22 Dec",
  } = route.params || {};

  const renderBus = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate("SeatSelection", {
          from,
          to,
          journeyDate,
          bus: {
            travelName: item.travelName,
            busType: item.busType,
            rating: item.rating,
          },
        })
      }
    >
      {/* TIME + PRICE */}
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.time}>
            {item.startTime} — {item.endTime}
          </Text>
          <Text style={styles.subText}>
            {item.duration} · {item.seats}
          </Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.price}>₹{item.price}</Text>
          <Text style={styles.onwards}>Onwards</Text>
        </View>
      </View>

      {/* TRAVEL NAME */}
      <Text style={styles.travelName}>{item.travelName}</Text>
      <Text style={styles.busType}>{item.busType}</Text>

      {/* TAGS */}
      <View style={styles.tagsRow}>
        {item.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* WOMEN OFFER */}
      {item.womenOffer && (
        <View style={styles.offer}>
          <Text style={styles.offerText}>Women 10% OFF</Text>
        </View>
      )}

      {/* RATING */}
      <View style={styles.ratingBox}>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
        <Text style={styles.review}>{item.reviews}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.route}>
          {from} → {to}
        </Text>
        <Text style={styles.date}>{journeyDate}</Text>
      </View>

      {/* FILTER BAR */}
      <View style={styles.filterRow}>
        <View style={styles.filter}><Text>Filter & Sort</Text></View>
        <View style={styles.filter}><Text>Primo Bus</Text></View>
        <View style={styles.filter}><Text>Deals</Text></View>
      </View>

      {/* BUS LIST */}
      <FlatList
        data={BUS_LIST}
        keyExtractor={(item) => item.id}
        renderItem={renderBus}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 12,
  },
  header: {
    marginBottom: 10,
  },
  route: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    color: "#666",
    fontSize: 12,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filter: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    width: "32%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    color: "#777",
    fontSize: 12,
  },
  right: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  onwards: {
    fontSize: 11,
    color: "#777",
  },
  travelName: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 6,
  },
  busType: {
    color: "#666",
    fontSize: 12,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  tag: {
    backgroundColor: "#E0F2F1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginTop: 4,
  },
  tagText: {
    fontSize: 10,
    color: "#00796B",
  },
  offer: {
    backgroundColor: "#FCE4EC",
    padding: 6,
    borderRadius: 8,
    marginTop: 6,
  },
  offerText: {
    fontSize: 11,
    color: "#C2185B",
  },
  ratingBox: {
    position: "absolute",
    right: 12,
    bottom: 12,
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: "center",
  },
  rating: {
    fontWeight: "bold",
    fontSize: 12,
  },
  review: {
    fontSize: 10,
    color: "#555",
  },
});
