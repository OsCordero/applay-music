import spotify from 'api/spotify';
export const search = async query => {
  try {
    const response = await spotify.get(
      `/search?q=${query}&type=artist%2Ctrack%2Calbum&limit=5&offset=0`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
