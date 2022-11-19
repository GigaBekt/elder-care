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
import AsyncStorage from "@react-native-async-storage/async-storage";
import SkeletonContent from "react-native-skeleton-content";
// Components
import style from "./style";
import Tasks from "../../../Api/tasks";
import TasksComp from "../../../components/Tasks";
import NoTasks from "./components/NoTasks";

const Home = ({ navigation, route }) => {
  const tasks = new Tasks();

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getTasks = async () => {
    const token = await AsyncStorage.getItem("token");
    tasks
      .myTasks(token)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err?.response))
      .finally(() => setLoader(false));
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
        <View style={style.headingBox}>
          <Text style={style.heading}>My Tasks</Text>
          {!loader && (
            <TouchableOpacity
              style={[style.btn, { marginTop: 0, paddingHorizontal: 18 }]}
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
          )}
        </View>

        {loader ? (
          <SkeletonContent
            containerStyle={{
              flex: 1,
              width: "100%",
              marginTop: 24,
              paddingHorizontal: 13,
            }}
            duration={1500}
            layout={[
              { width: "100%", height: 144, marginBottom: 12 },
              { width: "100%", height: 144, marginBottom: 12 },
              { width: "100%", height: 144, marginBottom: 12 },
              { width: "100%", height: 144, marginBottom: 12 },
            ]}
          />
        ) : data.length > 0 ? (
          <FlatList
            style={{ paddingTop: 16 }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TasksComp key={index} item={item} />
            )}
          />
        ) : (
          <NoTasks navigation={navigation} />
        )}
      </SafeAreaView>
    </>
  );
};
export default Home;
