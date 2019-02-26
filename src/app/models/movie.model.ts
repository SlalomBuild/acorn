export class Movie {
  constructor(obj?: any) {
    Object.assign(this, obj || {});
  }
};
