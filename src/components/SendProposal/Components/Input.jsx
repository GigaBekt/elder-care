import { View, TextInput, Text } from "react-native";
import { CurrencyDollar } from "phosphor-react-native";

// CSS
import style from "../style";

const Input = ({ price, setPrice }) => {
  return (
    <>
      <View style={style.inputBox}>
        <TextInput
          style={style.input}
          placeholder="Price"
          placeholderTextColor="#9CA3AF"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />
        {price.length > 0 && (
          <CurrencyDollar size={20} weight="bold" color="#111827" />
        )}
      </View>

      <Text style={style.reciveText}>You’ll receive</Text>
      <Text style={style.estimateText}>
        The estimate amount you’ll receive after service fees
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Text
          style={[
            style.reciveText,
            {
              fontWeight: "600",
              color: "#031647",
              marginTop: 0,
            },
          ]}
        >
          {price !== null && price.length > 0
            ? parseFloat(price).toFixed(2)
            : "XX.XX"}
        </Text>
        <CurrencyDollar size={16} weight="bold" color="#031647" />
      </View>
    </>
  );
};
export default Input;
