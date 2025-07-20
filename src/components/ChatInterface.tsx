import { useState, useRef, useEffect } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage, Message } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";
import { WelcomeMessage } from "./WelcomeMessage";
import { ChatService } from "@/services/ChatService";
import { useToast } from "@/hooks/use-toast";

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const generateMessageId = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const handleSendMessage = async (content: string) => {
    if (isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: generateMessageId(),
      content,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Search MPGS content
      const searchResult = await ChatService.searchMPGSContent(content);
      
      if (!searchResult.success) {
        throw new Error(searchResult.error || 'Failed to search documentation');
      }

      // Generate AI response
      const responseContent = ChatService.generateResponse(content, searchResult.data || []);
      
      // Add assistant message
      const assistantMessage: Message = {
        id: generateMessageId(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
        sources: searchResult.data?.map(result => ({
          title: result.title,
          url: result.url
        }))
      };

      setMessages(prev => [...prev, assistantMessage]);
      
    } catch (error) {
      console.error('Error processing message:', error);
      
      const errorMessage: Message = {
        id: generateMessageId(),
        content: "I apologize, but I'm having trouble accessing the MPGS documentation right now. Please try again in a moment, or check the official MPGS documentation directly at https://mpgs.fingent.wiki/",
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to search MPGS documentation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    toast({
      title: "Chat Cleared",
      description: "Conversation history has been cleared.",
    });
  };

  const handleQuestionSelect = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-background">
      <ChatHeader onClearChat={handleClearChat} />
      
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <div className="space-y-1">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        {messages.length === 0 && (
          <QuickReplies 
            onQuestionSelect={handleQuestionSelect} 
            isLoading={isLoading}
          />
        )}
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};