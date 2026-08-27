import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
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

import TenderDiscovery from '@/pages/services/tender-discovery';
import TenderWriting from '@/pages/services/tender-writing';
import BidStrategy from '@/pages/services/bid-strategy';
import BidReview from '@/pages/services/bid-review';
import CqcRegistrationSupport from '@/pages/services/cqc-registration-support';
import CareSector from '@/pages/sectors/care';
import CleaningSector from '@/pages/sectors/cleaning';
import AssessMyTender from '@/pages/assess-my-tender';
import TenderReadiness from '@/pages/tender-readiness';
import RedTeamReview from '@/pages/red-team-review';
import TenderOpportunities from '@/pages/tender-opportunities';

const queryClient = new QueryClient();

function AnimatedSwitch() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Router />
      </motion.div>
    </AnimatePresence>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/tender-discovery" component={TenderDiscovery} />
      <Route path="/services/tender-writing" component={TenderWriting} />
      <Route path="/services/bid-strategy" component={BidStrategy} />
      <Route path="/services/bid-review" component={BidReview} />
      <Route path="/services/cqc-registration-support" component={CqcRegistrationSupport} />
      <Route path="/sectors" component={Sectors} />
      <Route path="/sectors/care" component={CareSector} />
      <Route path="/sectors/cleaning" component={CleaningSector} />
      <Route path="/results" component={Results} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={BlogPost} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/contact" component={Contact} />
      <Route path="/assess-my-tender" component={AssessMyTender} />
      <Route path="/tender-readiness" component={TenderReadiness} />
      <Route path="/red-team-review" component={RedTeamReview} />
      <Route path="/tender-opportunities" component={TenderOpportunities} />

      <Route path="/checkout" component={Checkout} />
      <Route path="/payment-success" component={PaymentSuccess} />
      <Route path="/payment-cancelled" component={PaymentCancelled} />

      <Route path="/portal" component={Portal} />
      <Route path="/portal/projects/:id" component={ProjectDetail} />
      <Route path="/portal/orders" component={PortalOrders} />

      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />

      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/refund-policy" component={RefundPolicy} />

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
            <AnimatedSwitch />
          </PageWrapper>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
