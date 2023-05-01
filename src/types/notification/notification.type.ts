import { TaskDataType } from '../task/task.type';
import { TemplateDataType } from '../template/template.type';

export type NotificationCategoryType =
  | 'task-like'
  | 'task-dislike'
  | 'task-fork'
  | 'template-like'
  | 'template-dislike'
  | 'template-apply'
  | 'message'
  | 'follow'
  | 'system-announcement'
  | 'mention'
  | 'comment'
  | 'comment-reply';

export type NotificationPayloadType = TaskDataType | TemplateDataType;

export type NotificationDataType = {
  id?: string;
  category: NotificationCategoryType;
  message: string;
  payload?: NotificationPayloadType;
  publisherId: string;
  receiverIds: string[];
  readers?: { userId: string; createdAt: Date }[];
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
