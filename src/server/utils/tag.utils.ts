import { db } from '../db';

export const getAllTag = async () => {
  return db.document_Tags.findMany();
};
