import axios from "axios";

export default function (url, params = {}, type = "GET")
{
  return new Promise((resolve, reject) => {
    let promise
    // debugger
    if (type === "GET") {
      if (Object.keys(params).length !== 0) {
        let newUrl = url + '?'
        Object.keys(params).forEach((item) => {
          newUrl += item + '=' + params[item] + '&'
        })
        newUrl = newUrl.slice(0, -1)
        promise = axios.get(newUrl)
      } else {
        promise = axios.get(url)
      }
    } else {
      promise = axios.post(url, params)
    }
    promise.then(
      (response) => {
        resolve(response.data)
      },
      (error) => {
        reject(error)
      }
    )
  })
}