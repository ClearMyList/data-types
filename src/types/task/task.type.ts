export type TaskDataType = {
  id: string;
  subject: string;
  content?: string;
  creatorId: string;
  assigneeId: string;
  repeatRule?: TaskRepeatRuleType;
  visibility: TaskVisibilityType;
  isCompleted?: boolean;
  isDeleted?: boolean;
  attachments?: TaskAttachmentDataType[];
  subitems?: TaskSubitemDataType[];
  remindAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
};

export type TaskVisibilityType = 'public' | 'friend' | 'private';

export type TaskRepeatRuleType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export type TaskFolderType = 'plan' | 'completed' | 'received' | 'trash';

export type TaskSubitemDataType = {
  subject: string;
  isCompleted?: boolean;
};

export type TaskAttachmentDataType = {
  id: string;
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
  total: number;
  completed: number;
  progress: number;
};

export type TaskVersionDataType = {
  taskId: string;
  createdAt: number;
  updatedAt: number;
};

export type TaskTagDataType = {
  id?: string;
  taskId: string;
  taskAssigneeId: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
