import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const USER_TOKEN = "userToken"
const USER_ID = "userToken"

export function registerUserService(page?: number, limit?: number) {
  return new Promise((resolve, reject) => {
    axios.post('/login.aspx', {
      firstName: 'Finn',
      lastName: 'Williams',
      phoneNo: 'Williams',
      emailAddress: 'Williams',
    })
      .then((response) => {
        console.log(response);

        if (response.status == 200)
          return response.data;
        else
          resolve(response);
      }, (error) => {
        console.log(error);
        reject(error);
      });
  });




  //FETCH REQUEST
  // axios.get("https://jsonplaceholder.typicode.com/users.asp")
  //   .then(response => {
  //       console.log('getting data from axios', response.data);
  //       this.setState({
  //           loading: false,
  //           axiosData: response.data
  //       })
  //   })
  //   .catch(error => {
  //       console.log(error);
  //   });
}

// CALLED LIKE

// loginUserService(values.username, values.password).then(res => {
//   navigation.navigate("AppStack");
// });
export function loginUserService(username: string, password: string) {
  return new Promise((resolve, reject) => {
    let userToken = `${username}${password}`;
    AsyncStorage.setItem("userToken", userToken)
      .then(() => {
        resolve(userToken);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function logoutUserService() {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem("userToken")
      .then(() => {
        resolve(null);
      })
      .catch(error => {
        reject(error);
      });
  });
}
