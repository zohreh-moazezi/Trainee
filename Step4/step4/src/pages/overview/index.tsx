import BikerMap from './components/Map';
import FetchMarkers from '@api/map/fetchMarkers';
import BikerTable from './components/Table';
import { useQuery } from '@tanstack/react-query';
import { Bikers } from '@api/map/fetchMarkers.types';
import { BikerData } from '@api/table/fetchInformation.types';
import FetchAllocations from '@api/table/fetchAllocations';
import * as Styled from './styled';

const OverviewPage = () => {
  const { data: markers } = useQuery<Bikers[], Error>({
    queryKey: ['markers'],
    queryFn: FetchMarkers,
  });

  const { data: allocations } = useQuery<BikerData[], Error>({
    queryKey: ['allocations'],
    queryFn: FetchAllocations,
  });
  const transformedData = allocations?.map(({ name, radius }) => ({
    name,
    radius,
  }));

  return (
    <Styled.container>
      <Styled.header>Over View</Styled.header>
      {markers && <BikerMap data={markers} />}
      {transformedData && <BikerTable data={transformedData} />}
    </Styled.container>
  );
};

export default OverviewPage;
