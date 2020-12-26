import axios from "axios";

const options = {
    baseUrl: 'https://rawg-video-games-database.p.rapidapi.com/games',
    headers: {
        'x-rapidapi-key': '54cc4e07fcmsh3d78b5daa1093ebp16efe5jsn63124395af6f',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
    }
};

export default axios.create({options})