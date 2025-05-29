import { mapProps } from "@paths/react";

// Make a tailwind nice badge UI for a conference
export default function GrokBadge({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <img src={image} alt={name} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-gray-500">{title}</span>
      </div>
    </div>
  );
}

mapProps(GrokBadge, {
  name: "grokPack.name",
  title: "grokPack.title",
  image: "grokPack.image",
});
