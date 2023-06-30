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
 * Simply combine necessary properties of user and user profile.
 */
export interface UserCombinedDataType extends BaseDataType {
  username: string;
  email: string;
  nickname?: string;
  role: UserRoleType;
  avatarUrl?: string;
  isBlocked?: boolean;
  isDeactivated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Simply combine necessary properties of user and user profile and user preference.
 */
export interface AuthUserDataType extends UserCombinedDataType {
  token?: string;
  theme?: ThemeDataType;
  taskQuickCreation?: boolean;
  isEmailVerified?: boolean;
}

export interface UserPreferenceDataType extends BaseDataType {
  theme: ThemeDataType;
  taskQuickCreation?: boolean;
}

export interface UserFollowerDataType extends BaseDataType {
  username: string;
  user?: UserCombinedDataType;
  followerUsername: string;
  follower?: UserCombinedDataType;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
