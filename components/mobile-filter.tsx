"use client";

import { Color, Size } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import Filter from "./filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(true);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div
        className="flex items-center w-fit bg-slate-300 cursor-pointer"
        onClick={onOpen}
      >
        Filters <Plus size={20} />
      </div>

      {/* Dialog */}
      {open && (
        <div className="flex items-center justify-center fixed inset-0 z-30">
          <div
            onClick={onClose}
            className="bg-black/50 fixed inset-0 z-40 cursor-pointer"
          />
          <div className="bg-white absolute z-50 p-2 rounded flex flex-col min-w-96">
            <CgClose
              size={20}
              className="self-end hover:text-slate-600 cursor-pointer"
              onClick={onClose}
            />
            <div className="p-10">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileFilters;
