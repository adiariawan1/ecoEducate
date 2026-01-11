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
  }
};