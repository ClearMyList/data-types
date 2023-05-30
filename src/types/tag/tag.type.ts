import { BaseDataType } from '../base/base.type';

export type TextTagDataType = BaseDataType & {
  text: string;
  tags: string[];
};
