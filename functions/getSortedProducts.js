import axios from "axios";

export default function getSortedProducts(sortOption) {
  let config = {
    method: 'get',
    url: `/products?sort=${sortOption}`,
  };
  axios(config)
    .then(function (response) {
      console.log((response.data));
      return (response.data)
    })
    .catch(function (error) {
      console.log(error);
      return (error)
    });
}