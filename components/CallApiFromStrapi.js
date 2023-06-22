import * as qs from 'qs';

export default class CallApiFromStrapi {
  static async getData(path, queryString) {
    let fetchUrl = '';
    if(queryString){
      fetchUrl = `https://pure-hamlet-08520-67aeef587ee8.herokuapp.com/api/${path}?${qs.stringify(queryString,{encodeValuesOnly: true})}`;
    } else {
      fetchUrl = `https://pure-hamlet-08520-67aeef587ee8.herokuapp.com/api/${path}`;
    }
    
    const response = await fetch(fetchUrl);

    if (response?.ok) {
      return await response.json();
    }
      
    return null;
  }
}