import Url from 'url';
import getEndpointParams from './getEndpointParams';

export default async function req(endpoint: string, query: object) {
  const uri = Url.format(getEndpointParams(endpoint, query));
  const response = await fetch(uri).then((res) => res.json());

  return response;
}
