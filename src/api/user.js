import axios from "axios";

export const fetchUserData = async () => {
  try {
    return await axios.get(process.env.REACT_APP_URL_DATA_USER, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });
  } catch (error) {
    console.error("Message error:", error.message);
  }
};
