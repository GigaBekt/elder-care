import { View, Text } from "react-native";

// CSS
import style from "./styles";

const Header = () => {
  return (
    <View style={style.headerMainBox}>
      <View style={style.homeHeader}>
        <Text
          //
          //
          style={style.headerHeading}
        >
          Find Task
        </Text>
        <Text style={style.balance}>
          Balance: <Text style={style.amount}>$0.00</Text>
        </Text>
      </View>

      <View style={style.tab}>
        <View style={style.singleTab}>
          <Text style={[style.tabMenuText, style.activeMenu]}>Most Recent</Text>
          <View style={style.activeNav} />
        </View>
        <View style={style.singleTab}>
          <Text style={style.tabMenuText}>Urgent</Text>
        </View>
        <View style={style.singleTab}>
          <Text style={style.tabMenuText}>Active</Text>
        </View>
      </View>
    </View>
  );
};
export default Header;
