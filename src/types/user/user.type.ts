import { BaseDataType } from '../base/base.type';
import { ThemeDataType } from '../system/system.type';

export type UserDataType = BaseDataType & {
  username?: string;
  role?: UserRoleType;
  email?: string;
  nickname?: string;
  isEmailVerified?: boolean;
  isBlocked?: boolean;
  isDeactivated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserRoleType = 'admin' | 'client';

export type LikedUserDataType = { userId: string; createdAt: Date };

export type ForkedUserDataType = { userId: string; createdAt: Date };

export type AccomplishmentDataType = {
  username: string;
  task?: { completedCount?: number };
};

/**
 * AuthUserDataType is simply combain necessary properties of user and user profile.
 */
export type AuthUserDataType = BaseDataType & {
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
};

export type UserPreferenceDataType = BaseDataType & {
  theme: ThemeDataType;
};
