import React from "react";
import { FormikProps } from "formik";
import { SearchValues } from "../Home";
import {
  MenuItem,
  RadioGroup,
  Select,
  FormControlLabel,
  Radio,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MediaType } from "../../../enums/enums";

interface SearchBarProps {
  formik: FormikProps<SearchValues>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ formik }) => {
  const years = Array.from(
    { length: new Date().getFullYear() - 1969 },
    (_, index) => 1970 + index
  ).reverse();

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={formik.handleSubmit}>
        <div className="form-item form-item__keyword">
          <TextField
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder="Type a title to search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { color: "white" },
            }}
            variant="outlined"
          />
        </div>
        <div className="form-item form-item__year">
          <label>Year</label>
          <Select
            id="year"
            name="year"
            label="Year"
            value={formik.values.year}
            onChange={formik.handleChange}
            size="small"
            variant="standard"
            inputProps={{ style: { color: "white" } }}
          >
            <MenuItem key={"none"} value={""}>
              None
            </MenuItem>
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="form-item form-item__type">
          <label>Type</label>
          <RadioGroup
            id="type"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            defaultValue={MediaType.default}
            row
          >
            <FormControlLabel
              value={MediaType.default}
              control={<Radio size="small" color="primary" />}
              label="Any"
            />
            <FormControlLabel
              value={MediaType.movie}
              control={<Radio size="small" />}
              label="Movie"
            />
            <FormControlLabel
              value={MediaType.series}
              control={<Radio size="small" />}
              label="Series"
            />
            <FormControlLabel
              value={MediaType.episode}
              control={<Radio size="small" />}
              label="Episode"
            />
          </RadioGroup>
        </div>
        <div className="form-item form-item__actions">
          <div className="action-wrapper">
            <Button type="submit" variant="contained">
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
