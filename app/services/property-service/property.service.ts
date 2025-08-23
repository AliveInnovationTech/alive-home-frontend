import axios from "axios";

// CREATE A PROPERTY REQUEST
export const createPropertyRequest = async (payload: any, token: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/api/v1/properties/create`,
      payload,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
