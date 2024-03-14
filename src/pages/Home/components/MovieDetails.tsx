import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { Button, CircularProgress, Divider } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

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
  const [inWatchList, setInWatchList] = useState(false);

  const handleWatchList = () => {
    setInWatchList(!inWatchList);
  };

  useEffect(() => {
    setInWatchList(false);
  }, [data]);

  if (!data)
    return (
      <div className="movie-details movie-details--empty">
        <p>Pick a movie on list to see details!</p>
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
      <div className="movie-info">
        <div className="movie-info__poster">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="movie-info__text">
          <div className="watchlist-wrapper">
            <Button
              className="watchlist"
              variant={inWatchList ? "contained" : "outlined"}
              startIcon={
                inWatchList ? <BookmarkIcon /> : <BookmarkBorderIcon />
              }
              onClick={handleWatchList}
            >
              Watchlist
            </Button>
          </div>
          <h2 className="title">{data.Title}</h2>
          <div className="details-wrapper">
            <p className="rated">{data.Rated}</p>
            <p className="year">{data.Year}</p>
            <div className="dot" />
            <p className="genre">{data.Genre}</p>
            <div className="dot" />
            <p className="runtime">{data.Runtime}</p>
          </div>
          <p className="actors">{data.Actors}</p>
        </div>
      </div>
      <Divider flexItem />
      <div className="movie-plot">
        <p className="plot">{data.Plot}</p>
      </div>
      <Divider flexItem />
      <div className="movie-ratings">
        {data.Ratings.map((rateMedia, index) => {
          return (
            <>
              <div className="rating-block" key={index}>
                <p className="value">{rateMedia.Value}</p>
                <p className="source">{rateMedia.Source}</p>
              </div>
              {index !== data.Ratings.length - 1 && (
                <Divider orientation="vertical" variant="middle" flexItem />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
