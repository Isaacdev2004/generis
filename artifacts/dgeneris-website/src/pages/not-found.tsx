import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="max-w-md w-full mx-4">
        <CardContent className="p-12 text-center">
          <FileQuestion className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4" data-testid="text-404-title">404</h1>
          <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-404-home">
            <Link href="/">GO TO HOMEPAGE</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
