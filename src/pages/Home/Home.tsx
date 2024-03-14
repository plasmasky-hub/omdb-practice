import React, { useEffect, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { useFetch } from "../../Api/Fetch";
import { GenerateUrl } from "../../utils/GenerateUrl";
import { SearchList } from "./components/SearchList";
import { MovieDetails } from "./components/MovieDetails";
import { SearchBar } from "./components/SearchBar";
import { MediaType } from "../../enums/enums";

export interface SearchValues {
  title: string;
  year: string;
  type: MediaType;
}

const initialSearchValues: SearchValues = {
  title: "star wars",
  year: "",
  type: MediaType.default,
};

export const Home: React.FC = () => {
  const [searchUrl, setSearchUrl] = useState(GenerateUrl(initialSearchValues));
  const [chosenId, setChosenId] = useState<string>("");
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

  const formik: FormikProps<SearchValues> = useFormik({
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

    setChosenId(movieId);
    fetchMovieDetails(GenerateUrl({ imdbID: movieId }));
  };

  return (
    <div className="home-page">
      <div className="home-page__search-bar">
        <SearchBar formik={formik} />
      </div>
      <div className="home-page__search-result">
        <div className="search-result search-result--left search-result__list">
          <SearchList
            data={searchData}
            error={searchError}
            loading={searchLoading}
            handleClickItem={handleClickItem}
            chosenId={chosenId}
          />
        </div>
        <div className="search-result search-result--right search-result__details">
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
