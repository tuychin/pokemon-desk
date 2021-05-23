import apiConfig from '../api-config';

type TypeGetEndpointParams = (
  endpoint: string,
) => {
  protocol: string;
  host: string;
  pathname: string;
};

export default function getEndpointParams(endpoint): TypeGetEndpointParams {
  return {
    ...apiConfig.client.server,
    ...apiConfig.client.endpoint[endpoint].uri,
  };
}
