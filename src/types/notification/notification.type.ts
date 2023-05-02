import { TaskDataType } from '../task/task.type';
import { TemplateDataType } from '../template/template.type';
import { UserProfileDataType } from '../user/profile/user_profile.type';

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
  publisher?: { [key in 'username' | 'nickname' | 'avatarUrl']: string };
  subscriberIds: string[];
  readers?: { userId: string; createdAt: Date }[];
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
