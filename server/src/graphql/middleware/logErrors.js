import { ClientError } from '~/utils/misc';

const logErrors = async (resolve, root, args, context, info) => {
  try {
    return await resolve(root, args, context, info);
  } catch (e) {
    if (e instanceof ClientError) {
      throw e;
    } else {
      console.error('ResolverError', e);
    }
  }
};

export default logErrors;
