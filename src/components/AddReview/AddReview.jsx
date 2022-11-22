import {
  Modal,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import StarRating from "react-native-star-rating-widget";

import { SafeAreaView } from "react-native-safe-area-context";
// Components
import ModalHeader from "../Header/ModalHeader";
import Box from "./Box";

// CSS
import reviewStyle from "./style";
import style from "../Job/style";
import { useState } from "react";

const AddReview = ({ item, show, close }) => {
  const [count, setCounter] = useState(0);
  const [review, setReview] = useState("");

  const onStarRatingPress = (rating) => {
    setCounter(rating);
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
            <StarRating
              rating={2}
              // onChange={setRating}
            />
            {/* <StarRating
              disabled={false}
              emptyStar={require("../../Assets/VectorEmpty.png")}
              fullStar={require("../../Assets/Vector.png")}
              maxStars={5}
              rating={count}
              selectedStar={(rating) => onStarRatingPress(rating)}
              starSize={44}
            /> */}
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
