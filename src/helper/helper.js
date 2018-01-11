
// check host
export const getUrlPrefix = () => {
  var url = "https://glacial-plateau-80939.herokuapp.com";
	return url;
}

export const headerContent = () => {
  const header = {
    'accept': 'application/json',
    'accept-language': 'en_US',
    'content-type': 'application/x-www-form-urlencoded'
  }

  return header;
}
