import { db } from '../db';

export const getDocumentType = () => {
  return db.document_Type.findMany();
};
