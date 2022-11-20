import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";
const Loader = () => {
  return (
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
  );
};
export default Loader;
