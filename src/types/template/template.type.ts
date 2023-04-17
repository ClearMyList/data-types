/**
 * Data type of template for front-end usage.
 */
export type TemplateDateType = {
  id: string;
  subject: string;
  content?: string;
  authorId: string;
  userCount?: number;
  applied?: boolean;
  isPublished?: boolean;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type TemplateListDataType = TemplateDateType[];
