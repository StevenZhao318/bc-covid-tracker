import axios from "axios";

const urlOld = "https://covid19.mathdro.id/api";
const url = "https://api.opencovid.ca/summary?loc=";

export const fetchData = async (region) => {
  let changeableUrl = `${url}BC`;

  if (region) {
    changeableUrl = `${url}${region}`;
  }
  console.log("fetching data from" + changeableUrl);
  try {
    const { data } = await axios.get(changeableUrl);
    const dataSummary = data.summary[0];

    const modifiedData = {
      newCases: dataSummary.cases,
      activeCases: dataSummary.active_cases ? dataSummary.active_cases : 0,
      totalDeaths: dataSummary.cumulative_deaths,
      lastUpdate: dataSummary.date,
    };
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.opencovid.ca/timeseries?stat=active&loc=BC"
    );

    const dataArray = data.active;

    return dataArray.map(
      ({ cases, active_cases, cumulative_deaths, date_active }) => ({
        newCases: cases,
        activeCases: active_cases,
        totalDeaths: cumulative_deaths,
        date: date_active,
      })
    );
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${urlOld}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
