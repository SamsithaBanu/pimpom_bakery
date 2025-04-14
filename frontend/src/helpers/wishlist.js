import SummaryApi from "../common"
import { toast } from 'react-toastify'

const wishList = async(e,id) =>{
    e?.stopPropagation()
    e?.preventDefault()

    const response = await fetch(SummaryApi.wishlist.url,{
        method : SummaryApi.wishlist.method,
        credentials : 'include',
        headers : {
            "content-type" : 'application/json'
        },
        body : JSON.stringify(
            { recipeId : id }
        )
    })

    const responseData = await response.json()

    if(responseData.success){
        toast.success(responseData.message)
    }

    if(responseData.error){
        toast.error(responseData.message)
    }


    return responseData

}


export default wishList