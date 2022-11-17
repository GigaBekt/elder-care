import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Plus } from "phosphor-react-native";

// Components
import style from "./style";
import Tasks from "../../../Api/tasks";
import TasksComp from "../../../components/Tasks";
import NoTasks from "./components/NoTasks";

const Home = ({ navigation, route }) => {
  const tasks = new Tasks();

  const [data, setData] = useState([]);

  const getTasks = () => {
    tasks
      .myTasks("1|0SgYZTMEPZoxWgmxnCQPVWagRaXl4rA38w25ZwXH")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err?.response));
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
        <View style={style.headingBox}>
          <Text style={style.heading}>My Tasks</Text>
          {data.length > 0 && (
            <TouchableOpacity
              style={[style.btn, { marginTop: 0, paddingHorizontal: 18 }]}
              onPress={() => console.log("click")}
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
          )}
        </View>

        {data.length > 0 ? (
          <FlatList
            style={{ paddingTop: 16 }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TasksComp key={index} item={item} />
            )}
          />
        ) : (
          <NoTasks />
        )}
      </SafeAreaView>
    </>
  );
};
export default Home;
