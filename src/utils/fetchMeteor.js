import axios from "axios";

const BASE_URL = "https://data.nasa.gov/resource/gh4g-9sfh.json";

/**
 * Fetch meteor data for a specific year.
 * @param {string} year - The year to fetch meteors for (e.g., "1990").
 * @returns {Promise<Array>} - Promise resolving to the list of meteors.
 */
export const nasaFetchFunction = (year) => {
  console.log(year, "<year>");
  // const startOfYear = `${year}-01-01T00:00:00.000`;
  // const endOfYear = `${year}-12-31T23:59:59.999`;

  return axios
    .get(BASE_URL, {
      params: {
        // $where: `year >= '${startOfYear}' AND year <= '${endOfYear}'`,
        $where: `year = '${year}'`,
      },
    })
    .then((response) => {
      console.log(response.data, "<-response data");
      return response.data;
    })
    .catch((error) => {
      console.error(error, "<-error");
      throw error;
    });
};
