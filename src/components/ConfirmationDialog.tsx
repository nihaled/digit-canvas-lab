import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface ConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customerName: string;
}

const ConfirmationDialog = ({ open, onOpenChange, customerName }: ConfirmationDialogProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Your order for The Perfect Chair is confirmed! Thank you for your purchase.");
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-primary animate-scale-in" />
          </div>
          <DialogTitle className="text-2xl text-center">Order Confirmed!</DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Thank you, {customerName}! Your order for The Perfect Chair has been confirmed.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              ✅ Confirmation email has been sent to your inbox
            </p>
            <p className="text-sm text-muted-foreground">
              ✅ WhatsApp confirmation is ready to send
            </p>
          </div>

          <Button 
            onClick={handleWhatsApp}
            className="w-full"
            size="lg"
          >
            Send WhatsApp Confirmation
          </Button>

          <Button 
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
