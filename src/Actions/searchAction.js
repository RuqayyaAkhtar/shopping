import {SEARCH_ITEM} from '../Constants/searchConstant'
import homeData from '../Home-data';
import homeData2 from '../Home-data2';

export const searchData=(search)=>async(dispatch)=>{
  console.log(search,"search...../")
    let arr=[]
    arr=arr.concat(homeData)
    arr =arr.concat(homeData2)
 

    const found=arr.filter((item)=>{
      return item.name.includes(search)
    })
    console.log(arr,"homeee")
    console.log(found,"foundd..////")
    dispatch({
        type: SEARCH_ITEM,
        payload: { msg: "",data:found },
      
      })
}