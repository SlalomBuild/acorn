export class Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;

  constructor(obj?: any) {
    obj = obj || {};

    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
    this.releaseDate = obj.releaseDate ? new Date(obj.releaseDate) : undefined;
  }
}
