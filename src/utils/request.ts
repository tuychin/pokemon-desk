import Url from 'url';
import getEndpointParams from './getEndpointParams';

export default async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getEndpointParams(endpoint, query));
  const response = await fetch(uri).then((res) => res.json());

  return response;
}
