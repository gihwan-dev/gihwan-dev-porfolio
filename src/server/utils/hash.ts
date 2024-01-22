import * as bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 12);
};

type comparePasswordInput = {
  hashedPwd: string;
  enteredPwd: string;
};

export const comparePassword = async ({
  hashedPwd,
  enteredPwd,
}: comparePasswordInput) => {
  return await bcrypt.compare(enteredPwd, hashedPwd);
};
