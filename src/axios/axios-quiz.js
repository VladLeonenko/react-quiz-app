import axios from 'axios'

export default axios.create({
    baseUrl: 'https://react-quiz-a0679-default-rtdb.europe-west1.firebasedatabase.app/'
})