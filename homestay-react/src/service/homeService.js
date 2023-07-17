import axios from "axios";

export const getAllListRoom = async () => {
  try {
    const result = await axios.get("http://localhost:8080/api/public/room");
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
