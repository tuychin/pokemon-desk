import Url from 'url';
import getEndpointParams from './getEndpointParams';

interface IOptions {
  method: string;
  body?: string;
}

interface IGetEndpointParams {
  method: string;
  uri: Partial<URL>;
  body: object;
}

export default async function req<T>(endpoint: string, query: object): Promise<T> {
  const { method, uri, body }: IGetEndpointParams = getEndpointParams(endpoint, query);

  const options: IOptions = {
    method,
  };

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(Url.format(uri), options).then((res) => res.json());

  return response;
}
