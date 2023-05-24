import * as qs from 'qs';

export default class CallApiFromStrapi {
  static async getData(path, queryString) {
    let fetchUrl = '';
    if(queryString){
      fetchUrl = `http://localhost:1337/api/${path}?${qs.stringify(queryString,{encodeValuesOnly: true})}`;
    } else {
      fetchUrl = `http://localhost:1337/api/${path}`;
    }
    
    const response = await fetch(fetchUrl);

    if (response?.ok) {
      return await response.json();
    }
      
    return null;
  }
}