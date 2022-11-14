import { Image, Text, TouchableHighlight, View } from "react-native";
import { CalendarBlank, Clock, Phone } from "phosphor-react-native";

// CSS
import Style from "./style";

const Active = ({ item }) => {
  return (
    <View style={Style.mainActiveBox}>
      <View style={Style.activeHeader}>
        <View style={Style.user}>
          <Image
            style={Style.image}
            source={require("../../Assets/avatar.png")}
          />
          <Text style={Style.userName}>
            {item.firstName} {item.lastName}
          </Text>
        </View>

        <View style={Style.type}>
          <Text style={Style.typeText}>{item.type}</Text>
        </View>
      </View>

      <View style={Style.body}>
        <View style={Style.singleBox}>
          <View style={Style.circle}>
            <CalendarBlank weight="bold" size={20} color="#1249CB" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={Style.dateTime}>{item.date}</Text>
            <Text style={Style.paraText}>Date</Text>
          </View>
        </View>

        <View style={Style.singleBox}>
          <View style={Style.circle}>
            <Clock size={20} weight="bold" color="#1249CB" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={Style.dateTime}>{item.hours} Hours</Text>
            <Text style={Style.paraText}>Duration</Text>
          </View>
        </View>

        <View style={Style.singleBox}>
          <View style={Style.circle}>
            <Phone size={20} weight="bold" color="#1249CB" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={Style.dateTime}>+1516-298-0525</Text>
            <Text style={Style.paraText}>Contact Information</Text>
          </View>
        </View>
      </View>

      <TouchableHighlight
        style={[Style.btn, item.status && { backgroundColor: "#1249CB" }]}
      >
        <Text style={[Style.btnText, item.status && { color: "#fff" }]}>
          {item.status ? "Complete Job" : "Start Job"}
        </Text>
      </TouchableHighlight>
    </View>
  );
};
export default Active;
