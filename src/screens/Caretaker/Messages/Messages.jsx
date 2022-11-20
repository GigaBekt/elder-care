import { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";

// Components
import Loader from "./Loader";

// Css
import style from "../../../components/Header/styles";
import messageStyle from "./style";

const Messages = ({ navigation }) => {
  const abortController = new AbortController();
  const [loader, setLoader] = useState(true);
  const [active, setActive] = useState("Active");
  const [data, setData] = useState([]);

  const getMessages = (props) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setData(res.data);
        }
      })
      .catch((err) => console.log(err?.response))
      .finally(() => setLoader(false));
  };
  const onChange = (props) => {
    setLoader(true);
    setActive(props);
    getMessages(props);
  };

  useEffect(() => {
    getMessages("Active");
    return () => {
      abortController.abort();
    };
  }, []);

  const renderItem = ({ item, index }) => (
    <TouchableHighlight
      underlayColor={"none"}
      onPress={() => navigation.navigate("message details", { info: item })}
    >
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
    <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <View style={[style.headerMainBox, { paddingTop: 80 }]}>
        <View style={style.homeHeader}>
          <Text style={style.headerHeading}>Messages</Text>
        </View>

        <View style={style.tab}>
          <TouchableOpacity
            onPress={() => onChange("Active")}
            style={style.singleTab}
          >
            <Text
              style={[
                style.tabMenuText,
                active === "Active" && style.activeMenu,
              ]}
            >
              Active
            </Text>
            {active === "Active" && <View style={style.activeNav} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChange("Past")}
            style={[style.singleTab]}
          >
            <Text
              style={[style.tabMenuText, active === "Past" && style.activeMenu]}
            >
              Past
            </Text>
            {active === "Past" && <View style={style.activeNav} />}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: "#F9FAFB", paddingHorizontal: 13 }}>
        {loader ? (
          <>
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={{ marginTop: 2 }}
          />
        )}
      </View>
    </View>
  );
};
export default Messages;
