import { MessageCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onClearChat: () => void;
}

export const ChatHeader = ({ onClearChat }: ChatHeaderProps) => {
  return (
    <div className="bg-gradient-surface border-b border-border p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary rounded-lg shadow-glow">
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground">MPGS Assistant</h1>
          <p className="text-sm text-muted-foreground">Ask anything about MPGS documentation</p>
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearChat}
        className="text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};