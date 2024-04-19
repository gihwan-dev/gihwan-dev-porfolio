import { db } from '../db';

export const getAllDocument = async () => {
  return db.documents.findMany({
    include: {
      project_tags: true,
    },
    orderBy: {
      reg_date: 'desc',
    },
  });
};

export const getDocumentType = async () => {
  return db.document_Type.findMany();
};

export const getAllDocumentByPage = async (page: number) => {
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

interface UpdateContent {
  model: string;
  documentId: number;
}
export const updateContent = async ({ model, documentId }: UpdateContent) => {
  return db.documents.update({
    where: {
      document_id: documentId,
    },
    data: {
      content: model,
    },
  });
};

interface AddTagParams {
  documentId: number;
  tagId: number;
}

export const addTagToDocument = async ({ documentId, tagId }: AddTagParams) => {
  return db.documents.update({
    where: {
      document_id: documentId,
    },
    data: {
      project_tags: {
        connect: {
          document_tag_id: tagId,
        },
      },
    },
  });
};

export const getDocumentTags = async (documentId: number) => {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      project_tags: true,
    },
  });
};

interface SaveProjectInfoParams {
  documentId: number;
  title: string;
  description: string;
}

export const saveProjectInfo = ({
  title,
  description,
  documentId,
}: SaveProjectInfoParams) => {
  if (!documentId) {
    return null;
  }
  return db.documents.update({
    where: {
      document_id: documentId,
    },
    include: {
      document_type: true,
    },
    data: {
      title: title,
      description: description,
    },
  });
};

export const getOneDocument = (documentId: number) => {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    include: {
      project_tags: true,
    },
  });
};

export const deleteOneDocument = (documentId: number) => {
  return db.documents.delete({
    where: {
      document_id: documentId,
    },
  });
};
