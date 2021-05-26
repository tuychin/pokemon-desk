import Url from 'url';
import getEndpointParams from './getEndpointParams';

export default async function req<T>(
  endpoint: string,
  query: object,
  endpointId: string | number | undefined,
): Promise<T> {
  const endpointParams = getEndpointParams(endpoint, query, endpointId);
  const uri = Url.format(endpointParams);
  const response = await fetch(uri).then((res) => res.json());

  return response;
}
