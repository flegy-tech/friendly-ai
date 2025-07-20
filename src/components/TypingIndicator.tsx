import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 p-4 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-surface border border-border flex items-center justify-center">
        <Bot className="h-4 w-4 text-primary" />
      </div>
      
      <div className="flex-1">
        <div className="inline-block p-3 rounded-lg rounded-bl-sm bg-gradient-surface border border-border">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground mt-1">
          Searching MPGS documentation...
        </div>
      </div>
    </div>
  );
};