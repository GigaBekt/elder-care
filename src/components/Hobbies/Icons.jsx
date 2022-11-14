const renderIcon = ({ props }) => {
  if (props.icon === "instruments") {
    return "🎸";
  } else if (props.icon === "basketball") {
    return "🏀";
  } else if (props.icon === "music") {
    return "🎵";
  } else if (props.icon === "snowboarding") {
    return "🏂";
  } else if (props.icon === "dance") {
    return "💃";
  } else if (props.icon === "canoe") {
    return "🛶";
  } else if (props.icon === "soccer") {
    return "⚽";
  } else if (props.icon === "art") {
    return "🎨";
  } else if (props.icon === "baking") {
    return "👨‍🍳";
  } else if (props.icon === "movies") {
    return "🍿";
  }
  return "";
};
export default renderIcon;
