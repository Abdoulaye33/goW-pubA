
const inputName = (inputName) => {

    const Api = `https://goweather.herokuapp.com/weather/${inputName}`
    return Api;
}


export default Api;