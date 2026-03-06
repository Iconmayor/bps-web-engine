import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a Free Quote</DialogTitle>
          <DialogDescription>Fill in your details and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="q-name">Name</Label>
            <Input id="q-name" required placeholder="Your name" />
          </div>
          <div>
            <Label htmlFor="q-phone">Phone Number</Label>
            <Input id="q-phone" required type="tel" placeholder="+44..." />
          </div>
          <div>
            <Label htmlFor="q-email">Email</Label>
            <Input id="q-email" required type="email" placeholder="you@email.com" />
          </div>
          <div>
            <Label>Service Needed</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                <SelectItem value="leak">Leak Repairs</SelectItem>
                <SelectItem value="pipe">Pipe Installation</SelectItem>
                <SelectItem value="bathroom">Bathroom Plumbing</SelectItem>
                <SelectItem value="kitchen">Kitchen Plumbing</SelectItem>
                <SelectItem value="heating">Heating Repairs</SelectItem>
                <SelectItem value="general">General Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="q-message">Message</Label>
            <Textarea id="q-message" placeholder="Describe your plumbing issue..." />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
