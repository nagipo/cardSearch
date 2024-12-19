import axios from "axios";
import React from "react"

interface testRes {
    msg:string
}
const ApiTest = ()=>{
    const [value,setValue]= React.useState<string>("error");

    const getData = async()=>{
        const res = await axios.get("api/test");
        const data:testRes = res.data;
        setValue(data.msg);
    }

    React.useEffect(()=>{
        getData();
    },[])

    return(
        <div>
            <p>message is: {value}</p>
        </div>
    )
}

export default ApiTest