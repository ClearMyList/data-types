export type UserDataType = {
  id?: string;
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
