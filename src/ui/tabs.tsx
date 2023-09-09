import { Tabs as TabsPrimitive } from "@kobalte/core";
import type { Component } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "../utils/utils";

const Tabs = TabsPrimitive.Root;

const TabsList: Component<TabsPrimitive.TabsListProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <TabsPrimitive.List
      class={cn(
        "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
        props.class
      )}
      {...rest}
    />
  );
};

const TabsTrigger: Component<TabsPrimitive.TabsTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <TabsPrimitive.Trigger
      class={cn(
        "ring-offset-background focus-visible:ring-ring data-[selected]:bg-background data-[selected]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:shadow-sm",
        props.class
      )}
      {...rest}
    />
  );
};

const TabsContent: Component<TabsPrimitive.TabsContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <TabsPrimitive.Content
      class={cn(
        "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        props.class
      )}
      {...rest}
    />
  );
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
