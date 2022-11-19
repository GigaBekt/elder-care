import { FlatList } from "react-native";

const Suggestions = ({ suggestions, open, renderItem }) => {
  return (
    <>
      {suggestions.length > 0 && open && (
        <FlatList
          data={suggestions}
          renderItem={renderItem}
          keyExtractor={(item) => item.place_id}
        />
      )}
    </>
  );
};
export default Suggestions;
