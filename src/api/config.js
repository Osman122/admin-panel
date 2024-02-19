import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL : "https://academy-training.appssquare.com/"
})

axiosInstance.interceptors.request.use((config) => {
    config.headers['Authorization']="Bearer "+"" //+ "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNmFmODU3ZTFmMzMxM2I0Y2VjMWEzNTMzYWU3NjIzODMzYWEyMzQ0NmEyYWI4NTlkZTAzYzIxYmQ5M2U5NTE0Zjk2NjBjYjU2MTFiZmExZjYiLCJpYXQiOjE3MDgxMzkwMDQuODg1MDYyLCJuYmYiOjE3MDgxMzkwMDQuODg1MDYzLCJleHAiOjE3Mzk3NjE0MDQuODM4MTQ1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.b9oYkK5wBrsgPII-1C84OD4b6f0JVm3w7SkX0nbuZ4PPGPZYLGJzbmTWNUto-E-7WSafnT-2lvwhbx_01s6ihw3NviIlgeYheWumecu1B-Jsn8po6nn3WrZj-R2KlEYlEpHyJO5yminTaKhaNa-qHmEqf4_K49DDQDlRXdoQLQDLCjuVQ9m9IsQlC5Ct1aPlfIWkO54sn9RvdSHs6E4-xBm_eGih8tOnXl6RDHAS75e8CIIOU5ARAaBqqxZLo0tTzlX7Latr9zRJwGtiD690_33WAqp-JMf8fZ_feMDMW1YxchrOGhAB6-lWzvI9CtOKjqpeLG0kA9-yRY53iLF1nDVk1mqrrFXOPAyQmnv7Xlg-ITUwvijYTCb_HvGaD-7tHwuYfg02w3zrYJ_d9igyXL2WvuyHtSnGZ_b2GfLZAKjjLEby2U6eOqMDx7E7W93OOLiv2bb1xNB8YLpFfbHcvqAKATHv33qAK3AoYLKkQIuVaFWRilxtIv8M344J6m8Ijq343A2Y1xJ_a_b0O1sHSOfocMkiV8gp6tBkyqNNyTYIlH7D0xSJF8KSo6ZpKMbcz1IfPZShUJvxsif_ypKkwdA415XM8CLlEqQvUEoGnEb23Tm2DoyAEctVzpN8oUi1RGb2hK7RYxbO1olfMn9GIJ3vFl7iTMOSYufNzcyfurQ"
    config.headers['accept']= 'application/json'
    return config

}, (error) => {
    console.log(error)
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error)
})