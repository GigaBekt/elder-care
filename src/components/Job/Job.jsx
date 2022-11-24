import { CalendarBlank, Clock } from "phosphor-react-native";
import { Text, View, Image, TouchableHighlight } from "react-native";

// CSS
import style from "./style";

const Job = ({ item, openModal }) => {
  const result = new Date(item.datetime);
  const date = result.getDate();
  const hours = result.getHours().toString().padStart(2, "0");
  const min = result.getMinutes().toString().padStart(2, "0");
  const month = result.toLocaleString("en-US", { month: "long" });
  const fullDate = date + " " + month + ", " + hours + ":" + min;

  return (
    <>
      <TouchableHighlight
        underlayColor="none"
        onPress={() => openModal(item.id)}
        style={style.box}
      >
        <>
          <View style={style.header}>
            <View style={style.user}>
              {/* item.profile.image */}
              <Image source={require("../../Assets/avatar.png")} />
              <Text style={style.nameText}>
                {item.user.profile.first_name}{" "}
                {item.user.profile.last_name.substring(0, 1)}.
              </Text>
            </View>
            <View style={style.type}>
              <Text style={style.typeText}>{item.care_service.name}</Text>
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
                <Text style={style.dateTime}>{fullDate}</Text>
                <Text style={style.paraText}>Date</Text>
              </View>
            </View>
            <View style={style.singleBox}>
              <View style={style.circle}>
                <Clock size={20} weight="bold" color="#1249CB" />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={style.dateTime}>{item.duration_hours} Hours</Text>
                <Text style={style.paraText}>Duration</Text>
              </View>
            </View>
          </View>
        </>
      </TouchableHighlight>
    </>
  );
};
export default Job;
