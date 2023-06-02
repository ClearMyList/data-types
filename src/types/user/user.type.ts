import { BaseDataType } from '../base/base.type';
import { ThemeDataType } from '../system/system.type';

export type UserRoleType = 'admin' | 'client';

export interface UserDataType extends BaseDataType {
  username?: string;
  role?: UserRoleType;
  email?: string;
  nickname?: string;
  isEmailVerified?: boolean;
  isBlocked?: boolean;
  isDeactivated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LikedUserDataType {
  userId: string;
  createdAt: Date;
}

export interface ForkedUserDataType {
  userId: string;
  createdAt: Date;
}

export type AccomplishmentDataType = {
  username: string;
  task?: { completedCount?: number };
};

/**
 * AuthUserDataType is simply combain necessary properties of user and user profile.
 */
export interface AuthUserDataType {
  username: string;
  token?: string;
  email: string;
  nickname?: string;
  role: UserRoleType;
  avatarUrl?: string;
  theme?: ThemeDataType;
  isEmailVerified?: boolean;
  isBlocked?: boolean;
  isDeactivated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserPreferenceDataType extends BaseDataType {
  theme: ThemeDataType;
}
