import { Link } from 'wouter';
import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="max-w-md w-full mx-4">
        <CardContent className="p-12 text-center">
          <XCircle className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4" data-testid="text-payment-cancelled-title">Payment Cancelled</h1>
          <p className="text-muted-foreground mb-6">
            Your payment was cancelled. If this was a mistake, you can try again or contact us for assistance.
          </p>
          <div className="flex flex-col gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-payment-cancelled-checkout">
              <Link href="/checkout">TRY AGAIN</Link>
            </Button>
            <Button asChild variant="outline" data-testid="button-payment-cancelled-home">
              <Link href="/">RETURN HOME</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
