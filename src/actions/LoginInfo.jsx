import axios from "axios";


export const register=async(username,email,password)=>{
    try {
        const payload={
            username:username,
            email:email,
            password:password
        }
        const response= await axios.post("http://localhost:8080/api/auth/register",payload,{headers: {
                'Content-Type': 'application/json',
            },
    })
          console.log('Signed in successfully:', response.data);
    } catch (error) {
        console.error('Error during sign-in:', error.response ? error.response.data : error.message)
    }
}