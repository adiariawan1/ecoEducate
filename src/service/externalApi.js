const DUMMY_NEWS = [
  {
    title: "Indonesia Targetkan Nol Emisi Karbon pada 2060 (Contoh)",
    description: "Pemerintah Indonesia berkomitmen untuk mencapai target netralitas karbon pada tahun 2060 melalui percepatan transisi energi terbarukan.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    url: "#",
    source: { name: "Mode Offline" }
  },
  {
    title: "Aksi Nyata Pemuda untuk Lingkungan di Bali",
    description: "Sejumlah komunitas pemuda di Bali melakukan aksi bersih pantai dan penanaman bakau untuk menjaga kelestarian alam pulau dewata.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    url: "#",
    source: { name: "Mode Offline" }
  },
  {
    title: "Bencana Banjir: Pentingnya Kesadaran Membuang Sampah",
    description: "Banjir yang melanda beberapa wilayah menjadi pengingat keras akan pentingnya menjaga saluran air dari tumpukan sampah plastik.",
    image: "https://asset.kompas.com/crops/hU_AtzqamdNTsMrTN_nG2YWbnQo=/0x0:1599x1066/1200x800/data/photo/2026/01/12/6964d8d42b600.webp",
    publishedAt: new Date().toISOString(),
    url: "#",
    source: { name: "Mode Offline" }
  }
];




export const externalApi = {
  getLatestNews: async () => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=lingkungan OR bencana alam OR donasi&lang=id&country=id&max=3&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`
      );
      
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      
      if (data.articles && data.articles.length > 0) {
        return data.articles;
      } else {
        return DUMMY_NEWS; 
      }

    } catch (error) {
      console.warn("Gagal mengambil berita (Pakai Data Dummy):", error);
      return DUMMY_NEWS; 
    }
  }
};