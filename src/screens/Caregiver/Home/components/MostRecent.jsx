import React from "react";
import { FlatList, View } from "react-native";

// Components
import Job from "../../../../components/Job/Job";

const MostRecent = ({ mostRecent, openModal }) => {
  const renderItem = ({ item }) => {
    return <Job item={item} openModal={openModal} />;
  };

  return (
    <View style={{ marginTop: 24 }}>
      <FlatList
        data={mostRecent}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default React.memo(MostRecent);
