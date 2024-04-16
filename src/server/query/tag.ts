import { db } from '../db';
import { type Document_Type } from '@prisma/client';

export const getAllTag = async () => {
  return db.document_Tags.findMany();
};

interface CreateOneTagParams {
  name: string;
  backgroundColor: string;
  textColor: string;
  type: Document_Type;
  category: string;
}

export const createOneTag = async ({
  type,
  name,
  backgroundColor,
  textColor,
  category,
}: CreateOneTagParams) => {
  return db.document_Tags.create({
    data: {
      name: name,
      background_color: backgroundColor,
      text_color: textColor,
      document_type: {
        connect: {
          document_type_name: type.document_type_name,
        },
      },
      category: {
        connectOrCreate: {
          create: {
            name: category,
          },
          where: {
            name: category,
          },
        },
      },
    },
  });
};

export const getAllTagsWithCount = async () => {
  return db.document_Tags.findMany({
    select: {
      document_tag_id: true,
      name: true,
      text_color: true,
      background_color: true,
      document_type_id: true,
      _count: {
        select: {
          Documents: true,
        },
      },
    },
  });
};
