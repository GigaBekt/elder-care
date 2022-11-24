import { View, Text, TouchableHighlight } from "react-native";

// CSS
import style from "./styles";

const Header = ({ setIndex, count, idx }) => {
  const data = [
    { id: 0, title: "Most Recent" },
    { id: 1, title: "urgent" },
    { id: 2, title: "active" },
  ];

  return (
    <View style={style.headerMainBox}>
      <View style={style.homeHeader}>
        <Text style={style.headerHeading}>Find Task</Text>
        <Text style={style.balance}>
          Balance: <Text style={style.amount}>$0.00</Text>
        </Text>
      </View>

      <View style={style.tab}>
        {data.map((item, index) => (
          <TouchableHighlight
            key={item.id}
            underlayColor="none"
            onPress={() => setIndex(index)}
          >
            <View
              style={[
                style.singleTab,
                item.title == "active" && {
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Text
                style={[style.tabMenuText, idx === index && style.activeMenu]}
              >
                {item.title}
              </Text>
              {item.title == "active" && count > 0 && (
                <View style={style.count}>
                  <Text style={style.countText}>{count}</Text>
                </View>
              )}
              {idx === index && <View style={style.activeNav} />}
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};
export default Header;
