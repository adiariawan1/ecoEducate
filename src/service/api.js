
import { supabase } from '../utils/supabaseClient';

export const api = {
//   fetchDonationStats
  getDonationStats: async () => {
    try {
      
      const { data, error } = await supabase
        .from('donations') 
        .select('amount');

      if (error) throw error;

      
      const totalMoney = data.reduce((acc, curr) => acc + Number(curr.amount), 0);

      
      const totalPeople = data.length;

      return {
        money: totalMoney,
        people: totalPeople
      };

    } catch (err) {
      console.error("Gagal hitung statistik dari donations:", err);
      return { money: 0, people: 0 };
    }
  },
  createDonation: async (payload) => {
    const { data, error } = await supabase
      .from('donations')
      .insert([payload])
      .select();
      
    if (error) throw error;
    return data;
  },
  // fetchCampagins
getCampaigns: async (page = 1, limit = 9, searchQuery = "") => { // Tambahkan parameter searchQuery
  try {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from('campaign_stats') 
      .select('*', { count: 'exact' });

    
    if (searchQuery) {
      
      query = query.or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
    }

    const { data, count, error } = await query
      .range(from, to)
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    return {
      data: data,
      totalItems: count
    };
  } catch (err) {
    console.error("Gagal ambil campaigns:", err);
    return { data: [], totalItems: 0 };
  }
},
  getCampaignById: async (id) => {
    const { data, error } = await supabase
      .from('campaign_stats')
      .select('*')
      .eq('id', id)  
      .single();     

    if (error) throw error;
    return data;
  },
  getGallery: async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false }); 
    if (error) throw error;
    return data;
  },
  createDonation: async (payload) => {
  const { data, error } = await supabase
    .from('donations')
    .insert([payload])
    .select();
  if (error) throw error;
  return data;
},
  getUrgentCampaigns: async () => {
  const { data, error } = await supabase
    .from('campaign_stats')
    .select('*')
    .limit(3) 
    .order('created_at', { ascending: false });
    
  if (error) throw error;
  return data;
}
};