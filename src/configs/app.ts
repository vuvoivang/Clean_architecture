type Config = {
  isProd: boolean;
  production: {
    api_base_url: string | boolean | undefined;
  };
  development: {
    api_base_url: string | boolean | undefined;
  };
};

const appConfig: Config = {
  isProd: process.env.NODE_ENV === "production",
  production: {
    api_base_url: process.env.API_HOST,
  },
  development: {
    api_base_url: process.env.API_HOST,
  },
};

export const API_BASE_URL = appConfig.isProd
  ? appConfig.production.api_base_url
  : appConfig.development.api_base_url;

export default appConfig;
