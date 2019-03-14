export class Movie {
  id: string;
  title: string;
  description: string;

  constructor(obj?: any) {
    obj = obj || {};

    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
  }
};
