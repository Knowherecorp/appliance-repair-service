
// Service functions for handling API requests
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log environment variables for debugging (values will be undefined if not set)
console.log('Supabase URL:', supabaseUrl ? 'Defined' : 'Undefined');
console.log('Supabase Key:', supabaseKey ? 'Defined' : 'Undefined');

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Make sure to set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseKey || ''
);

// Check if Supabase connection is working
(async () => {
  try {
    const { data, error } = await supabase.from('contact_submissions').select('count', { count: 'exact', head: true });
    if (error) {
      console.error('Supabase connection test failed:', error.message);
    } else {
      console.log('Supabase connection successful');
    }
  } catch (err) {
    console.error('Error testing Supabase connection:', err);
  }
})();

export interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  problem: string;
}

// Function to submit contact form data
export const submitContactForm = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Submitting form data to Supabase:', formData);
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          problem: formData.problem,
          status: 'New',
          submitted_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Error submitting form:', error);
      return {
        success: false,
        message: `Error: ${error.message}. ${error.details ? `Details: ${error.details}` : ''}`
      };
    }
    
    console.log('Form submitted successfully:', data);
    
    return {
      success: true,
      message: 'Form submitted successfully!'
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: error instanceof Error 
        ? `Unexpected error: ${error.message}` 
        : 'There was an unexpected error submitting your request. Please try again.'
    };
  }
};

// Function to get all contact form submissions (for admin dashboard)
export const getContactSubmissions = async (): Promise<any[]> => {
  try {
    console.log('Fetching submissions from Supabase');
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching submissions:', error);
      return [];
    }
    
    console.log(`Successfully fetched ${data?.length || 0} submissions`);
    return data || [];
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return [];
  }
};

// Function to delete a contact form submission
export const deleteContactSubmission = async (id: string): Promise<boolean> => {
  try {
    console.log(`Deleting submission with ID: ${id}`);
    
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);
      
    if (error) {
      console.error('Error deleting submission:', error);
      return false;
    }
    
    console.log(`Successfully deleted submission with ID: ${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting submission:', error);
    return false;
  }
};

// Function to update a contact form submission's status
export const updateSubmissionStatus = async (id: string, status: string): Promise<boolean> => {
  try {
    console.log(`Updating status for submission ID: ${id} to "${status}"`);
    
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id);
      
    if (error) {
      console.error('Error updating submission status:', error);
      return false;
    }
    
    console.log(`Successfully updated status for submission ID: ${id}`);
    return true;
  } catch (error) {
    console.error('Error updating submission status:', error);
    return false;
  }
};
