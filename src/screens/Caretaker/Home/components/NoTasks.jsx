import { Image, TouchableOpacity, View, Text } from "react-native";
import style from "../style";
import { Plus } from "phosphor-react-native";

const NoTasks = ({ navigation }) => {
  return (
    <View style={style.content}>
      <Image source={require("../../../../Assets/Graphic.png")} />
      <Text style={style.noTask}>No Tasks Found</Text>
      <Text>You don’t have any tasks created yet.</Text>
      <TouchableOpacity
        style={[
          style.btn,
          {
            width: 200,
          },
        ]}
        onPress={() => navigation.navigate("createTask first")}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={style.btnText}>Create Task</Text>
          <Plus size={22} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default NoTasks;
