import { CalendarBlank, Clock } from "phosphor-react-native";
import { Text, View, Image } from "react-native";

// CSS
import style from "./style";

const Job = () => {
  return (
    <View style={style.box}>
      <View style={style.header}>
        <View style={style.user}>
          <Image source={require("../../Assets/avatar.png")} />
          <Text style={style.nameText}>Bruce Wayne</Text>
        </View>
        <View style={style.type}>
          <Text style={style.typeText}>Personal Care</Text>
        </View>
      </View>

      <View style={style.body}>
        <Text style={style.bodyText}>
          Personal care tasks may not be performed at this level. Level II –
          Home Management Personal Home Aide Services at this level are intended
          to provide support to individuals
        </Text>
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
            <Text style={style.dateTime}>1 Hours</Text>
            <Text style={style.paraText}>Duration</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Job;
