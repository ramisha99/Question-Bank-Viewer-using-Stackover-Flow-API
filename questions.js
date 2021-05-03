const api_url='https:api.stackexchange.com/questions?order=desc&sort=activity&site=stackoverflow';
async function getQuestion() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { owner, creation_date, title } = data;

}
getQuestion();
