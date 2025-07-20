import { Bot, User, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  sources?: Array<{ title: string; url: string; }>;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={cn(
      "flex gap-3 p-4 animate-fade-in",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
        isUser 
          ? "bg-primary text-primary-foreground" 
          : "bg-gradient-surface border border-border"
      )}>
        {isUser ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4 text-primary" />
        )}
      </div>
      
      <div className={cn(
        "flex-1 max-w-[80%]",
        isUser ? "text-right" : "text-left"
      )}>
        <div className={cn(
          "inline-block p-3 rounded-lg shadow-sm",
          isUser 
            ? "bg-primary text-primary-foreground rounded-br-sm" 
            : "bg-gradient-surface border border-border text-foreground rounded-bl-sm"
        )}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
        
        {message.sources && message.sources.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-glow transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                {source.title}
              </a>
            ))}
          </div>
        )}
        
        <div className={cn(
          "text-xs text-muted-foreground mt-1",
          isUser ? "text-right" : "text-left"
        )}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};