import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Componenets
import Proposal from "../../../components/Proposal";

const Proposals = () => {
  const proposals = [
    {
      id: 1,
      firstName: "Bruce",
      lastName: "Wayne",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
    },
    {
      id: 2,
      firstName: "Barry",
      lastName: "Allen",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 2,
    },
    {
      id: 3,
      firstName: "Oliver",
      lastName: "Queen",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 3,
    },
    {
      id: 21,
      firstName: "Thoams",
      lastName: "Wayne",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 42,
    },
    {
      id: 31,
      firstName: "Martha",
      lastName: "Kane",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
    },
    {
      id: 51,
      firstName: "Martha",
      lastName: "Kane",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
    },
  ];

  const renderItem = ({ item }) => {
    return <Proposal item={item} />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F9FAFB", paddingHorizontal: 13 }}>
      <Text
        style={{
          fontStyle: "noraml",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 28,
        }}
      >
        Proposals
      </Text>

      <View style={{ paddingVertical: 24 }}>
        <FlatList
          data={proposals}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
export default Proposals;
