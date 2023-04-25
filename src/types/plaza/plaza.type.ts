import { TaskDataType } from '../task/task.type';

export type PlazaActivityDataType = { task: TaskDataType; assignee: PlazaActivityAssigneeDataType };

export type PlazaActivityAssigneeDataType = {
  username: string;
  nickname?: string;
  avatarUrl?: string;
  headerBackgroundImageUrl?: string;
  location?: string;
  occupation?: string;
  createdAt?: Date;
};
