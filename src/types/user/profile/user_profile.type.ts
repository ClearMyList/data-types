import { BaseDataType } from '../../base/base.type';

export type UserProfileDataType = BaseDataType & {
  userId: string;
  avatarUrl?: string;
  location?: string;
  about?: string;
  occupation?: string;
  followerCount?: number;
  followingCount?: number;
  forkedCount?: number;
  appliedCount?: number;
  likedCount?: number;
  dislikedCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  twitterUsername?: string;
  facebookUsername?: string;
  linkedInUsername?: string;
  instagramUsername?: string;
  website?: string;
};
