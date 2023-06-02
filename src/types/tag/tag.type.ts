import { BaseDataType } from '../base/base.type';

export interface TextTagDataType extends BaseDataType {
  text: string;
  tags: string[];
}
