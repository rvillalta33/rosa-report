import axios from "axios";

export const fetchTemplatesData = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_GET_TEMPLATES_DATA)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const fetchFirstPieChartData = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_FIRST_PIE_CHART)
        return response.data
    } catch (error) {
        console.log(error)
    }
}