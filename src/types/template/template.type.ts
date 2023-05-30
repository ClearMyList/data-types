import { BaseDataType } from '../base/base.type';
import { TaskDataType } from '../task/task.type';

/**
 * Data type of template for front-end usage.
 */
export type TemplateDataType = BaseDataType & {
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
  daysAfterPreviousTask: number;
  preferRemindAtHour: number;
  preferRemindAtMinute: number;
  task: TaskDataType;
};

export type TemplateFolderDataType = 'all-published' | 'my-published' | 'my-draft' | 'my-deleted';

export type TemplateUserDataType = BaseDataType & {
  templateId?: string;
  users?: { id: string; createdAt: Date }[];
  createdAt?: Date;
  updatedAt?: Date;
};
