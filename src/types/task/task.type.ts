import { BaseDataType } from '../base/base.type';
import { DateTimeDataType } from '../reminder/reminder.type';
import { ForkedUserDataType, LikedUserDataType } from '../user/user.type';

export type TaskDataType = BaseDataType & {
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
};

export type TaskVisibilityType = 'public' | 'friend' | 'private';

export type TaskRepeatRuleType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export type TaskCategoryDataType = 'plan' | 'completed' | 'received' | 'trash';

export type TaskSubitemDataType = {
  subject: string;
  isCompleted?: boolean;
};

export type TaskAttachmentDataType = BaseDataType & {
  ownerId: string;
  taskId: string;
  originalFilename: string;
  fileSize: number;
  storageFilename: string;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

export type TaskProgressDataType = {
  [key in 'total' | 'completed' | 'progress']: number;
};

export type TaskVersionDataType = {
  taskId: string;
  createdAt: number;
  updatedAt: number;
};

export type TaskTagDataType = BaseDataType & {
  taskId: string;
  taskAssigneeId: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type TaskLikeDataType = BaseDataType & {
  taskId: string;
  taskAssigneeId: string;
  likedUsers?: LikedUserDataType[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type TaskForkDataType = BaseDataType & {
  taskId: string;
  taskCreatorId: string;
  forkedUsers?: ForkedUserDataType[];
  createdAt?: Date;
  updatedAt?: Date;
};
