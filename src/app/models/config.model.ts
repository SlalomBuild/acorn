export class Config {
  version: string;
  isEditable: boolean;

  constructor(obj?: any) {
    obj = obj || {};

    this.version = obj.version;
    this.isEditable = obj.isEditable;
  }
};
