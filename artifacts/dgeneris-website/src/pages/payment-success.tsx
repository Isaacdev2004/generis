import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="max-w-md w-full mx-4">
        <CardContent className="p-12 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4" data-testid="text-payment-success-title">Payment Successful!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your payment. We've received your order and will be in touch shortly to begin your project.
          </p>
          <div className="flex flex-col gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-payment-success-portal">
              <Link href="/portal">GO TO CLIENT PORTAL</Link>
            </Button>
            <Button asChild variant="outline" data-testid="button-payment-success-home">
              <Link href="/">RETURN HOME</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
