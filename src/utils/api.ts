
// Service functions for handling API requests
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

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
        message: error.message || 'There was an error submitting your request. Please try again.'
      };
    }
    
    console.log('Form submitted:', data);
    
    return {
      success: true,
      message: 'Form submitted successfully!'
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'There was an error submitting your request. Please try again.'
    };
  }
};

// Function to get all contact form submissions (for admin dashboard)
export const getContactSubmissions = async (): Promise<any[]> => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching submissions:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return [];
  }
};

// Function to delete a contact form submission
export const deleteContactSubmission = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);
      
    if (error) {
      console.error('Error deleting submission:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting submission:', error);
    return false;
  }
};

// Function to update a contact form submission's status
export const updateSubmissionStatus = async (id: string, status: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id);
      
    if (error) {
      console.error('Error updating submission status:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error updating submission status:', error);
    return false;
  }
};
