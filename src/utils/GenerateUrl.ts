interface GenerateUrlProps {
  title?: string;
  year?: number;
  type?: string;
}

export const GenerateUrl = ({ title, year, type }: GenerateUrlProps) => {
  const baseUrl = process.env.REACT_APP_OMDB_BASE_URL;
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  let url = baseUrl + `&apikey=${apiKey}`;

  if (title) url += `?t=${title}`;
  if (year) url += `?y=${year}`;
  if (type) url += `?type=${type}`;

  console.log(url);
  return url;
};
