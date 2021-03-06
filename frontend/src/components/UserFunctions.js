import axios from 'axios'

export const register = (newUser) => {   //register function name and (parameter)
    return axios.post('/user', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    }).then(res => {
        console.log(res);
        console.log('User Registered Successfully');
        return res;
    })
}

export const login = (loginUser) => {


    console.log(loginUser.email)

    return axios.post('/userfetch', {
        email: loginUser.email,
        password: loginUser.password
    }).then(result => {
        console.log(result)
        localStorage.setItem('token', result.token);
        return result;
    }).catch(err => {
        console.log(err)
    })
}