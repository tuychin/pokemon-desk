import apiConfig from '../api-config';

type TypeGetEndpointParams = (
  endpoint: string,
  query: any,
) => {
  protocol: string;
  host: string;
  pathname: string;
  params: object;
} | void;

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

const getEndpointParams: TypeGetEndpointParams = (endpoint, params) => {
  const { method, uri }: IEndpoint = apiConfig.client.endpoint[endpoint as keyof typeof apiConfig.client.endpoint];
  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...apiConfig.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val as keyof typeof query];
      return result;
    }

    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
};

export default getEndpointParams;
