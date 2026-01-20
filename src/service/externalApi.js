// Ganti dengan API KEY kamu dari GNews.io
const GNEWS_API_KEY = "PASTE_API_KEY_KAMU_DISINI"; 

export const externalApi = {
  getLatestNews: async () => {
    try {
      // PERUBAHAN DISINI:
      // 1. q = "lingkungan OR bencana alam" (Cari berita topik ini)
      // 2. lang = "id" (Bahasa Indonesia)
      // 3. country = "id" (Negara Indonesia)
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=lingkungan OR bencana alam OR donasi&lang=id&country=id&max=3&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`
      );
      
      const data = await response.json();
      
      if (data.articles) {
        return data.articles;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Gagal mengambil berita:", error);
      return [];
    }
  }
};