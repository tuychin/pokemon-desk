import apiConfig from '../api-config';

type TypeGetEndpointParams = (
  endpoint: string,
  query: object,
  endpointId: string | number | undefined,
) => {
  protocol: string;
  host: string;
  pathname: string;
  query: object;
};

export default function getEndpointParams(endpoint, query, endpointId): TypeGetEndpointParams {
  const endpointParams = {
    ...apiConfig.client.server,
    ...apiConfig.client.endpoint[endpoint].uri,
    query,
  };

  endpointParams?.pathname = endpointParams?.pathname?.replace(':id', endpointId);

  return endpointParams;
}
