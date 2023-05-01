import { PlazaActivityDataType } from '../plaza/plaza.type';
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
  | 'announcement'
  | 'comment'
  | 'mention'
  | 'reply';

export type NotificationPayloadType = PlazaActivityDataType | TaskDataType | TemplateDataType;

export type NotificationDataType = {
  id?: string;
  category: NotificationCategoryType;
  message: string;
  payload?: NotificationPayloadType;
  receivers: string[];
  readers?: { userId: string; createdAt: Date }[];
  createdAt?: Date;
  updatedAt?: Date;
};
