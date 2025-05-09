import { axiosInstance } from '../axiosInstance';
import { getAccessToken } from '@utils/token';
import { Bikers } from './fetchMarkers.types';

const accessToken = getAccessToken();
const FetchMarkers = async (): Promise<Bikers[]> => {
  try {
    const response = await axiosInstance.get(
      'bikers/free?cityCode=tehran&clientType=SNAPPFOOD',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.freeBikers.map((biker: any) => ({
      lat: biker.lat,
      long: biker.long,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default FetchMarkers;
