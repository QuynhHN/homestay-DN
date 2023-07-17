import axios from "axios";

export const getAllFeedbackInHomePage = async () => {
  try {
    const result = await axios.get("http://localhost:8080/api/public/feedback");
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
