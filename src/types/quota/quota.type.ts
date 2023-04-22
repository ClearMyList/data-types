/**
 * Quota data type, used to define the quota data structure.
 * 0 means no quota, -1 means no limit.
 */
export type QuotaDataType = {
  id?: string;
  subject: string;
  task: {
    maxNewAmountMonthly: number;
  };
  storage: {
    maxSizeInBytes: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
};
