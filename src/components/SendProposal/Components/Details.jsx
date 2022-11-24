import { CalendarBlank, Clock } from "phosphor-react-native";
import { View, Text } from "react-native";
// CSS
import style from "../../Job/style";
const Details = ({ item }) => {
  return (
    <>
      <View style={style.header}>
        <View style={style.type}>
          <Text style={style.typeText}>Testing</Text>
        </View>
      </View>

      <View style={style.body}>
        <Text style={style.bodyText}>{item.description}</Text>
      </View>

      <View style={style.footer}>
        <View style={style.singleBox}>
          <View style={style.circle}>
            <CalendarBlank weight="bold" size={20} color="#1249CB" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={style.dateTime}>26 January, 12:38 PM</Text>
            <Text style={style.paraText}>Date</Text>
          </View>
        </View>

        <View style={style.singleBox}>
          <View style={style.circle}>
            <Clock size={20} weight="bold" color="#1249CB" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={style.dateTime}>2 Hours</Text>
            <Text style={style.paraText}>Duration</Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default Details;
