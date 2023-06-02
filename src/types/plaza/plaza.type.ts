import { BaseDataType } from '../base/base.type';
import { TaskDataType } from '../task/task.type';

export interface PlazaActivityDataType extends BaseDataType {
  task: TaskDataType;
  assignee: PlazaActivityAssigneeDataType;
}

export interface PlazaActivityAssigneeDataType {
  username: string;
  nickname?: string;
  avatarUrl?: string;
  headerBackgroundImageUrl?: string;
  location?: string;
  occupation?: string;
  about?: string;
  createdAt?: Date;
}
