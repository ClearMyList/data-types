import { BaseDataType } from '../base/base.type';
import { DateTimeDataType } from '../reminder/reminder.type';
import { ForkedUserDataType, LikedUserDataType } from '../user/user.type';

export type TaskVisibilityType = 'public' | 'friend' | 'private';

export type TaskRepeatRuleType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export type TaskCategoryType = 'plan' | 'completed' | 'received' | 'trash';

export interface TaskSubitemDataType {
  subject: string;
  isCompleted?: boolean;
}

export interface TaskDataType extends BaseDataType {
  subject?: string;
  content?: string;
  creatorId?: string;
  assigneeId?: string;
  repeatRule?: TaskRepeatRuleType;
  visibility?: TaskVisibilityType;
  isCompleted?: boolean;
  isDeleted?: boolean;
  attachments?: TaskAttachmentDataType[];
  subitems?: TaskSubitemDataType[];
  remindAt?: DateTimeDataType;
  createdAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
  forkFromId?: string;
  repeatParentTaskId?: string;
  templateId?: string;
  subtaskIndexOfTemplate?: number;
}

export interface TaskAttachmentDataType extends BaseDataType {
  ownerId: string;
  taskId: string;
  originalFilename: string;
  fileSize: number;
  storageFilename: string;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export interface TaskProgressDataType {
  total: number;
  completed: number;
  progress: number;
}

export interface TaskVersionDataType {
  taskId: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface TaskLikeDataType extends BaseDataType {
  taskId: string;
  taskAssigneeId: string;
  likedUsers?: LikedUserDataType[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TaskForkDataType extends BaseDataType {
  taskId: string;
  taskCreatorId: string;
  forkedUsers?: ForkedUserDataType[];
  createdAt?: Date;
  updatedAt?: Date;
}
