import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { AxiosError } from "axios";

interface SearchListProps {
  data: SearchDataType | null;
  error: AxiosError | null;
  loading: boolean;
  handleClickItem: (event: React.MouseEvent) => void;
  chosenId: string;
}

export const SearchList: React.FC<SearchListProps> = ({
  data,
  error,
  loading,
  handleClickItem,
  chosenId,
}) => {
  if (!data)
    return (
      <div className="search-list search-list--empty">
        <p>No Data</p>
      </div>
    );

  if (loading)
    return (
      <div className="search-list search-list--loading">
        <CircularProgress />
      </div>
    );

  if (error)
    return (
      <div className="search-list search-list--error">
        <p>{error.message}</p>
      </div>
    );

  if (data.Response === "False")
    return (
      <div className="search-list search-list--error">
        <p>{data.Error}</p>
      </div>
    );

  return (
    <div className="search-list">
      <div className="search-list__total">
        <p>{`${data.totalResults} Results`}</p>
      </div>
      <div className="search-list__items">
        {data.Search &&
          data.Search.map((movie, index) => {
            return (
              <div
                className={`search-list-item ${
                  chosenId === movie.imdbID && "chosen"
                }`}
                key={index}
                id={movie.imdbID}
                onClick={handleClickItem}
              >
                <img className="poster" src={movie.Poster} alt={movie.Title} />
                <div className="text">
                  <p className="title">{movie.Title}</p>
                  <p className="year">{movie.Year}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
