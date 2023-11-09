import TMDbAPI from "../Api/themoviedb";

class RenderToWatchLogic {
  public async getMovieDataVideo({ id }: { id: number }) {
    try {
      const data = await TMDbAPI.getMovieById(id);
      const video = await TMDbAPI.getVideoForMovie(data.id);
      return { data, video };
    } catch (err) {
      return { data: false, video: false };
    }
  }
}

export default RenderToWatchLogic;
