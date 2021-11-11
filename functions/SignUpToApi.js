import axios from 'axios'

function createWishlist(u_id) {
  let data = JSON.stringify({
    "u_id": u_id
  });

  let config = {
    method: 'post',
    url: '/wishlist',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log((response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}
function createCart(u_id) {
  var data = JSON.stringify({
    "u_id": u_id
  });

  var config = {
    method: 'post',
    url: '/cart',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log((response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

function registerUser(user) {
  let data = JSON.stringify({
    "email": user.email,
    "username": user.nickname
  });
  let config2 = {
    method: 'post',
    url: '/users',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config2)
    .then(function (response) {
      console.log((response.data));
      createWishlist(response.data._id);
      createCart(response.data._id)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function findUser(user) {
  console.log(user);
  let config = {
    method: 'get',
    url: `/users/${user.email}`,
  };
  axios(config)
    .then(function (response) {
      console.log(response.data);
      //adds user to DB if this is first time sign up
      if (!response.data) {
        registerUser(user)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}



export default function SignUptoApi(user) {
  findUser(user);
}