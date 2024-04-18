import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export interface IBanner {
    _id?: string;
    imageUrl : string;
}
const Banner = {
  getAllBannerItems: async (token: string) => {
    return axios
      .get(
        `${baseUrl}/banner`,
        { headers: { Authorization: `Bearer ${token}` } }
     
      )
      .then((res) => res.data)
      .catch((error) =>console.log(error));
  },
};

export default Banner;
