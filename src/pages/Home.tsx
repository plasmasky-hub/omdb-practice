import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import { useFetch } from "../Api/Fetch";
import { GenerateUrl } from "../utils/GenerateUrl";

interface HomeProps {}

const initialSearchValues = {
  title: "",
  year: 1900,
  type: "",
};

export const Home: React.FC<HomeProps> = () => {
  const [url, setUrl] = useState(
    "http://www.omdbapi.com/?i=tt3896198&apikey=2973ba49"
  );
  const { data, error, loading } = useFetch(url);

  const formik = useFormik({
    initialValues: initialSearchValues,
    onSubmit(values) {
      setUrl(GenerateUrl(values));
    },
  });

  console.log(data, error);

  return (
    <div className="home-page">
      Home
      <div className="home-page__search-bar">
        <div className="search-bar">
          Search bar
          <form className="search-bar__form" onSubmit={formik.handleSubmit}>
            <div className="form__keyword">
              <input
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form__year">
              <input
                id="year"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form__type">
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
        <div className="search-result search-result--left search-result__list"></div>
        <div className="search-result search-result--right search-result__detail"></div>
      </div>
    </div>
  );
};
