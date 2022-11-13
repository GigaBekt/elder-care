import { FlatList, View } from "react-native";

// Components
import Job from "../../../../components/Job/Job";

const Urgent = ({ urgent }) => {
  const renderItem = ({ item }) => {
    return <Job item={item} />;
  };

  return (
    <View style={{ paddingHorizontal: 13, marginTop: 24 }}>
      <FlatList
        data={urgent}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Urgent;
