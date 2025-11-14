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
      <div className="w-[370px] bg-white rounded-[6px] border border-gray-200 shadow-lg pt-[10px] pb-[10px] px-6">
        {/* All pages option */}
        <div className="flex items-center justify-between py-4">
          <label
            htmlFor="all-pages"
            className="text-[14px] font-normal leading-[130%] text-gray-900 cursor-pointer flex-1"
          >
            All pages
          </label>
          <input
            type="checkbox"
            id="all-pages"
            checked={allPagesChecked}
            onChange={handleAllPagesToggle}
            className="w-5 h-5 rounded border-2 border-gray-300 text-blue-500 focus:ring-0 focus:outline-none cursor-pointer transition-colors accent-blue-500"
          />
        </div>

        {/* Border after All pages */}
        <div className="border-b border-[#CDCDCD]"></div>

        {/* Individual pages */}
        <div className="space-y-0">
          {pages.map((page) => (
            <div
              key={page.id}
              className="flex items-center justify-between py-4"
            >
              <label
                htmlFor={`page-${page.id}`}
                className="text-[14px] font-normal leading-[130%] text-gray-900 cursor-pointer flex-1"
              >
                {page.name}
              </label>
              <input
                type="checkbox"
                id={`page-${page.id}`}
                checked={page.checked}
                onChange={() => handlePageToggle(page.id)}
                className="w-5 h-5 rounded border-2 border-gray-300 text-blue-500 focus:ring-0 focus:outline-none cursor-pointer transition-colors accent-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Border before button */}
        <div className="border-b border-[#CDCDCD] mb-6"></div>

        {/* Done button */}
        <Button onClick={handleDone} fullWidth>
          Done
        </Button>
      </div>
    </div>
  );
}
