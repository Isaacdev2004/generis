import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { ArrowLeft, Receipt } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useListPortalOrders } from '@workspace/api-client-react';

export default function PortalOrders() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('portal_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const { data: orders = [], isLoading } = useListPortalOrders();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">Please sign in to view orders.</p>
            <Button asChild className="mt-4">
              <Link href="/portal">Go to Portal</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <Link
          href="/portal"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          data-testid="link-orders-back"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portal
        </Link>

        <h1 className="text-3xl font-bold mb-6" data-testid="text-orders-title">Orders & Invoices</h1>

        {isLoading ? (
          <p className="text-muted-foreground">Loading orders...</p>
        ) : orders.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Receipt className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No orders yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} data-testid={`card-order-${order.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{order.packageType.replace(/_/g, ' ')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Amount</p>
                      <p className="font-semibold">£{(order.amountPence / 100).toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Status</p>
                      <div
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'failed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {order.status}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Date</p>
                      <p className="text-sm">{new Date(order.createdAt).toLocaleDateString('en-GB')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{order.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
