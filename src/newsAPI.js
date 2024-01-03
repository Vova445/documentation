import axios from 'axios';

const API_KEY = '47be95dde8bc440ab4c16802154c1952';

export const fetchProgrammingNews = async () => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'programming',
        apiKey: API_KEY,
        from: oneWeekAgo.toISOString().split('T')[0], 
      },
    });

    const programmingNews = response.data.articles;
    return programmingNews;
  } catch (error) {
    console.error('Error fetching programming news:', error);
    return [];
  }
};
