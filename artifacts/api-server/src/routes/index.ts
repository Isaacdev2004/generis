import { Router, type IRouter } from "express";
import healthRouter from "./health";
import enquiriesRouter from "./enquiries";
import faqsRouter from "./faqs";
import testimonialsRouter from "./testimonials";
import caseStudiesRouter from "./case-studies";
import blogRouter from "./blog";
import newsletterRouter from "./newsletter";
import checkoutRouter from "./checkout";
import portalRouter from "./portal";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(enquiriesRouter);
router.use(faqsRouter);
router.use(testimonialsRouter);
router.use(caseStudiesRouter);
router.use(blogRouter);
router.use(newsletterRouter);
router.use(checkoutRouter);
router.use(portalRouter);
router.use(adminRouter);

export default router;
