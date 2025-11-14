import { useState } from "react";
import Button from "./custom/button/Button";

interface Page {
  id: number;
  name: string;
  checked: boolean;
}

export default function PageSelector() {
  const [pages, setPages] = useState<Page[]>([
    { id: 1, name: "Page 1", checked: false },
    { id: 2, name: "Page 2", checked: false },
    { id: 3, name: "Page 3", checked: false },
    { id: 4, name: "Page 4", checked: false },
  ]);

  const [allPagesChecked, setAllPagesChecked] = useState(false);

  const handleAllPagesToggle = () => {
    const newValue = !allPagesChecked;
    setAllPagesChecked(newValue);
    setPages(pages.map((page) => ({ ...page, checked: newValue })));
  };

  const handlePageToggle = (id: number) => {
    const updatedPages = pages.map((page) =>
      page.id === id ? { ...page, checked: !page.checked } : page
    );
    setPages(updatedPages);

    // Update "All pages" checkbox based on individual page states
    const allChecked = updatedPages.every((page) => page.checked);
    setAllPagesChecked(allChecked);
  };

  const handleDone = () => {
    const selectedPages = pages.filter((page) => page.checked);
    console.log("Selected pages:", selectedPages);
    // Add your done logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        {/* All pages option */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <label
            htmlFor="all-pages"
            className="text-sm font-medium text-gray-900 cursor-pointer flex-1"
          >
            All pages
          </label>
          <input
            type="checkbox"
            id="all-pages"
            checked={allPagesChecked}
            onChange={handleAllPagesToggle}
            className="w-5 h-5 rounded border-2 border-gray-300 text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0 cursor-pointer transition-colors"
          />
        </div>

        {/* Individual pages */}
        <div className="space-y-0">
          {pages.map((page) => (
            <div
              key={page.id}
              className="flex items-center justify-between py-4 border-b border-gray-100"
            >
              <label
                htmlFor={`page-${page.id}`}
                className="text-sm font-medium text-gray-900 cursor-pointer flex-1"
              >
                {page.name}
              </label>
              <input
                type="checkbox"
                id={`page-${page.id}`}
                checked={page.checked}
                onChange={() => handlePageToggle(page.id)}
                className="w-5 h-5 rounded border-2 border-gray-300 text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0 cursor-pointer transition-colors"
              />
            </div>
          ))}
        </div>

        {/* Done button */}
        <div className="mt-6">
          <Button onClick={handleDone} fullWidth>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}
