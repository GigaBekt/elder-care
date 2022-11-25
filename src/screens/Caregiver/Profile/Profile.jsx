import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ArrowRight,
  CaretRight,
  CreditCard,
  SignOut,
} from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
  // 447458196482

  // "resolutions": {
  //   "react-native-reanimated": "^2.9.1"
  // }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <Text style={style.heading}>Profile</Text>

      <View style={{ paddingHorizontal: 13 }}>
        <View style={style.balanceBox}>
          <View style={style.singleBox}>
            <CreditCard size={32} color="#1249CB" />
            <Text style={style.text}>Balance</Text>
          </View>
          <View style={style.singleBox}>
            <Text style={style.total}>$36.00</Text>
            <CaretRight size={24} />
          </View>
        </View>

        <View style={style.nav}>
          <Text style={style.headText}>Profile Settings</Text>
          <View style={style.singleBtn}>
            <Text style={style.profileText}>Location</Text>
            <CaretRight size={24} />
          </View>
          <View style={style.singleBtn}>
            <Text style={style.profileText}>Care services</Text>
            <CaretRight size={24} />
          </View>
          <View style={style.singleBtn}>
            <Text style={style.profileText}>Experience</Text>
            <CaretRight size={24} />
          </View>
          <View style={style.singleBtn}>
            <Text style={style.profileText}>Personal Settings</Text>
            <CaretRight size={24} />
          </View>
          <View style={style.singleBtn}>
            <Text style={style.profileText}>Hobbie & Interests</Text>
            <CaretRight size={24} />
          </View>
          <View style={[style.singleBtn, { borderBottomWidth: 0 }]}>
            <Text style={[style.profileText]}>Notifications</Text>
            <CaretRight size={24} />
          </View>
        </View>

        <TouchableOpacity onPress={logout} style={style.balanceBox}>
          <View
            style={[
              style.singleBtn,
              {
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 13,
                borderBottomWidth: 0,
              },
            ]}
          >
            <Text style={[style.profileText]}>Logout</Text>
            <SignOut size={24} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
