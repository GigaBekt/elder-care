import { ArrowRight, CaretRight, CreditCard } from "phosphor-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";

const Profile = () => {
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
      </View>
    </SafeAreaView>
  );
};
export default Profile;
