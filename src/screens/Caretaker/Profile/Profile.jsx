import {
  Bell,
  CaretRight,
  CreditCard,
  Smiley,
  Gear,
  SignOut,
} from "phosphor-react-native";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// CSS
import style from "./style";

const Profile = ({ navigation }) => {
  const logout = async () => {
    try {
      AsyncStorage.clear();
      navigation.push("Login");
    } catch (e) {
      console.log(e, "eror, logout");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <Text style={style.heading}>Profile</Text>

      <View style={{ paddingHorizontal: 13 }}>
        <View style={style.nav}>
          <View style={style.singleBtn}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Gear weight="duotone" color="#1249CB" size={32} />
              <Text style={style.profileText}>Personal Settings</Text>
            </View>
            <CaretRight size={24} />
          </View>
          <View style={style.singleBtn}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <CreditCard weight="duotone" color="#1249CB" size={32} />
              <Text style={style.profileText}>Payment</Text>
            </View>
            <CaretRight size={24} />
          </View>
          <View style={style.singleBtn}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Smiley weight="duotone" color="#1249CB" size={32} />
              <Text style={style.profileText}>Hobbie & Interests</Text>
            </View>
            <CaretRight size={24} />
          </View>
          <View style={[style.singleBtn, { borderBottomWidth: 1 }]}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Bell weight="duotone" color="#1249CB" size={32} />
              <Text style={style.profileText}>Notification</Text>
            </View>
            <CaretRight size={24} />
          </View>

          <TouchableOpacity onPress={logout}>
            <View
              style={[
                style.singleBtn,
                {
                  justifyContent: "space-between",
                  width: "100%",
                  borderBottomWidth: 0,
                },
              ]}
            >
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <SignOut weight="duotone" color="#1249CB" size={32} />
                <Text style={[style.profileText]}>Logout</Text>
              </View>
              <CaretRight size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
