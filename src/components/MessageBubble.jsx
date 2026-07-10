import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown, Check, Loader2, AlertCircle } from "lucide-react";

const statusConfig = {
  pending: { icon: Loader2, className: "text-walnut/40 animate-spin", label: "Starting..." },
  running: { icon: Loader2, className: "text-sandstone animate-spin", label: "Running..." },
  in_progress: { icon: Loader2, className: "text-sandstone animate-spin", label: "In progress..." },
  completed: { icon: Check, className: "text-green-600", label: "Completed" },
  success: { icon: Check, className: "text-green-600", label: "Done" },
  failed: { icon: AlertCircle, className: "text-red-500", label: "Failed" },
  error: { icon: AlertCircle, className: "text-red-500", label: "Error" },
};

function FunctionDisplay({ toolCall }) {
  const [expanded, setExpanded] = useState(false);
  const status = toolCall.status || "pending";
  const config = statusConfig[status] || statusConfig.pending;

  const isFailed =
    status === "failed" ||
    status === "error" ||
    (typeof toolCall.results === "string" && /error|failed/i.test(toolCall.results)) ||
    (toolCall.results && typeof toolCall.results === "object" && toolCall.results.success === false);

  const Icon = isFailed ? AlertCircle : config.icon;
  const iconClass = isFailed ? "text-red-500" : config.className;
  const label = isFailed ? "Failed" : config.label;

  const projection = toolCall.display_projection || {};
  const hideDetails = projection.hide_details && projection.details_redacted;
  const displayName = (toolCall.name || "function").replace(/_/g, " ");

  let parsedArgs = toolCall.arguments_string;
  try { parsedArgs = JSON.parse(toolCall.arguments_string); } catch {}

  let parsedResults = toolCall.results;
  try { if (typeof parsedResults === "string") parsedResults = JSON.parse(parsedResults); } catch {}

  if (hideDetails) {
    return (
      <div className="mt-2 text-xs text-walnut/60 flex items-center gap-1.5">
        <Icon size={12} className={iconClass} />
        <span>{isFailed ? projection.error_label || label : projection.active_label || projection.label || label}</span>
      </div>
    );
  }

  return (
    <div className="mt-2 text-xs">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-walnut/60 hover:text-walnut transition-colors"
      >
        <Icon size={12} className={iconClass} />
        <span className="capitalize">{displayName}</span>
        <span>— {label}</span>
        <ChevronDown size={12} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="mt-1.5 pl-4 space-y-1">
          {toolCall.arguments_string && (
            <div>
              <span className="text-walnut/40">Parameters:</span>
              <pre className="mt-0.5 p-2 bg-oatmeal rounded text-[10px] overflow-x-auto whitespace-pre-wrap">
                {typeof parsedArgs === "string" ? parsedArgs : JSON.stringify(parsedArgs, null, 2)}
              </pre>
            </div>
          )}
          {toolCall.results != null && (
            <div>
              <span className="text-walnut/40">Result:</span>
              <pre className="mt-0.5 p-2 bg-oatmeal rounded text-[10px] overflow-x-auto whitespace-pre-wrap">
                {typeof parsedResults === "string" ? parsedResults : JSON.stringify(parsedResults, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-lg ${
          isUser ? "bg-walnut text-bone" : "bg-oatmeal text-walnut"
        }`}
      >
        {message.content &&
          (isUser ? (
            <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
          ) : (
            <div className="text-sm leading-relaxed">
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <p className="mb-1 last:mb-0" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-1" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-1" {...props} />,
                  a: ({ node, ...props }) => (
                    <a className="text-sandstone underline" target="_blank" rel="noopener noreferrer" {...props} />
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          ))}
        {message.tool_calls?.map((tc, idx) => (
          <FunctionDisplay key={idx} toolCall={tc} />
        ))}
      </div>
    </div>
  );
}