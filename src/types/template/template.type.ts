import { TaskDataType } from '../task/task.type';

/**
 * Data type of template for front-end usage.
 */
export type TemplateDataType = {
  id?: string;
  subject: string;
  content?: string;
  authorId: string;
  author?: { username: string; nickname: string; avatarUrl: string };
  subtasks?: SubtaskDataType[];
  isPublished?: boolean;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type SubtaskDataType = {
  timeSpanFromPreviousTaskInMillisecond?: number;
  task: TaskDataType;
};

export type TemplateTagDataType = {
  name: string;
  templateIds: string[];
};
