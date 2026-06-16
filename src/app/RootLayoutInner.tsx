import Navigation from "@/components/Navigation";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

export default function RootLayoutInner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <PageTransition>
        <GrainOverlay />
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </PageTransition>
    </SmoothScroll>
  );
}
