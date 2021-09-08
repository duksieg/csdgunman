import React from "react";

export async function getwanted_list(){
    let result
    const url = 'https://dev.baipai.dev/webwanted'
    try{

        let response = await fetch(url)
        result = await response.json()
         
    }catch(err){
        console.error(err)
    }
    return result

}