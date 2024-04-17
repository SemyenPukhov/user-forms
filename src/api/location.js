import axios from "axios";

export const fetchUserLocation = async () => {
  try {
    return await axios.get(process.env.REACT_APP_URL_LOCATION_USER);
  } catch (error) {
    console.error("Message error:", error.message);
  }
};
