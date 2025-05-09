import { BikerData } from './fetchInformation.types';
import { axiosInstance } from '@api/axiosInstance';
import { getAccessToken } from '@utils/token';

const FetchAllocations = async (): Promise<BikerData[]> => {
  const accessToken = getAccessToken();
  try {
    const allocationsResponse = await axiosInstance.get('allocations', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return allocationsResponse.data.allocations;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
export default FetchAllocations;
