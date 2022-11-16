import { View, Image, Text } from "react-native";
import { CalendarBlank, Clock } from "phosphor-react-native";

const Box = ({ style, item }) => {
  return (
    <View style={[style.box]}>
      <View style={style.header}>
        <View style={style.user}>
          <Image source={require("../../Assets/avatar.png")} />
          <Text style={style.nameText}>
            {item.firstName} {item.lastName}
          </Text>
        </View>
        <View style={style.type}>
          <Text style={style.typeText}>{item.type}</Text>
        </View>
      </View>

      <View style={[style.footer, { marginTop: 16 }]}>
        <View style={style.singleBox}>
          <View style={style.circle}>
            <CalendarBlank weight="bold" size={20} color="#1249CB" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={style.dateTime}>{item.date}</Text>
            <Text style={style.paraText}>Date</Text>
          </View>
        </View>

        <View style={style.singleBox}>
          <View style={style.circle}>
            <Clock size={20} weight="bold" color="#1249CB" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={style.dateTime}>{item.hours} Hours</Text>
            <Text style={style.paraText}>Duration</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Box;
