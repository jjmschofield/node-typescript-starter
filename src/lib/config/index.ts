import dotenv from 'dotenv-safe';

const load = async (path?: string): Promise<dotenv.DotenvSafeOptions | undefined> => {
  const result = dotenv.config({ path });

  if (result.error) throw result.error;

  return result.parsed;
};

export const config = {
  load,
};

export default config;
