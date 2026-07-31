import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { PageWrapper } from '@/components/layout/page-wrapper';

import Home from '@/pages/home';
import About from '@/pages/about';
import Services from '@/pages/services';
import Sectors from '@/pages/sectors';
import Results from '@/pages/results';
import HowItWorks from '@/pages/how-it-works';
import Pricing from '@/pages/pricing';
import Resources from '@/pages/resources';
import BlogPost from '@/pages/blog-post';
import FAQs from '@/pages/faqs';
import Contact from '@/pages/contact';
import Checkout from '@/pages/checkout';
import PaymentSuccess from '@/pages/payment-success';
import PaymentCancelled from '@/pages/payment-cancelled';

import Portal from '@/pages/portal/index';
import ProjectDetail from '@/pages/portal/project-detail';
import PortalOrders from '@/pages/portal/orders';

import AdminLogin from '@/pages/admin/login';
import AdminDashboard from '@/pages/admin/dashboard';

import PrivacyPolicy from '@/pages/privacy-policy';
import Terms from '@/pages/terms';
import CookiePolicy from '@/pages/cookie-policy';
import RefundPolicy from '@/pages/refund-policy';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/sectors" component={Sectors} />
      <Route path="/results" component={Results} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={BlogPost} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/contact" component={Contact} />

      {/* Checkout & Payment */}
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment-success" component={PaymentSuccess} />
      <Route path="/payment-cancelled" component={PaymentCancelled} />

      {/* Client Portal */}
      <Route path="/portal" component={Portal} />
      <Route path="/portal/projects/:id" component={ProjectDetail} />
      <Route path="/portal/orders" component={PortalOrders} />

      {/* Admin */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />

      {/* Legal Pages */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/refund-policy" component={RefundPolicy} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <PageWrapper>
            <Router />
          </PageWrapper>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
