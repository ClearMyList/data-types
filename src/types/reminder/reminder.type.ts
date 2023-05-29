export type ReminderDataType = {
  taskId: string;
  remindAt: Date;
  subject: string;
  content?: string;
};

export type RemindAtDataType = {
  /**
   * Year.
   */
  year: number;
  /**
   * Month, 0-11.
   */
  month: number;
  /**
   * Day of month, 1-31.
   */
  date: number;
  /**
   * Hour, 0-23.
   */
  hour: number;
  /**
   * Minute, 0-59.
   */
  minute: number;
};
