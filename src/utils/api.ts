
import { createClient } from '@supabase/supabase-js';

export interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  problem: string;
}

// Create a mock implementation for local development when Supabase credentials are missing
const createSupabaseClient = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Missing Supabase environment variables. Using mock implementation for development.');
    return null;
  }
  
  try {
    return createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    return null;
  }
};

const supabase = createSupabaseClient();

export const submitContactForm = async (formData: FormData) => {
  // Add a slight delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 800));
  
  try {
    // If Supabase is available, try to use it
    if (supabase) {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);
        
      if (error) throw error;
    }
    
    // For development/fallback when Supabase isn't connected
    console.log('Form submission data:', formData);
    
    return {
      success: true,
      message: 'Your service request has been submitted successfully.'
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'There was an error submitting your request. Please try again.'
    };
  }
};
