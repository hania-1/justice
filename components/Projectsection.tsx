"use client";

import React, { useState } from "react";
import Projectcard from "./Projectcard";
import Projecttag from "./Projecttag";

const projectsData = [
  {
    id: 1,
    title: "Moumita Debnath Rape-Murder Case",
    description:
      "Autopsy revealed multiple injuries and she was subjected to perverted sexuality and genital torture.",
    image: "/pic-8.png", // Correct path
    tags: ["Reports", "Death"],
    previewUrl:
      "https://www.pakistantoday.com.pk/2024/09/19/moumita-debnath-rape-murder-case-no-proof-of-gangrape-in-r-g-kar-case-but-looking-into-all-possibilities-have-got-leads-cbi-to-court/",
  },
  {
    id: 2,
    title: "PGC Campus 10 Raped Case",
    description:
      "A student was raped by a security guard at a Punjab College for Women campus",
    image: "/pic-9.png", // Correct path
    tags: ["Reports", "Death"],
    previewUrl:
      "https://www.reddit.com/r/pakistan/comments/1g2gsoc/punjab_college_campus_10_rpe/?rdt=32834",
  },
  {
    id: 3,
    title: "Murder of Noor Mukadam",
    description:
      "Noor was held hostage for two days, tortured with a knuckleduster, then decapitated with a knife. Noor was raped before being murdered.",
    image: "/pic-10.png", // Correct path
    tags: ["Reports", "Death"],
    previewUrl: "https://en.wikipedia.org/wiki/Murder_of_Noor_Mukadam",
  },
  {
    id: 4,
    title: "Case of a Survivor Brittany Smith",
    description:
      "Brittany Smith, Alabama woman who killed alleged rapist, jailed for fraternizing with man in rehab",
    image: "/pic-11.png", // Correct path
    tags: ["Reports", "Survivor"],
    previewUrl:
      "https://www.al.com/news/huntsville/2023/04/brittany-smith-alabama-woman-who-killed-alleged-rapist-jailed-for-fraternizing-with-man-in-rehab.html",
  },
  {
    id: 5,
    title: "A Powerfull Survivor Dr Sahar Gul",
    description:
      "She is (born 17 on June 1998) an Afghan former teenager who was subjected to torture and abuse by her husband's family",
    image: "/pic-12.png", // Correct path
    tags: ["Reports", "Survivor"],
    previewUrl: "https://en.wikipedia.org/wiki/Sahar_Gul",
  },
  {
    id: 6,
    title: "Murder Of A Kid Zainab Ansari",
    description:
      "She was a seven-year-old Pakistani girl,she had been extensively raped and tortured before being strangled to death. Her rapist and murderer,was a 24-year-old Imran Ali",
    image: "/pic-13.png", // Correct path
    tags: ["Reports", "Death"],
    previewUrl: "https://en.wikipedia.org/wiki/Murder_of_Zainab_Ansari",
  },
  {
    id: 7,
    title: "Acid Victim & Survivor Saba Qaiser",
    description:
      "In 2014, Saba Qaiser was shot in the head by her father and dumped in a river. She survived. Now Sharmeen Obaid Chinoy wants her Oscar-nominated film about Saba to expose the shameful crime Pakistan has ignored for too long",
    image: "/pic-14.png", // Correct path
    tags: ["Reports", "Survivor"],
    previewUrl: "https://www.theguardian.com/film/2016/feb/14/sharmeen-obaid-chinoy-interview-saba-qaiser-honour-killing-documentary-girl-river-oscar-nomination",
  },
];

const Projectsection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        Reported Incidents Of Victims
      </h2>
      <Projecttag
        name="Reports" // Added 'name' prop
        onClick={handleTagChange} // No need to modify this, handleTagChange will receive the 'name' as argument
        isSelected={tag === "Reports"}
      />

      <Projecttag
        name="Death" // Added 'name' prop
        onClick={handleTagChange}
        isSelected={tag === "Death"}
      />

      <Projecttag
        name="Survivor" // Added 'name' prop
        onClick={handleTagChange}
        isSelected={tag === "Survivor"}
      />

      {/* Make the layout horizontal using flex or grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-2">
        {filteredProjects.map((project) => (
          <Projectcard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tags}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Projectsection;
