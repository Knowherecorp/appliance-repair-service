
// Service functions for handling API requests

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
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For now, just log the form data and return success
    console.log('Form submitted:', formData);
    
    // In a real application, this would be an actual API call:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await response.json();
    // return data;
    
    // Store form data in localStorage for demo purposes
    const existingData = localStorage.getItem('contactFormSubmissions');
    const submissions = existingData ? JSON.parse(existingData) : [];
    
    const newSubmission = {
      id: (submissions.length + 1).toString(),
      ...formData,
      status: 'New',
      submittedAt: new Date().toISOString()
    };
    
    submissions.push(newSubmission);
    localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));
    
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
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Retrieve data from localStorage for demo purposes
    const storedData = localStorage.getItem('contactFormSubmissions');
    const submissions = storedData ? JSON.parse(storedData) : [];
    
    return submissions;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return [];
  }
};

// Function to delete a contact form submission
export const deleteContactSubmission = async (id: string): Promise<boolean> => {
  try {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Remove from localStorage
    const storedData = localStorage.getItem('contactFormSubmissions');
    if (!storedData) return false;
    
    const submissions = JSON.parse(storedData);
    const updatedSubmissions = submissions.filter((sub: any) => sub.id !== id);
    
    localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions));
    
    return true;
  } catch (error) {
    console.error('Error deleting submission:', error);
    return false;
  }
};

// Function to update a contact form submission's status
export const updateSubmissionStatus = async (id: string, status: string): Promise<boolean> => {
  try {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update in localStorage
    const storedData = localStorage.getItem('contactFormSubmissions');
    if (!storedData) return false;
    
    const submissions = JSON.parse(storedData);
    const updatedSubmissions = submissions.map((sub: any) => 
      sub.id === id ? { ...sub, status } : sub
    );
    
    localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions));
    
    return true;
  } catch (error) {
    console.error('Error updating submission status:', error);
    return false;
  }
};
