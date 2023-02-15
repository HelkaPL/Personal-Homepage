import axios from "axios";

const reposURL = "https://api.github.com/users/HelkaPL/repos";

export const getRepositories = () => 
axios
    .get(reposURL)
    .then((response) => response.data);