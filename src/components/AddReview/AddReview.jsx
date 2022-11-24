import {
  Modal,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";

// Components
import ModalHeader from "../Header/ModalHeader";
import Box from "./Box";

// CSS
import reviewStyle from "./style";
import style from "../Job/style";
import { useState } from "react";

const AddReview = ({ item, show, close }) => {
  const [review, setReview] = useState("");
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating] = useState([1, 2, 3, 4, 5]);

  const CustomRatingBar = () => {
    return (
      <View style={style.customRatingBarStyle}>
        {maxRating.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                style={style.starImageStyle}
                source={
                  item <= defaultRating
                    ? require("../../Assets/Vector.png")
                    : require("../../Assets/VectorEmpty.png")
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={show}
      onRequestClose={close}
    >
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 13,
              paddingVertical: 24,
            }}
          >
            <ModalHeader name="Add Review" close={close} />
            <Text style={reviewStyle.heading}>Job Details</Text>
          </View>

          <Box style={style} item={item} />
          <View style={reviewStyle.line} />

          <Text
            style={[
              reviewStyle.text,
              { paddingHorizontal: 13, marginVertical: 24 },
            ]}
          >
            Rate the experience
          </Text>

          <View style={{ paddingHorizontal: 66 }}>
            <CustomRatingBar />
          </View>

          <View style={{ marginTop: 29, paddingHorizontal: 13 }}>
            <Text style={[reviewStyle.text, { marginBottom: 10 }]}>
              Add a review
            </Text>

            <TextInput
              style={reviewStyle.textarea}
              multiline={true}
              numberOfLines={10}
              onChangeText={(text) => setReview(text)}
              value={review}
              placeholder="Add Review"
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={[reviewStyle.btn]}>
          <Text style={reviewStyle.btnText}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default AddReview;
