// IMPORT MODULE
import createStore from 'unistore';
import axios from "axios"

// SET THE GLOBAL STATE VARIABLES
const initialState = {
    password: "",
    full_name: "",
    article: "",
    listNews: [],

    movieList: [],
    username: "",
    email: "",
    avatar: "",
    is_login: false
};

const baseUrl = "https://newsapi.org/v2/everything?q="
const apiKey = "&apiKey=995ea15a75714a0496b4befa6ae915ef"

export const store = createStore(initialState)

// STORE ACTIONS MODULE
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },

    updateCategory: async (state, match) => {
        try {
            const response = await axios.get(
                baseUrl + match.query + apiKey
              );
              store.setState({ listNews: response.data.articles });
          } catch (error) {
            console.error(error);
          }
          store.setState({ article: match.query });
          console.log("test value match at store.js", state);
    },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        };
        const self = this;

        // console.log(store.movieList.find("action"))

        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(function(response) {
                if (response.data.hasOwnProperty("status")) {
                    console.log("Login Berhasil!", response)
                    store.setState({
                        is_login: true,
                        username: response.data.user_data.username,
                        email: response.data.user_data.email,
                        avatar : response.data.user_data.avatar
                    });
                    console.log("cek store", store.getState())
                } else {
                    // store.setState({
                    //     is_login: true,
                    //     api_key: "response.data.api_key",
                    //     full_name: "response.data.full_name",
                    //     email: "response.data.email",
                    //     article: "TEST"
                    // });
                    console.log("Login Gagal");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    setCategory: async state => {
        console.log("CLICKED");
        // console.log(store.movieList.find("action"))

        // var results = [];
        // var searchField = "Category";
        // var searchVal = "action";
        // for (var i=0 ; i < store.movieList.length ; i++)
        // {
        //     if (store.movieList[i][searchField] == searchVal) {
        //         results.push(store.movieList[i]);
        //     }
        // }

        console.log("find movie list", store.getState())
    },
    updateList: async (state, data) => {
        console.log("data from store", data)
        store.setState({
            movieList: data
        });
    }
})