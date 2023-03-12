export default () => ({
  host_bd: process.env.POSTGRES_HOST,
  port_bd: +process.env.POSTGRES_PORT,
  user_bd: process.env.POSTGRES_USER,
  password_bd: process.env.POSTGRES_PASSWORD,
  name_bd: process.env.POSTGRES_DB,
  port: +process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationTime: process.env.JWT_EXPIRATION_TIME,
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  jwtRefreshTokenExpirationTime: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
});
