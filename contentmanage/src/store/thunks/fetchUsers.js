import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk('user/fetch' , async() => {
    const result = await axios.get("https://api.waqi.info/feed/tokyo/?token=demo");
    
    //DEV ONLY - pause for testing
    await pause(1000);

    // this data acts as payload in action object
    return result.data.data.aqi;
})

//DEV ONLY
const pause = (duration) => {
    return new Promise((resolve , reject) => {
        setTimeout(resolve , duration);
    })
}

export {fetchUser};