import { FlatList, View } from "react-native";

// Components
import ActiveBox from "../../../../components/Active";

const Active = ({ activeJobs, setReview, setOpenReview }) => {
  const renderItem = ({ item }) => {
    return (
      <ActiveBox
        item={item}
        setReview={setReview}
        setOpenReview={setOpenReview}
      />
    );
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
