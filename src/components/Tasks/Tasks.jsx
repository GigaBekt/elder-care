import { CalendarBlank, Clock } from "phosphor-react-native";
import { Text, View, Image, TouchableHighlight } from "react-native";

// CSS
import style from "../Job/style";

const Tasks = ({ item, openModal }) => {
  const result = new Date(item.datetime);
  const date = result.getDate();
  const hours = result.getHours().toString().padStart(2, "0");
  const min = result.getMinutes().toString().padStart(2, "0");
  const month = result.toLocaleString("default", { month: "long" });
  const fullDate = date + " " + month + ", " + hours + ":" + min;

  return (
    <>
      <TouchableHighlight
        underlayColor="none"
        onPress={() => openModal(item.id)}
        style={style.box}
      >
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={[style.footer, { flexDirection: "column" }]}>
              <View style={style.singleBox}>
                <View style={style.circle}>
                  <CalendarBlank weight="bold" size={20} color="#1249CB" />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={style.dateTime}>{fullDate}</Text>
                  <Text style={style.paraText}>Date</Text>
                </View>
              </View>
              <View style={[style.singleBox, { marginTop: 14 }]}>
                <View style={style.circle}>
                  <Clock size={20} weight="bold" color="#1249CB" />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={style.dateTime}>
                    {item.duration_hours} Hours
                  </Text>
                  <Text style={style.paraText}>Duration</Text>
                </View>
              </View>
            </View>
            <View style={style.header}>
              <View style={style.type}>
                <Text style={style.typeText}>{item.care_service.name}</Text>
              </View>
            </View>
          </View>
          <Text style={style.taskText}>{item.description}</Text>
        </>
      </TouchableHighlight>
    </>
  );
};
export default Tasks;
