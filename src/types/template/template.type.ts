import { TaskDataType } from '../task/task.type';

/**
 * Data type of template for front-end usage.
 */
export type TemplateDataType = {
  id?: string;
  subject: string;
  content?: string;
  authorId: string;
  author?: TemplateAuthorDataType;
  subtasks?: TemplateSubtaskDataType[];
  isPublished?: boolean;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type TemplateAuthorDataType = {
  username: string;
  nickname?: string;
  avatarUrl?: string;
  headerBackgroundImageUrl?: string;
  location?: string;
  occupation?: string;
  about?: string;
  createdAt?: Date;
};

export type TemplateSubtaskDataType = {
  daysAfterPreviousTask?: number;
  task: TaskDataType;
};

export type TemplateTagDataType = {
  name: string;
  templateIds: string[];
};

export type TemplateFolderDataType = 'all-published' | 'my-published' | 'my-draft' | 'my-deleted';
