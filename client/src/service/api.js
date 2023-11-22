import axios from 'axios'



const URL="http://localhost:8000"

export const addUser=async(userData)=>{
    try{
     return   await  axios.post(`${URL}/adduser`,userData)
    }
    catch(err){
       console.log("erro while sending add user api",err);
    }
}

export const getUser=async()=>{
    try{
          return await axios.get(`${URL}/getuser`)
    }
    catch(err){
        console.log(`error while fetching data`,err);
    }
}

export const getEditUser=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }
    catch(err){
        console.log("error while getting data of user to be edited");
    }
}

export const editUser=async(editedData,id)=>{
    try{
     return   await  axios.post(`${URL}/${id}`,editedData)
    }
    catch(err){
       console.log("erro while saving edited user api",err);
}

}

export const deleteUser=async(id)=>{
    try{
     return   await  axios.delete(`${URL}/${id}`)
    }
    catch(err){
       console.log("erro while deleting user ",err);
}
// console.log(id);

}