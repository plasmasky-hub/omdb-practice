import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useFetch } from "../../Api/Fetch";
import { GenerateUrl } from "../../utils/GenerateUrl";
import { SearchList } from "./components/SearchList";
import { MovieDetails } from "./components/MovieDetails";

const initialSearchValues = {
  title: "star wars",
  year: "",
  type: "",
};

export const Home: React.FC = () => {
  const [searchUrl, setSearchUrl] = useState(GenerateUrl(initialSearchValues));
  const {
    data: searchData,
    error: searchError,
    loading: searchLoading,
    fetch: fetchSearch,
  } = useFetch<SearchDataType>();

  const {
    data: movieDetailsData,
    error: movieDetailsError,
    loading: movieDetailsLoading,
    fetch: fetchMovieDetails,
  } = useFetch<MovieDetailsData>();

  const formik = useFormik({
    initialValues: initialSearchValues,
    onSubmit(values) {
      setSearchUrl(GenerateUrl(values));
    },
  });

  useEffect(() => {
    fetchSearch(searchUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchUrl]);

  const handleClickItem = (event: React.MouseEvent) => {
    event.stopPropagation();
    const movieId = event.currentTarget.id;

    fetchMovieDetails(GenerateUrl({ imdbID: movieId }));
  };

  return (
    <div className="home-page">
      Home
      <div className="home-page__search-bar">
        <div className="search-bar">
          Search bar
          <form className="search-bar__form" onSubmit={formik.handleSubmit}>
            <div className="form__keyword">
              <label>Title</label>
              <input
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form__year">
              <label>Year</label>
              <input
                id="year"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form__type">
              <label>Type</label>
              <input
                id="type"
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form__actions">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="home-page__search-result">
        <div className="search-result search-result--left search-result__list">
          <SearchList
            data={searchData}
            error={searchError}
            loading={searchLoading}
            handleClickItem={handleClickItem}
          />
        </div>
        <div className="search-result search-result--right search-result__detail">
          <MovieDetails
            data={movieDetailsData}
            error={movieDetailsError}
            loading={movieDetailsLoading}
          />
        </div>
      </div>
    </div>
  );
};
