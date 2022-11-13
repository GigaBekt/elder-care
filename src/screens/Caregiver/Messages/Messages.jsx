import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";

import style from "../../../components/Header/styles";
import messageStyle from "./style";

const Messages = () => {
  const data = [
    {
      id: 1,
      name: "Carolyn Gomes",
      message: "Hello, there thank you for sending me an invit...",
      date: "9/16/22",
    },
    {
      id: 2,
      name: "Carolyn Gomes",
      message: "Hello, there thank you for sending me an invit...",
      date: "9/16/22",
    },
    {
      id: 3,
      name: "Carolyn Gomes",
      message: "Hello, there thank you for sending me an invit...",
      date: "9/16/22",
    },
  ];

  const renderItem = ({ item, index }) => (
    <TouchableHighlight onPress={() => console.log("click", item.id)}>
      <View
        style={[
          messageStyle.messageMainBox,
          data.length - 1 === index && { borderBottomWidth: 0 },
        ]}
      >
        <View>
          <Image
            style={messageStyle.img}
            source={require("../../../Assets/avatar2.png")}
          />
        </View>
        <View style={messageStyle.rightBox}>
          <View style={messageStyle.info}>
            <Text style={messageStyle.name}>Carolyn Gomes</Text>
            <Text style={messageStyle.message}>9/16/22</Text>
          </View>
          <Text style={messageStyle.message}>
            Hello, there thank you for sending me an invit...
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <View style={style.headerMainBox}>
        <View style={style.homeHeader}>
          <Text style={style.headerHeading}>Messages</Text>
        </View>

        <View style={style.tab}>
          <View style={style.singleTab}>
            <Text style={[style.tabMenuText, style.activeMenu]}>Active</Text>
            <View style={style.activeNav} />
          </View>
          <View style={style.singleTab}>
            <Text style={style.tabMenuText}>Past</Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#F9FAFB", paddingHorizontal: 13 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={{ marginTop: 2 }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Messages;
