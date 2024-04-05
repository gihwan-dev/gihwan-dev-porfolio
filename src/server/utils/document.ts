import { db } from '../db';

export const getDocumentType = () => {
  return db.document_Type.findMany();
};

export const getAllDocument = (page: number) => {
  return db.documents.findMany({
    orderBy: {
      reg_date: 'desc',
    },
    take: 10,
    skip: (page - 1) * 10,
  });
};

export const getTypedDocument = (page: number, type: string) => {
  return db.documents.findMany({
    orderBy: {
      reg_date: 'desc',
    },
    skip: (page - 1) * 10,
    take: 10,
    where: {
      document_type: {
        document_type_name: type,
      },
    },
  });
};

export const countAll = () => {
  return db.documents.count();
};

export const createContent = async (model: string, type: string) => {
  return db.documents.create({
    data: {
      content: model,
      description: '',
      thumbnail: '',
      title: '',
      document_type: {
        connect: {
          document_type_name: type,
        },
      },
    },
  });
};
