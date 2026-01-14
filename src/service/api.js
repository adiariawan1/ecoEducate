
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
  // fetchCampagins
  getCampaigns: async (page = 1, limit = 9) => {
    try {
      const from = (page -1) * limit;
      const to = from + limit - 1;

      const { data, count, error } = await supabase
      .from('campaign_stats') 
      .select('*', { count: 'exact' }) 
      .range(from, to)
      .order('created_at', { ascending: false });
      if (error) throw error;
      return {
        data : data,
        totalsitems: count
      }
    } catch (err) {
      console.error("Gagal ambil campaigns:", err);
      return { data: [], totalItems: 0 };
    }
  }
};