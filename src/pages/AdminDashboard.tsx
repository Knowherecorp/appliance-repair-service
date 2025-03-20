
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Helmet } from 'react-helmet-async';
import { useToast } from "@/components/ui/use-toast";

// Mock data for demo purposes - in a real app, this would come from a database
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

const mockInquiries: Inquiry[] = [
  {
    id: '1',
    name: 'John Smith',
    phone: '(555) 123-4567',
    email: 'john.smith@example.com',
    service: 'Refrigerator Repair',
    date: '2023-12-15',
    time: 'Morning (8AM - 12PM)',
    problem: 'Refrigerator not cooling properly',
    status: 'New',
    submittedAt: '2023-12-10T14:30:00'
  },
  {
    id: '2',
    name: 'Emily Johnson',
    phone: '(555) 987-6543',
    email: 'emily.j@example.com',
    service: 'Washing Machine Repair',
    date: '2023-12-16',
    time: 'Afternoon (12PM - 4PM)',
    problem: 'Loud noise during spin cycle',
    status: 'Contacted',
    submittedAt: '2023-12-11T09:15:00'
  },
  {
    id: '3',
    name: 'Michael Davis',
    phone: '(555) 456-7890',
    email: 'michael.d@example.com',
    service: 'AC Repair',
    date: '2023-12-17',
    time: 'Evening (4PM - 8PM)',
    problem: 'AC not cooling and making strange noises',
    status: 'Scheduled',
    submittedAt: '2023-12-10T16:45:00'
  }
];

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if admin is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (!adminLoggedIn) {
      navigate('/admin');
      return;
    }
    
    // Simulate loading inquiries from an API
    setTimeout(() => {
      setInquiries(mockInquiries);
      setIsLoading(false);
    }, 1000);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/admin');
  };

  const handleStatusChange = (id: string, status: Inquiry['status']) => {
    setInquiries(inquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status } : inquiry
    ));
    
    toast({
      title: "Status updated",
      description: `Inquiry #${id} status changed to ${status}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Admin Dashboard | HomeFix Appliance Repair</title>
        <meta name="description" content="Admin dashboard for HomeFix appliance repair service" />
      </Helmet>
      
      <header className="bg-white shadow-sm p-4 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">HomeFix Admin</h1>
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
                      <TableHead>Action</TableHead>
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
        <p>© 2023 HomeFix Appliance Repair. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
