import {
  Bell,
  CaretRight,
  CreditCard,
  Smiley,
  Gear,
} from "phosphor-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";

const Profile = () => {
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
          <View style={[style.singleBtn, { borderBottomWidth: 0 }]}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Bell weight="duotone" color="#1249CB" size={32} />
              <Text style={style.profileText}>Notification</Text>
            </View>
            <CaretRight size={24} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
