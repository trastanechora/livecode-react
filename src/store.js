// IMPORT MODULE
import createStore from 'unistore';
import axios from "axios"

// SET THE GLOBAL STATE VARIABLES
const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    article: "",
    listNews: []
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
        axios
            .post("https://loginadmin.free.beeceptor.com/auth", data)
            .then(function(response) {
                if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email
                    });
                } else {
                    store.setState({
                        is_login: true,
                        api_key: "response.data.api_key",
                        full_name: "response.data.full_name",
                        email: "response.data.email",
                        article: "TEST"
                    });
                    console.log("test api postLogin > state", state);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }
})