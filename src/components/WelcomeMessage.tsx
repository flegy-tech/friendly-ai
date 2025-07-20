import { Bot, Book, CreditCard, Code, Shield } from "lucide-react";

export const WelcomeMessage = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6 animate-fade-in">
        <div className="flex justify-center">
          <div className="p-4 bg-primary rounded-2xl shadow-glow">
            <Bot className="h-12 w-12 text-primary-foreground" />
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome to MPGS Assistant
          </h2>
          <p className="text-lg text-muted-foreground">
            Your intelligent guide to Mastercard Payment Gateway Services documentation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 bg-gradient-surface border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Book className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Documentation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Get instant answers about MPGS features, APIs, and integration guides
            </p>
          </div>
          
          <div className="p-4 bg-gradient-surface border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Payment Methods</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn about supported payment methods and configuration options
            </p>
          </div>
          
          <div className="p-4 bg-gradient-surface border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Integration</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Step-by-step integration guides and code examples
            </p>
          </div>
          
          <div className="p-4 bg-gradient-surface border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Security</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Security requirements, compliance, and best practices
            </p>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          💡 <strong>Tip:</strong> Ask specific questions like "How do I implement 3D Secure?" or use the quick questions below
        </div>
      </div>
    </div>
  );
};