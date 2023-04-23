/**
 * Quota data type, used to define the quota data structure.
 * 0 or undefined means no quota, -1 means no limit.
 */
export type QuotaDataType = {
  id?: string;
  userId: string;
  subject?: string;
  task?: {
    maxNewAmountMonthly: number;
    newTaskCountInCurrentMonth?: number;
  };
  storage?: {
    maxSizeInBytes: number;
    usedSizeInBytes?: number;
  };
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
