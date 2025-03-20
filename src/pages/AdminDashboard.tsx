
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Helmet } from 'react-helmet-async';
import { useToast } from "@/components/ui/use-toast";
import { Trash2 } from 'lucide-react';
import { getContactSubmissions, deleteContactSubmission, updateSubmissionStatus } from '@/utils/api';

// Interface for contact form submissions
interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  problem: string;
  status: 'New' | 'Contacted' | 'Scheduled' | 'Completed';
  submittedAt: string;
}

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const data = await getContactSubmissions();
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast({
        title: "Error",
        description: "Failed to load inquiries. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if admin is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (!adminLoggedIn) {
      navigate('/admin');
      return;
    }
    
    fetchInquiries();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/admin');
  };

  const handleStatusChange = async (id: string, status: Inquiry['status']) => {
    try {
      const success = await updateSubmissionStatus(id, status);
      
      if (success) {
        setInquiries(inquiries.map(inquiry => 
          inquiry.id === id ? { ...inquiry, status } : inquiry
        ));
        
        toast({
          title: "Status updated",
          description: `Inquiry #${id} status changed to ${status}`,
        });
      } else {
        throw new Error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Update failed",
        description: "Failed to update inquiry status",
        variant: "destructive"
      });
    }
  };
  
  const handleDeleteInquiry = async (id: string) => {
    try {
      const success = await deleteContactSubmission(id);
      
      if (success) {
        setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
        
        toast({
          title: "Inquiry deleted",
          description: `Inquiry #${id} has been deleted successfully`,
        });
      } else {
        throw new Error('Failed to delete inquiry');
      }
    } catch (error) {
      console.error('Error deleting inquiry:', error);
      toast({
        title: "Delete failed",
        description: "Failed to delete inquiry",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Admin Dashboard | Appliance Care</title>
        <meta name="description" content="Admin dashboard for Appliance Care appliance repair service" />
      </Helmet>
      
      <header className="bg-white shadow-sm p-4 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Appliance Care Admin</h1>
          <Button variant="outline" onClick={handleLogout}>Logout</Button>
        </div>
      </header>
      
      <main className="flex-1 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">Customer Inquiries</h2>
            
            {isLoading ? (
              <div className="text-center py-8">
                <p>Loading inquiries...</p>
              </div>
            ) : inquiries.length > 0 ? (
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry) => (
                      <TableRow key={inquiry.id}>
                        <TableCell className="font-medium">{inquiry.id}</TableCell>
                        <TableCell>
                          <div className="font-medium">{inquiry.name}</div>
                          <div className="text-sm text-muted-foreground">{inquiry.email}</div>
                        </TableCell>
                        <TableCell>{inquiry.service}</TableCell>
                        <TableCell>
                          <div>{new Date(inquiry.date).toLocaleDateString()}</div>
                          <div className="text-sm text-muted-foreground">{inquiry.time}</div>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            inquiry.status === 'New' ? 'bg-blue-100 text-blue-800' :
                            inquiry.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                            inquiry.status === 'Scheduled' ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {inquiry.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                alert(`
                                  Customer: ${inquiry.name}
                                  Phone: ${inquiry.phone}
                                  Email: ${inquiry.email}
                                  Service: ${inquiry.service}
                                  Date: ${inquiry.date}
                                  Time: ${inquiry.time}
                                  Problem: ${inquiry.problem}
                                  Status: ${inquiry.status}
                                  Submitted: ${new Date(inquiry.submittedAt).toLocaleString()}
                                `);
                              }}
                            >
                              View
                            </Button>
                            <select
                              className="border rounded-md h-9 px-2 text-sm bg-background"
                              value={inquiry.status}
                              onChange={(e) => handleStatusChange(inquiry.id, e.target.value as Inquiry['status'])}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Scheduled">Scheduled</option>
                              <option value="Completed">Completed</option>
                            </select>
                            
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Inquiry</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this inquiry? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction 
                                    onClick={() => handleDeleteInquiry(inquiry.id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <Alert>
                <AlertDescription>No inquiries found.</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t p-4 text-center text-sm text-muted-foreground">
        <p>© 2025 Appliance Care Appliance Repair. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
