import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FileText, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useListPortalProjects } from '@workspace/api-client-react';
import { useState, useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Portal() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('portal_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const { data: projects = [], isLoading } = useListPortalProjects();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="max-w-md w-full mx-4">
          <CardHeader>
            <CardTitle>Client Portal Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Please sign in to access your client portal. For demo purposes, enter any name and email:
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                if (name && email) {
                  const userData = { name, email, role: 'client' };
                  localStorage.setItem('portal_user', JSON.stringify(userData));
                  setUser(userData);
                }
              }}
              className="space-y-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-md"
                data-testid="input-portal-login-name"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-md"
                data-testid="input-portal-login-email"
              />
              <Button type="submit" className="w-full" data-testid="button-portal-login">
                ACCESS PORTAL
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-3xl font-bold mb-2" data-testid="text-portal-welcome">
              Welcome, {user.name}
            </h1>
            <p className="text-primary-foreground/80">View and manage your tender projects</p>
            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => {
                  localStorage.removeItem('portal_user');
                  setUser(null);
                }}
                data-testid="button-portal-logout"
              >
                Sign Out
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/portal/orders">View Orders</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold mb-6" data-testid="text-portal-projects-title">
            Your Projects
          </h2>

          {isLoading ? (
            <p className="text-muted-foreground" data-testid="text-portal-projects-loading">Loading projects...</p>
          ) : projects.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground" data-testid="text-portal-projects-empty">
                  No projects yet. Contact us to start your first tender project.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/portal/projects/${project.id}`} data-testid={`link-portal-project-${project.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">{project.serviceType}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{project.companyName}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <div
                            className={`px-2 py-1 rounded-full ${
                              project.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {project.status.replace(/_/g, ' ')}
                          </div>
                        </div>
                        {project.tenderDeadline && (
                          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            Deadline: {new Date(project.tenderDeadline).toLocaleDateString('en-GB')}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
