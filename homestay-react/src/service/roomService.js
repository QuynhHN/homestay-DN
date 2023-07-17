import axios from "axios";

export const getRoomById = async (id) => {
  try {
    const result = await axios.get(
      "http://localhost:8080/api/public/room/" + id
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
