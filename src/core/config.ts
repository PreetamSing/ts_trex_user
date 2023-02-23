import '@core/declarations';
import { Environments } from './constants/environments';

export interface ConfigInterface {
  PORT: number;
  ENVIRONMENT: Environments;
  PVT_KEY_SECRET: string;
  JWT_EXPIRY_SECS: number;
}

export default (): ConfigInterface => {
  const { NODE_ENV = Environments.DEV } = process.env;
  if (!Object.keys(Environments).includes(NODE_ENV)) {
    throw new Error('Invalid NODE_ENV');
  }

  const environment = NODE_ENV as Environments;

  return {
    PORT: parseInt(process.env[`${environment}_PORT`]),
    ENVIRONMENT: environment,
    PVT_KEY_SECRET: process.env.PVT_KEY_SECRET,
    JWT_EXPIRY_SECS: parseInt(process.env.JWT_EXPIRY_SECS),
  };
};
