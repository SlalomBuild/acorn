export class Rating {
  id: string;
  movieId: string;
  rating: number;

  constructor(obj?: any) {
    obj = obj || {};

    this.id = obj.id;
    this.movieId = obj.movieId;
    this.rating = obj.rating;
  }
}
