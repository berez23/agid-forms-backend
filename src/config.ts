import * as dotenv from "dotenv";

import { getNodeEnvironmentFromProcessEnv } from "italia-ts-commons/lib/environment";

import { log } from "./utils/logger";

// Without this the environment variables loaded by dotenv
// aren't available in this file.
dotenv.config();

// Server port.
const DEFAULT_SERVER_PORT = "80";
export const SERVER_PORT = parseInt(
  process.env.PORT || DEFAULT_SERVER_PORT,
  10
);

// Resolve NODE_ENV environment (defaults to PRODUCTION).
export const NODE_ENVIRONMENT = getNodeEnvironmentFromProcessEnv(process.env);

// Redirection urls
export const clientProfileRedirectionUrl =
  process.env.CLIENT_REDIRECTION_URL || "/profile.html#token={token}";

// tslint:disable-next-line: no-commented-code
// if (!clientProfileRedirectionUrl.includes("{token}")) {
//   log.error("CLIENT_REDIRECTION_URL must contains a {token} placeholder");
//   process.exit(EINVAL);
// }

export const CLIENT_ERROR_REDIRECTION_URL =
  process.env.CLIENT_ERROR_REDIRECTION_URL || "/error.html";

export const CLIENT_REDIRECTION_URL =
  process.env.CLIENT_REDIRECTION_URL || "/login";

// Set default session duration to 30 days
const DEFAULT_TOKEN_DURATION_IN_SECONDS = 3600 * 24 * 30;
export const TOKEN_DURATION_IN_SECONDS = process.env.TOKEN_DURATION_IN_SECONDS
  ? parseInt(process.env.TOKEN_DURATION_IN_SECONDS, 10)
  : DEFAULT_TOKEN_DURATION_IN_SECONDS;
log.info("Session token duration set to %s seconds", TOKEN_DURATION_IN_SECONDS);

const DEFAULT_JWT_EXPIRES_IN = "30 days";
export const JWT_EXPIRES_IN =
  process.env.JWT_EXPIRES_IN || DEFAULT_JWT_EXPIRES_IN;

export const AUTHENTICATION_BASE_PATH =
  process.env.AUTHENTICATION_BASE_PATH || "";

export const API_BASE_PATH = process.env.API_BASE_PATH || "/api/v1";

export const WEBHOOK_USER_LOGIN_PATH = "/webhook/user";
export const WEBHOOK_USER_LOGIN_BASE_URL =
  process.env.WEBHOOK_USER_LOGIN_BASE_URL || "http://localhost";

export const ADMIN_UID = 1;
export const DEFAULT_USER_ROLE_ID = "";
export const USER_ROLE_ID = process.env.USER_ROLE_ID || DEFAULT_USER_ROLE_ID;

export const JWT_SECRET = process.env.JWT_SECRET || "";

export const JSONAPI_BASE_URL = process.env.JSONAPI_BASE_URL || "";

export const ELASTICSEARCH_URL =
  process.env.ELASTICSEARCH_URL || "http://localhost:9200";

export const DUMB_IPA_VALUE_FOR_NULL = "da_indicare@x.it";

export const SESSION_PREFIX = "SESSION-";

/////////// Authentication email configuration

export const SERVICE_NAME = process.env.SERVICE_NAME || "";
export const ORGANIZATION_NAME = process.env.ORGANIZATION_NAME || "";

export const AUTHMAIL_FROM = process.env.AUTHMAIL_FROM;
export const AUTHMAIL_REPLY_TO = process.env.AUTHMAIL_REPLY_TO;
export const AUTHMAIL_TEST_ADDRESS = process.env.AUTHMAIL_TEST_ADDRESS;

export const SMTP_CONNECTION_URL = process.env.SMTP_CONNECTION_URL;
