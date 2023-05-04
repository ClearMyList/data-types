/**
 * Quota data type, used to define the quota data structure.
 * 0 or undefined means no quota, -1 means no limit.
 */
export type QuotaDataType = {
  id?: string;
  userId: string;
  subject?: string;
  task?: {
    [key in 'maxNewAmountMonthly' | 'newTaskCountInCurrentMonth']: number;
  };
  storage?: {
    [key in 'maxSizeInBytes' | 'usedSizeInBytes']: number;
  };
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
