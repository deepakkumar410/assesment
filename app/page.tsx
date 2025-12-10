"use client";

import { ModelSelector } from "@/components/ModelSelector";
import { PromptEditor } from "@/components/PromptEditor";
import { ParametersPanel } from "@/components/ParametersPanel";
import { ChatArea } from "@/components/ChatArea";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SessionProvider } from "@/contexts/SessionContext";
import { FormProvider } from "@/contexts/FormContext";

export default function Home() {
  return (
    <SessionProvider>
      <FormProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              AI Interface Prototype
            </h1>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - Model Selector & Parameters */}
            <aside className="lg:col-span-3 space-y-6">
              <ModelSelector />
              <ParametersPanel />
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-6">
              <PromptEditor />
              <ChatArea />
            </div>
          </div>
        </main>
      </div>
      </FormProvider>
    </SessionProvider>
  );
}

