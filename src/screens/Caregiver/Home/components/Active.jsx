import { FlatList, View } from "react-native";

// Components
import ActiveBox from "../../../../components/Active";

const Active = ({ activeJobs }) => {
  const renderItem = ({ item }) => {
    return <ActiveBox item={item} />;
  };

  return (
    <View style={{ marginTop: 24 }}>
      <FlatList
        data={activeJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Active;
