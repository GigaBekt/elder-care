import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

import style from "../../../components/Header/styles";
import messageStyle from "./style";

const Messages = () => {
  const abortController = new AbortController();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([
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
  ]);
  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => console.log("click", item.id)}>
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
    </Pressable>
  );

  const [active, setActive] = useState("Active");

  const getMessages = (props) => {
    console.log(props, "-- get messages");
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments/100")
      .then((res) => {
        return;
      })
      .catch((err) => console.log(err?.response))
      .finally(() => setLoader(false));
  };
  const onChange = (props) => {
    setActive(props);
    getMessages(props);
  };

  useEffect(() => {
    getMessages("Active");
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
        <View style={style.headerMainBox}>
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
                style={[
                  style.tabMenuText,
                  active === "Past" && style.activeMenu,
                ]}
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
              <Placeholder
                style={{ marginTop: 24 }}
                Animation={Fade}
                Left={(props) => (
                  <PlaceholderMedia isRound={true} style={[props.style]} />
                )}
              >
                <PlaceholderLine width={30} />
                <PlaceholderLine width={100} />
              </Placeholder>
              <Placeholder
                style={{ marginTop: 24 }}
                Animation={Fade}
                Left={(props) => (
                  <PlaceholderMedia isRound={true} style={[props.style]} />
                )}
              >
                <PlaceholderLine width={30} />
                <PlaceholderLine width={100} />
              </Placeholder>
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
    </>
  );
};
export default Messages;
