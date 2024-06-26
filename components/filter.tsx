"use client";

import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div>
      <h2 className="font-bold">{name}</h2>

      <div>
        {data.map((filter) => (
          <div
            key={filter.id}
            className={cn(
              "cursor-pointer",
              selectedValue === filter.id && "underline"
            )}
            onClick={() => onClick(filter.id)}
          >
            {filter.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
