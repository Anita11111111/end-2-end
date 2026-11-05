export type User = {
  login: string,
  password: string
}

export const users = {
  standard: {
    login: process.env.SAUCE_STANDARD_USERNAME ?? 'standard_user',
    password: process.env.SAUCE_PASSWORD ?? 'secret_sauce',
  },
  locked_out_user: {
    login: process.env.SAUCE_LOCKED_OUT_USERNAME ?? 'locked_out_user',
    password: process.env.SAUCE_PASSWORD ?? 'secret_sauce',
  },
};