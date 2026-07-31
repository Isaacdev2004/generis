import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminLogin() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminUser = { name: 'Admin', email: 'admin@dgeneris.co.uk', role: 'admin' };
    localStorage.setItem('portal_user', JSON.stringify(adminUser));
    setLocation('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="max-w-md w-full mx-4">
        <CardHeader>
          <CardTitle>Admin Access</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            For demo purposes, click below to access the admin dashboard:
          </p>
          <form onSubmit={handleLogin}>
            <Button type="submit" className="w-full" data-testid="button-admin-login">
              ACCESS ADMIN DASHBOARD
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
