import { issueToken } from '~/utils/auth';

const login = async () => {
  const account = await get(1);
  const token = issueToken(account);

  return {
    account,
    token,
  };
};

const get = userId => ({
  id: userId,
  email: 'user@example.com',
});

export default {
  login,
  get,
};
