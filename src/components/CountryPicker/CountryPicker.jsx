import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const Countries = ({ handleCountryChange }) => {
  const [countries, setFetechedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        {/* {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))} */}
        <option value="canada">British Columbia (Total)</option>
        <option value="591">Fraser</option>
        <option value="592">Interior</option>
        <option value="593">Island</option>
        <option value="594">Northern</option>
        <option value="595">Vancouver Coastal</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
