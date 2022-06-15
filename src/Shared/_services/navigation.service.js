
const URL = '/api/uxp-nav.json';
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);
const REQ = new Request( URL,
  {
    method: "GET",
    //HEADERS,
    mode: "cors",
    cache: "default"
  }
);

export const navigationService = {
  
  isLoaded: false,

  getNavigation: async (callback) => {
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      navigationService.requestNext( res, callback, 'getNavigation' ); 
    } catch(e){
      console.log( 'getNavigation' + ' Navigation SERVICE ERROR', e)
    }
    
  },

  requestNext: (res, callback, methodCalled) => {
    if(res.errors){
      callback({ status: false, errors: res.error });
    } else {
      callback({ status: true, data: res });
    }
  } 
}