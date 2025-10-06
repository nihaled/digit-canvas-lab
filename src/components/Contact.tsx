import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Get In Touch
        </h2>
        <Card className="p-8 bg-card border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Edavalath, Kakkur<br />
                    Kozhikode 673613
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+918281542427"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 82815 42427
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:nihaledavalath@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    nihaledavalath@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity animate-glow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
