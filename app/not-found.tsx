import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="font-display text-[120px] font-bold text-gold/20 leading-none select-none">
          404
        </p>
        <h1 className="font-display text-3xl font-bold text-cream">Page Not Found</h1>
        <p className="text-muted max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" size="lg">
          <ArrowLeft size={18} /> Back to Home
        </Button>
      </div>
    </div>
  );
}
