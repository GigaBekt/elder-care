import SkeletonContent from "react-native-skeleton-content";

const Loader = () => {
  return (
    <SkeletonContent
      containerStyle={{ flex: 1, width: "100%", marginTop: 24 }}
      duration={1500}
      layout={[
        { width: "100%", height: 55, marginBottom: 14 },
        { width: "100%", height: 55, marginBottom: 14 },
        { width: "100%", height: 55, marginBottom: 14 },
        { width: "100%", height: 55, marginBottom: 14 },
      ]}
    />
  );
};
export default Loader;
