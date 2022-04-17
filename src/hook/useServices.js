import { useEffect, useState } from "react"

const useServices =()=>{
    const [photographyService ,setPhotographyService] =useState([])
    useEffect(()=>{
        fetch('/wildService.json')
        .then(response => response.json())
        .then(data=>setPhotographyService(data))
    },[])
    return[photographyService ,setPhotographyService]
}
export default useServices