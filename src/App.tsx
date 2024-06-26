import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core";
import { For, type Component } from "solid-js";
import { Activity } from "./components/activity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ModeToggle } from "./ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const data = {
  name: "Orest Khanenya",
  title: "Senior Software Engineer",
  description: `Hey there! 👋 \n\nI'm Orest, a Software Engineer with a knack for creating awesome tech solutions.\n\nCurrently, I'm diving into an exciting project at Langtail, where we're cooking up some seriously cool stuff.\n\nWith my previous experience at CGI, eMan, and Ceros under my belt, I'm all set to tackle whatever comes our way.\n\nLet's build something awesome together! 🚀`,
  currentWorkplace: {
    name: "Langtail",
    description: "Senior Software Engineer",
    date: "2024 - Current",
    imageUrl:
      "https://ph-files.imgix.net/ca63d958-71de-4a1f-aac9-54c475d86fb8.png",
  },
  lastDegree: {
    name: "University of Pardubice",
    description: "Bachelor's degree, Information Technology",
    date: "2013 - 2017",
    imageUrl: "https://www.upce.cz/sites/default/files/themes/upce/logo.svg",
  },
  sections: [
    {
      id: "skills",
      name: "Skills",
      items: [
        {
          type: "actively-using",
          name: "Actively using",
          values: [
            "JavaScript",
            "TypeScript",
            "SolidJS",
            "React",
            "Next.js",
            "TailwindCSS",
            "MobX",
            "PWA",
          ],
        },
        {
          type: "good-grasp",
          name: "Good grasp",
          values: ["Electron", "Tauri", "Node.js"],
        },
        {
          type: "operating-systems",
          name: "Operating systems",
          values: ["Linux", "macOS", "Windows"],
        },
      ],
    },
    {
      id: "languages",
      name: "Languages",
      items: [
        {
          language: "English",
          proficiency: "Professional working proficiency",
        },
        {
          language: "Czech",
          proficiency: "Full professional proficiency",
        },
        {
          language: "Russian",
          proficiency: "Native",
        },
      ],
    },
  ],
};

const App: Component = () => {
  const storageManager = cookieStorageManagerSSR(document.cookie);

  return (
    <>
      <ColorModeScript storageType={storageManager.type} />
      <ColorModeProvider storageManager={storageManager}>
        <div class="p-4 flex flex-col items-center">
          <main class="w-full max-w-2xl flex flex-col gap-4">
            <Card>
              <CardHeader class="p-4">
                <div class="flex gap-2 items-end">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/7251929" />
                  </Avatar>
                  <div class="flex-grow flex flex-col justify-center">
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>
                      <div>{data.title}</div>
                      <span>
                        at{" "}
                        <a href="https://langtail.com/" target="_blank">
                          @langtail
                        </a>
                      </span>
                    </CardDescription>
                  </div>
                  <div>
                    <ModeToggle />
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Tabs defaultValue="about-me">
              <TabsList class="grid w-full grid-cols-2">
                <TabsTrigger value="about-me">About me</TabsTrigger>
                <TabsTrigger value="resume">Resume</TabsTrigger>
              </TabsList>

              <TabsContent class="m-0" value="about-me">
                <Card class="mt-4">
                  <CardContent class="p-4">
                    <p class="whitespace-pre-wrap p-2">{data.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent class="m-0" value="resume">
                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Activity
                    name={data.currentWorkplace.name}
                    date={data.currentWorkplace.date}
                    description={data.currentWorkplace.description}
                    imageFallback={data.currentWorkplace.name
                      .slice(0, 2)
                      .toUpperCase()}
                    imageUrl={data.currentWorkplace.imageUrl}
                  />

                  <Activity
                    name={data.lastDegree.name}
                    date={data.lastDegree.date}
                    description={data.lastDegree.description}
                    imageFallback={data.lastDegree.name
                      .slice(0, 2)
                      .toUpperCase()}
                    imageUrl={data.lastDegree.imageUrl}
                  />
                </div>
                <Card class="mt-4">
                  <CardContent class="p-2">
                    <Accordion class="px-3" multiple collapsible>
                      <For each={data.sections}>
                        {(item) => (
                          <>
                            {item.id === "skills" && (
                              <AccordionItem class="border-none" value="skills">
                                <AccordionTrigger>Skills</AccordionTrigger>
                                <AccordionContent class="px-2 flex flex-col gap-2">
                                  <div class="flex flex-col gap-2">
                                    <div class="w-full">Actively using</div>
                                    <div class="flex flex-wrap gap-2 justify-end w-3/4 self-end">
                                      <Badge>JavaScript</Badge>
                                      <Badge>TypeScript</Badge>
                                      <Badge>SolidJS</Badge>
                                      <Badge>React</Badge>
                                      <Badge>Next.js</Badge>
                                      <Badge>TailwindCSS</Badge>
                                      <Badge>MobX</Badge>
                                      <Badge>PWA</Badge>
                                    </div>
                                  </div>
                                  <div class="flex flex-col gap-2">
                                    <div class="w-full">Good grasp</div>

                                    <div class="flex flex-wrap gap-2 justify-end w-3/4 self-end">
                                      <Badge>Electron</Badge>
                                      <Badge>Tauri</Badge>
                                      <Badge>Node.js</Badge>
                                    </div>
                                  </div>
                                  <div class="flex flex-col gap-2">
                                    <div class="w-full">Operating systems</div>
                                    <div class="flex flex-wrap gap-2 justify-end w-3/4 self-end">
                                      <Badge>Mac OS</Badge>
                                      <Badge>Linux</Badge>
                                      <Badge>Windows</Badge>
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            )}
                            {item.id === "languages" && (
                              <AccordionItem
                                class="border-none"
                                value="languages"
                              >
                                <AccordionTrigger>Languages</AccordionTrigger>
                                <AccordionContent>
                                  <ul>
                                    <li>
                                      <strong>English</strong> (Professional
                                      working proficiency)
                                    </li>
                                    <li>
                                      <strong>Czech</strong> (Full professional
                                      proficiency)
                                    </li>
                                    <li>
                                      <strong>Russian</strong> (Native)
                                    </li>
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            )}
                          </>
                        )}
                      </For>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </ColorModeProvider>
    </>
  );
};

export default App;
