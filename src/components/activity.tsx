import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ActivityProps {
  name: string;
  date: string;
  description: string;
  imageUrl?: string;
  imageFallback: string;
}

export function Activity({
  name,
  date,
  description,
  imageUrl,
  imageFallback,
}: ActivityProps) {
  return (
    <div class="border border-accent p-4 rounded-lg flex gap-2 justify-between items-center">
      <div>
        <div class="text-base">{name}</div>
        <div class="p-2">
          <div class="text-muted-foreground text-xs">{date}</div>
          <p class="text-sm">{description}</p>
        </div>
      </div>
      <Avatar class="h-10 w-10">
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{imageFallback}</AvatarFallback>
      </Avatar>
    </div>
  );
}
