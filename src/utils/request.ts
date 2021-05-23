import Url from 'url';
import getEndpointParams from './getEndpointParams';

export default async function req(endpoint: string) {
  const uri = Url.format(getEndpointParams(endpoint));
  const response = await fetch(uri).then((res) => res.json());

  return response;
}
