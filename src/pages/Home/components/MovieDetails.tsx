import React from "react";
import { AxiosError } from "axios";
import { CircularProgress } from "@mui/material";

interface MovieDetailsProps {
  data: MovieDetailsData | null;
  error: AxiosError | null;
  loading: boolean;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({
  data,
  error,
  loading,
}) => {
  if (!data)
    return (
      <div className="movie-details movie-details--empty">
        <p>No Data</p>
      </div>
    );

  if (loading)
    return (
      <div className="movie-details movie-details--loading">
        <CircularProgress />
      </div>
    );

  if (error)
    return (
      <div className="movie-details movie-details--error">
        <p>{error.message}</p>
      </div>
    );

  if (data.Response === "False")
    return (
      <div className="movie-details movie-details--error">
        <p>{data.Error}</p>
      </div>
    );

  return (
    <div className="movie-details">
      <p>{data.Title}</p>
      <p>{data.Rated}</p>
      <p>{data.Year}</p>
      <p>{data.Genre}</p>
      <p>{data.Runtime}</p>
      <p>{data.Actors}</p>
      <p>{data.Plot}</p>
      {data.Ratings.map((rateMedia, index) => {
        return (
          <div key={index}>
            <p>{rateMedia.Source}</p>
            <p>{rateMedia.Value}</p>
          </div>
        );
      })}
    </div>
  );
};
