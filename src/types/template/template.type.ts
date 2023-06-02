import { BaseDataType } from '../base/base.type';
import { TaskDataType } from '../task/task.type';

export type TemplateFolderType = 'all-published' | 'my-published' | 'my-draft' | 'my-deleted';

/**
 * Data type of template for front-end usage only.
 */
export interface TemplateDataType extends BaseDataType {
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
}

export interface TemplateAuthorDataType {
  username: string;
  nickname?: string;
  avatarUrl?: string;
  headerBackgroundImageUrl?: string;
  location?: string;
  occupation?: string;
  about?: string;
  createdAt?: Date;
}

export interface TemplateSubtaskDataType {
  daysAfterPreviousTask: number;
  preferRemindAtHour: number;
  preferRemindAtMinute: number;
  task: TaskDataType;
}

export interface TemplateUserDataType extends BaseDataType {
  templateId?: string;
  users?: { id: string; createdAt: Date }[];
  createdAt?: Date;
  updatedAt?: Date;
}
