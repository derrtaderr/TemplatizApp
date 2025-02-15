import { cn } from "@/lib/utils";
import { TemplatizeButton } from "./templatize-button";

export const TemplatizeSidebar = () => {
  return (
    <>
      <TemplatizeButton />
      <div className="fixed right-0 top-0 w-[300px] h-screen bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-700 z-40 p-4">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Templatiz</h3>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Save this post as a template to reuse its structure for your own content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 