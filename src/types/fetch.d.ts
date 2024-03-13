declare type SearchDataType = {
  Search?: MovieBasicData[];
  Error?: string;
  totalResults: string;
  Response: "True" | "False";
};

declare interface MovieBasicData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MediaType;
  Poster: string;
}

declare interface Rating {
  Source: string;
  Value: string;
}

declare interface MovieDetailsData extends MovieBasicData {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Error?: string;
  Response: "True" | "False";
}
