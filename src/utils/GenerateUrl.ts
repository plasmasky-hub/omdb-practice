interface GenerateUrlProps {
  title?: string;
  year?: string;
  type?: string;
  imdbID?: string;
}

export const GenerateUrl = ({
  title,
  year,
  type,
  imdbID,
}: GenerateUrlProps) => {
  const baseUrl = process.env.REACT_APP_OMDB_BASE_URL;
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  if (!baseUrl) return "";

  let url = baseUrl;

  if (title) url += `?s=${title.replaceAll(" ", "+")}`;
  if (year) url += `?y=${year}`;
  if (type) url += `?type=${type}`;
  if (imdbID) url += `?i=${imdbID}`;

  url += `&apikey=${apiKey}`;

  return url;
};
