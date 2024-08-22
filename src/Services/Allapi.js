import axiosInstance from "./axiosInstance"
import {BaseURL} from "./Baseurl"
import { commonAPI } from "./commonAPI"

// register api
export const registerApi = async(user)=>{
   return await commonAPI("POST",`${BaseURL}/user/register`,user,"")

}

//login api
export const loginApi = async (user)=>{
   return await commonAPI("POST",`${BaseURL}/user/login`,user,"")

}

//folder creation API
export const folderCreationApi = async (folderName)=>{
   return await axiosInstance("POST", `${BaseURL}/createfolder`, folderName )
}
