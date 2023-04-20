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
