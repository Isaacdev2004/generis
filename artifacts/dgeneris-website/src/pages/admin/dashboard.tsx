import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Users, FileText, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGetAdminStats } from '@workspace/api-client-react';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('portal_user');
    if (stored) {
      const userData = JSON.parse(stored);
      if (userData.role === 'admin') {
        setUser(userData);
      } else {
        setLocation('/admin/login');
      }
    } else {
      setLocation('/admin/login');
    }
  }, [setLocation]);

  const { data: stats, isLoading } = useGetAdminStats();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold" data-testid="text-admin-dashboard-title">Admin Dashboard</h1>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem('portal_user');
              setLocation('/admin/login');
            }}
            data-testid="button-admin-logout"
          >
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Enquiries</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalEnquiries || 0}</div>
              <p className="text-xs text-muted-foreground">{stats?.newEnquiries || 0} new</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalOrders || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">£{((stats?.totalRevenuePence || 0) / 100).toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.activeProjects || 0}</div>
              <p className="text-xs text-muted-foreground">{stats?.completedProjects || 0} completed</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Enquiries</CardTitle>
            </CardHeader>
            <CardContent>
              {stats?.recentEnquiries && stats.recentEnquiries.length > 0 ? (
                <div className="space-y-3">
                  {stats.recentEnquiries.slice(0, 5).map((enq) => (
                    <div key={enq.id} className="border-b pb-2 last:border-0">
                      <p className="font-medium text-sm">{enq.name}</p>
                      <p className="text-xs text-muted-foreground">{enq.companyName} - {enq.sector}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No enquiries yet</p>
              )}
              <Button asChild variant="outline" className="w-full mt-4" size="sm">
                <Link href="/admin/enquiries">View All Enquiries</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/admin/projects">Manage Projects</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/admin/blog">Manage Blog Posts</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/admin/faqs">Manage FAQs</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/admin/testimonials">Manage Testimonials</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/admin/case-studies">Manage Case Studies</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
