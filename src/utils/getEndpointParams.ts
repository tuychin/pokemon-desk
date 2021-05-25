import apiConfig from '../api-config';

type TypeGetEndpointParams = (
  endpoint: string,
  query: object,
) => {
  protocol: string;
  host: string;
  pathname: string;
  query: object;
};

export default function getEndpointParams(endpoint, query): TypeGetEndpointParams {
  return {
    ...apiConfig.client.server,
    ...apiConfig.client.endpoint[endpoint].uri,
    query,
  };
}
