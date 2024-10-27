import axios  from "axios";


//to add new review to respective product
export const addReview = async (url, body)=>{
  try{
    const res = await axios(url,{
      method: 'post',
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      data: JSON.stringify(body),
      })
      return;
  } catch(err) {
    console.log("Axios Error",err);
  }
}


// export const deleteReview = async (url)=>{
//   const res = await axios(url,{
//     method: 'delete',
//     headers: {
//       "content-type": "application/json",
//       "accept": "application/json"
//     }
//     })
//     console.log(res.data);
// }