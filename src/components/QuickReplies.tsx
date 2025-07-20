import { Button } from "@/components/ui/button";

const suggestedQuestions = [
  "What is MPGS?",
  "How do I implement payment processing?",
  "Show me the API documentation",
  "What are the integration steps?",
  "How do I handle webhooks?",
  "What are the supported payment methods?",
  "How do I test the integration?",
  "What are the security requirements?"
];

interface QuickRepliesProps {
  onQuestionSelect: (question: string) => void;
  isLoading: boolean;
}

export const QuickReplies = ({ onQuestionSelect, isLoading }: QuickRepliesProps) => {
  return (
    <div className="p-4 border-t border-border bg-gradient-surface">
      <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((question) => (
          <Button
            key={question}
            variant="outline"
            size="sm"
            onClick={() => onQuestionSelect(question)}
            disabled={isLoading}
            className="text-xs border-border hover:border-primary hover:text-primary transition-colors"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
};