import { createClient } from '@supabase/supabase-js';
import { supabase as supabaseClient } from '@/integrations/supabase/client';

export interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  date: string;
  time: string;
  problem: string;
}

// Define status type to match the Inquiry interface in AdminDashboard
export type SubmissionStatus = 'New' | 'Contacted' | 'Scheduled' | 'Completed';

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

// Use the imported Supabase client if available, otherwise create a new one
export const supabase = supabaseClient || createSupabaseClient();

export const submitContactForm = async (formData: FormData) => {
  // Add a slight delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 800));
  
  try {
    // If Supabase is available, try to use it
    if (supabase) {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          ...formData,
          status: 'New'
        }]);
        
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

// New function to get contact submissions
export const getContactSubmissions = async () => {
  if (!supabase) {
    console.warn('Supabase client not available, returning mock data');
    
    // Return mock data for development with proper status typing
    return [
      {
        id: '1',
        name: 'John Smith',
        phone: '555-123-4567',
        email: 'john@example.com',
        address: '123 Main St',
        service: 'washing-machine',
        date: '2025-01-15',
        time: 'Morning (8AM - 12PM)',
        problem: 'Machine not spinning properly',
        status: 'New' as SubmissionStatus,
        submittedAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Jane Doe',
        phone: '555-987-6543',
        email: 'jane@example.com',
        address: '456 Elm St',
        service: 'refrigerator',
        date: '2025-01-16',
        time: 'Afternoon (12PM - 4PM)',
        problem: 'Refrigerator not cooling',
        status: 'Contacted' as SubmissionStatus,
        submittedAt: new Date().toISOString()
      }
    ];
  }
  
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });
      
    if (error) throw error;
    
    // Map the data to match the expected format in the admin dashboard
    // And ensure status is cast to the correct type
    return data.map(item => ({
      id: item.id.toString(),
      name: item.name,
      phone: item.phone,
      email: item.email,
      address: item.address,
      service: item.service,
      date: item.date,
      time: item.time,
      problem: item.problem,
      status: (item.status || 'New') as SubmissionStatus,
      submittedAt: item.submitted_at
    }));
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw error;
  }
};

// New function to update submission status
export const updateSubmissionStatus = async (id: string, status: SubmissionStatus) => {
  if (!supabase) {
    console.warn('Supabase client not available, returning mock success');
    return true;
  }
  
  try {
    // Convert string id to number for Supabase
    const numericId = parseInt(id, 10);
    
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', numericId);
      
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error updating submission status:', error);
    return false;
  }
};

// New function to delete contact submission
export const deleteContactSubmission = async (id: string) => {
  if (!supabase) {
    console.warn('Supabase client not available, returning mock success');
    return true;
  }
  
  try {
    // Convert string id to number for Supabase
    const numericId = parseInt(id, 10);
    
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', numericId);
      
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    return false;
  }
};
