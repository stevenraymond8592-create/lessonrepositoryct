import React, { useMemo, useState, useEffect } from "react";
import { Search, ExternalLink, BookOpen, X, Fingerprint, Layers, Zap, Puzzle, ArrowLeft } from "lucide-react";

const lessons = [
  {
    title: "Being Squishy to Stand Out",
    gradeBand: "K-3",
    subject: "ELA / Writing / Art",
    topic: "identity, description, self-expression",
    topicGroup: "Writing and self-expression",
    tool: "Unplugged",
    readAloud: "Exclamation Mark by Amy Krouse Rosenthal (2013)",
    lessonUrl: "https://docs.google.com/document/d/12JNkWG8rV5fKQZVATfiRqyor5USwfosE/copy",
    summary: "Students explore identity and descriptive language through a creative, expressive task.",
    description: "In “Being Squishy to Stand Out,” you read Exclamation Mark by Amy Krouse Rosenthal (2013). Students explore their identities, sharing self-designed squishies that represent what makes them unique. This lesson does not use any coding tools–it’s unplugged!",
    ctSkills: "abstraction, decomposition, pattern recognition, algorithms",
    bestUse: "Best for descriptive writing, self-expression, and community-building.",
    overlapFamily: "Writing and expression",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/1.png",
  },
  {
    title: "Blastoff, Space Bee-Bot",
    gradeBand: "K-2",
    subject: "Science",
    topic: "solar system, planets, sequencing",
    topicGroup: "Solar system and planets",
    tool: "Bee-Bot",
    readAloud: "I am the Solar System by Rebecca and James McDonald (2020)",
    lessonUrl: "https://docs.google.com/document/d/15a8c5tAbL6Z2eh7KXOAYoiaIW2ZgdU_i/copy?usp=sharing&ouid=104283122655044613356&rtpof=true&sd=true",
    summary: "A robotics-based science lesson that connects coding with planets and space exploration.",
    description: "In “Blastoff, Space Bee-Bot!,” students will blast off on a space adventure using Bee-Bots, reading I am the Solar System by Rebecca and James McDonald (2020). After imagining what it would be like to explore the planets and stars, students will use basic coding and algorithmic thinking to help their Bee-Bot “Spacebots” travel across the solar system. This hands-on experience introduces students to sequencing, algorithms, and simple problem-solving strategies—all while pretending to explore outer space!",
    ctSkills: "algorithms, debugging",
    bestUse: "Best for hands-on extension during a solar system unit.",
    overlapFamily: "Space and solar system",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/2.png",
  },
  {
    title: "Build-a-Beast: Animal Adaptations",
    gradeBand: "K-3",
    subject: "Science / ELA",
    topic: "animal adaptations, survival traits",
    topicGroup: "Animal adaptations and survival",
    tool: "Unplugged",
    readAloud: "What Would You Do with a Tail Like This? by Robin Page and Steve Jenkins (2008)",
    lessonUrl: "https://docs.google.com/document/d/1DTmQtOzDlJtjqP_H31DE0cjDVpfLcEX3xGRiQiLo84I/copy?usp=sharing",
    summary: "Students design an animal and justify how its traits help it survive.",
    description: "In \"Build-a-Beast: Animal Adaptations\" you will read What Would You Do with a Tail Like This? by Robin Page and Steve Jenkins (2008) to explore animal adaptations. They will apply computational thinking skills—pattern recognition and abstraction—to predict and design how an animal’s physical features might evolve to survive in a new environment. Students will create an animal adaptation to help an animal survive in a unique environment.",
    ctSkills: "abstraction, pattern recognition",
    bestUse: "Best for adaptation units and explanation writing.",
    overlapFamily: "Life science and ecosystems",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/3.png",
  },
  {
    title: "Building Beachside Algorithms",
    gradeBand: "3-6",
    subject: "ELA / Writing",
    topic: "procedural writing, sequencing, algorithms",
    topicGroup: "Sequencing and procedural writing",
    tool: "Unplugged",
    readAloud: "How to Code a Sandcastle by Josh Funk (2018)",
    lessonUrl: "https://docs.google.com/document/d/1IuOm_70kgAK854BwQcEQeH7D39GChXhKwt38B07G-xU/copy",
    summary: "Students build and revise step-by-step directions using algorithmic thinking.",
    description: "In “Building Beachside Algorithms,” you will read How to Code a Sandcastle by Josh Funk (2018). Students explain and identify examples of constraints, write an algorithm for building a sandcastle, and practice debugging algorithms to correct errors and improve steps for clarity and specificity. This is a great lesson to use to introduce computational thinking to your class!",
    ctSkills: "algorithms, debugging, constraints",
    bestUse: "Best for upper elementary sequencing, procedural writing, and debugging.",
    overlapFamily: "Sequencing and algorithms",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/4.png",
  },
  {
    title: "Buzzing Around the Perimeter",
    gradeBand: "4",
    subject: "Math",
    topic: "perimeter, quadrilaterals",
    topicGroup: "Geometry, perimeter, and quadrilaterals",
    tool: "Bee-Bot",
    readAloud: "The Beeman by Laurie Krebs (2002)",
    lessonUrl: "https://docs.google.com/document/d/1s7AbNffWwtbLarwVd3ZlmfmWA6Tg_YMw/copy",
    summary: "Students use Bee-Bot pathways to reason about perimeter and shape attributes.",
    description: "In “Buzzing Around the Perimeter”, students will explore The Beeman by Laurie Krebs (2002), discovering the geometric shapes commonly found in beekeeping. Through hands-on activities, they will measure and calculate the perimeter of square and rectangular bee houses, using tiles to represent quadrilateral structures. Additionally, students will reinforce their understanding by programming Bee-bots to navigate these shapes, connecting mathematical concepts to real-world applications in an engaging way.",
    ctSkills: "algorithms, pattern recognition",
    bestUse: "Best for perimeter review with robotics.",
    overlapFamily: "Geometry and perimeter",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/5.png",
  },
  {
    title: "Cosmo Quest",
    gradeBand: "1",
    subject: "Science",
    topic: "planets, solar system knowledge",
    topicGroup: "Solar system and planets",
    tool: "Unplugged",
    readAloud: "My First Book of Planets! by Bruce Betts (2020)",
    lessonUrl: "https://docs.google.com/document/d/1-9HrgroXED4Pb6tCg0DqABJ6kbITt-e2/copy",
    summary: "An unplugged science lesson that builds core knowledge about planets and space.",
    description: "In “Cosmo Quest,” students will take a journey through space with My First Book of Planets! by Bruce Betts (2020). This colorful and exciting book will introduce students to the planets in our solar system. Through simple language, fun illustrations, and interactive discussions, children will learn the names of the planets, their unique characteristics, and a little about what makes each one special. By the end of the lesson, students will have a basic understanding of the solar system and feel inspired to explore the wonders of space!",
    ctSkills: "algorithms, abstraction, decomposition, pattern recognition",
    bestUse: "Best for introducing a solar system unit before robotics extension.",
    overlapFamily: "Space and solar system",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/6.png",
  },
  {
    title: "Decomposing with Canva",
    gradeBand: "4",
    subject: "Writing",
    topic: "decomposition, breaking tasks into parts, detail writing",
    topicGroup: "Writing and idea development",
    tool: "Canva",
    readAloud: "A House for Hermit Crab by Eric Carle (1987)",
    lessonUrl: "https://docs.google.com/document/d/1cDewL8L1cTNY4NfFOukd108qY-ThbWGWDq37RGt5h5g/copy",
    summary: "Students use Canva to break ideas into smaller parts and communicate details clearly.",
    description: "In “Decomposing with Canva,” A House for Hermit Crab by Eric Carle (1987) is read. Before reading the book, students will imagine what it would be like if they were told they had to clean their room right now. After reading the book, the teacher will relate cleaning their room to noticing details - rather than thinking about the task as a whole, you can focus on one part at a time. This lesson uses decomposition to break a picture in Canva down into individual parts.",
    ctSkills: "decomposition",
    bestUse: "Best for digital composition and breaking down complex ideas.",
    overlapFamily: "Writing and expression",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/7.png",
  },
  {
    title: "El Viaje de la Mariposa (Spanish Bee-Bot)",
    gradeBand: "1-5",
    subject: "ELA",
    topic: "bilingual vocabulary, butterfly journey, sequencing",
    topicGroup: "Vocabulary and sequencing",
    tool: "Bee-Bot",
    readAloud: "Señorita Mariposa by Ben Gundersheimer (2019)",
    lessonUrl: "https://docs.google.com/document/d/11ET7vDbR0pIkLewkgRgGHqgGwZKnrDKS/copy",
    summary: "A bilingual lesson that combines vocabulary, sequencing, and robotics.",
    description: "In “El Viaje de la Mariposa”, students explore the incredible journey of monarch butterflies while learning English and Spanish vocabulary using the text Señorita Mariposa by Ben Gundersheimer (2019). By integrating abstraction, decomposition, and algorithms, students strengthen their ability to recognize symbols, break down problems, and create step-by-step solutions.",
    ctSkills: "abstraction, algorithm, decomposition",
    bestUse: "Best for language development and story journey mapping.",
    overlapFamily: "Sequencing and algorithms",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/8.png",
  },
  {
    title: "Escape the Maze with Sphero",
    gradeBand: "4-5",
    subject: "ELA / Writing",
    topic: "plot elements, summarizing, sequencing events",
    topicGroup: "Retelling, plot, and summarizing",
    tool: "Sphero",
    readAloud: "A teacher-selected version of Theseus and the Minotaur",
    lessonUrl: "https://docs.google.com/document/d/1tHJR7zkZZJUGKFGRbRfx0h3XPZ9dDJaA/copy",
    summary: "Students connect narrative structure and sequence to a Sphero-based maze challenge.",
    description: "In “Escape the Maze with Sphero,” a teacher-selected version of Theseus and the Minotaur is read. Students summarize the plot and are challenged to design algorithms with block-based coding to have a Sphero Mini escape mazes based on key events in the story that relate to plot elements (rising action, conflict, climax, falling action, and resolution). Students make connections between the actions and dispositions of Theseus and themselves as they work to debug their programs and guide their Sphero Minis through the mazes. This is a good lesson for introducing Spheros!",
    ctSkills: "abstraction, pattern recognition, algorithms",
    bestUse: "Best for plot analysis and retelling with movement.",
    overlapFamily: "Retelling and story structure",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/9.png",
  },
  {
    title: "Fractions, Patterns and Art",
    gradeBand: "4-6",
    subject: "Math / Art",
    topic: "fractions, equivalent fractions, patterns",
    topicGroup: "Fractions and patterns",
    tool: "Unplugged",
    readAloud: "Fractions in Disguise by Edward Einhorn (2013)",
    lessonUrl: "https://docs.google.com/document/d/1EG7X6tICnY9As9GPDmshutlTlxpC22yq/copy",
    summary: "A creative math lesson that connects fractions, visual patterns, and artistic design.",
    description: "In “Fractions, Patterns, and Art,” you read Fractions in Disguise by Edward Einhorn (2013). Students design a Fraction Mosaic Magnet by repeating a pattern that uses nonequivalent and equivalent fractions with denominators of 100. Then, students decompose (break down) their design and write an algorithm to create their magnet. This lesson does not use any coding tools–it’s unplugged!",
    ctSkills: "decomposition, pattern recognition, algorithms",
    bestUse: "Best for integrating math and art during a fractions unit.",
    overlapFamily: "Math patterns and representation",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/10.png",
  },
  {
    title: "Get to Know You and Your Bot",
    gradeBand: "K-3",
    subject: "CS / Robotics",
    topic: "robot introduction, sequencing, directions",
    topicGroup: "Robotics foundations",
    tool: "Botley",
    readAloud: "Boy + Bot by Ame Dyckman (2012)",
    lessonUrl: "https://docs.google.com/document/d/16woBlfjHz24DDoGOMmjnyoqLdstnRl1f/copy",
    summary: "A beginner-friendly lesson that introduces students to robot routines and directions.",
    description: "In “Get to Know You and Your Bot,” you read Boy + Bot by Ame Dyckman (2012). Students are introduced to robots and coding–and get to know Botley. They interact with others and build upon peer’s ideas and articulate them in a logical sequence, such as using picture directions to design a series of steps to complete a task.",
    ctSkills: "algorithms, debugging",
    bestUse: "Best as a first robotics lesson.",
    overlapFamily: "Robotics foundations",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/11.png",
  },
  {
    title: "Holiday Balloon Parade",
    gradeBand: "3-5",
    subject: "ELA / CS",
    topic: "creativity, design process, communication",
    topicGroup: "Design and communication",
    tool: "Botley",
    readAloud: "Balloons Over Broadway: The True Story of the Puppeteer of Macy’s Parade by Melissa Sweet (2011)",
    lessonUrl: "https://docs.google.com/document/d/1cn0V4xgJBWnfkHhG2PZdfPeqDiNsqllp/copy",
    summary: "Students combine creative design, communication, and coding in a themed challenge.",
    description: "In “Balloon Parade,” you read Balloons Over Broadway: The True Story of the Puppeteer of Macy’s Parade by Melissa Sweet (2011). Students explore creativity, culture, problem-solving, and communication skills to design a balloon float for a Balloon Parade.",
    ctSkills: "abstraction, decomposition, algorithms",
    bestUse: "Best for seasonal design thinking and presentation.",
    overlapFamily: "Writing and expression",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/12.png",
  },
  {
    title: "Loops and Choices",
    gradeBand: "PK-2",
    subject: "ELA / Writing",
    topic: "sequencing, story structure, repeated actions",
    topicGroup: "Sequencing and procedural writing",
    tool: "Unplugged",
    readAloud: "Stop Bot! by James Yang (2019)",
    lessonUrl: "https://docs.google.com/document/d/1-ohVbJWyEZiYOsQ0Se82iDXQTuTS1IDy/copy",
    summary: "An early literacy lesson focused on sequence, repetition, and making choices in a story.",
    description: "In “Loops and Choices: A Bot’s Journey,” Stop! Bot! by James Yang (2019) is read. Students recognize patterns, decompose story elements, and sequence texts. Identify opportunities for programming a loop. Verbally explain other situations that may benefit from an abstraction.",
    ctSkills: "abstraction, algorithms, decomposition",
    bestUse: "Best for younger students learning sequence and repeated actions.",
    overlapFamily: "Sequencing and algorithms",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/13.png",
  },
  {
    title: "Mapping Us with Ifs and Thens",
    gradeBand: "K-2",
    subject: "Social Studies",
    topic: "maps, geography, routes, symbols",
    topicGroup: "Maps and geography",
    tool: "Unplugged",
    readAloud: "The Boy Who Loved Maps by Kari Allen (2022)",
    lessonUrl: "https://docs.google.com/document/d/1ujms1WpUBkEa-qd-f4QFMd6Mj3BHO7Ljm89LqSrkF1M/copy?tab=t.0",
    summary: "Students use directional and conditional thinking to explore maps and routes.",
    description: "In “Mapping Us with Ifs and Thens,” students read The Boy Who Loved Maps by Kari Allen (2022). Students explore the geography of South Carolina and use conditional logic to create state maps that reflect their interests and travel plans. After a discussion about how maps tell stories, students select a meaningful place in South Carolina, chart a route to that destination, and design a custom map legend using symbols that represent geographic features and write “if/then” conditional statements based on their map features.",
    ctSkills: "abstraction, algorithms, pattern recognition",
    bestUse: "Best for geography, symbols, and navigation.",
    overlapFamily: "Maps and place",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/14.png",
  },
  {
    title: "Ozobot Lifecycle Modeling",
    gradeBand: "3-5",
    subject: "Science",
    topic: "life cycles, modeling stages, sequences",
    topicGroup: "Life cycles",
    tool: "Ozobot",
    readAloud: "Honeybee: The Busy Life of Apis Mellifera by Candace Fleming (2020)",
    lessonUrl: "https://drive.google.com/file/d/1r5bbShXRQXaoaAdCa6zQ8Rb2VO9tV1vR/view?usp=sharing",
    summary: "Students model scientific life cycle stages through sequencing and coding.",
    description: "In “Ozobees,” students will explore the universal stages of life cycles (birth/sprouting, growth, reproduction, and death) across diverse organisms while learning how scientific models can represent these patterns through a reading of Honeybee: The Busy Life of Apis Mellifera by Candace Fleming (2020). Students then apply this understanding by creating interactive life cycle models using Ozobot robots, programming sequences and loops to simulate stages of growth for organisms like rabbits, butterflies, and frogs. This lesson is great for classes with experience using Ozobots.",
    ctSkills: "abstraction, algorithms, pattern recognition",
    bestUse: "Best for life cycle units with visual modeling.",
    overlapFamily: "Life science and ecosystems",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/15.png",
  },
  {
    title: "Predators, Prey, and Programming",
    gradeBand: "2",
    subject: "Science",
    topic: "ecosystems, predator-prey relationships",
    topicGroup: "Ecosystems and relationships",
    tool: "Sphero",
    readAloud: "I’m the Biggest Thing in the Ocean by Kevin Sherry (2007)",
    lessonUrl: "https://docs.google.com/document/d/1I5s2fiEsnW3Zisa43-wx6XeqOcKcNBru-WnnOZpjySA/copy",
    summary: "A coding-connected lesson that helps students model predator-prey relationships.",
    description: "In \"Predators, Prey, and Programming,\" students will understand that animals in an ecosystem rely on one another for survival while reading I’m the Biggest Thing in the Ocean by Kevin Sherry (2007). Students will recognize patterns in predator-prey relationships and apply the coding concept of loops using Sphero Indi robots to model animal cycles.",
    ctSkills: "decomposition, debugging, pattern recognition",
    bestUse: "Best for ecosystem interactions in grade 2.",
    overlapFamily: "Life science and ecosystems",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/16.png",
  },
  {
    title: "Quadrabot City",
    gradeBand: "3-5",
    subject: "Math",
    topic: "quadrilaterals, perimeter, shape recognition",
    topicGroup: "Geometry, perimeter, and quadrilaterals",
    tool: "Botley",
    readAloud: "City Shapes by Diana Murray (2016)",
    lessonUrl: "https://docs.google.com/document/d/1gngtpzgN6LyypAYxDiV4ycXgNwiig7O1SEcHt0oZKsw/copy?usp=sharing",
    summary: "Students explore geometry and perimeter through movement and city design.",
    description: "In “Quadrabot City,” you will read City Shapes by Diana Murray (2016). Students will learn to recognize various shapes around their city. Then students will practice using Botley 2.0 to identify the perimeter of city quadrilaterals.",
    ctSkills: "algorithms, debugging, decomposition",
    bestUse: "Best for shape recognition and quadrilateral vocabulary.",
    overlapFamily: "Geometry and perimeter",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/17.png",
  },
  {
    title: "Robots Don’t Eat S-OU-P",
    gradeBand: "2",
    subject: "ELA / Phonics",
    topic: "vowel team ou, blending, segmenting",
    topicGroup: "Phonics and word study",
    tool: "Bee-Bot",
    readAloud: "Robots Don’t Eat S-OU-P by Blanton and Anacaya",
    lessonUrl: "https://docs.google.com/document/d/1TIKPW-OxdJnnFkU54d3JBtcRkqEKSxoY5w2hi8-uqFA/copy",
    summary: "A phonics lesson that reinforces the ou vowel team through robotics movement.",
    description: "In \"Robots Don't Eat S-OU-P\", students will practice blending and segmenting words containing “ou” to reinforce their phonics skills after receiving direct instruction on the vowel team “ou” and its spelling patterns for the /ow/ and /oo/ sounds. Students will engage in an interactive read-aloud of the partially decodable text Robots Don’t Eat S-OU-P!, which highlights the \"ou\" pattern within a playful, robot-themed narrative. Building on the story, students will design and test algorithms for a Bee-Bot to travel through key events in the text using word cards and sequence mapping. This lesson blends foundational literacy instruction with early computational thinking and sequencing skills in a hands-on, engaging way.",
    ctSkills: "algorithms, sequencing",
    bestUse: "Best for targeted word work and phonics intervention.",
    overlapFamily: "Phonics and word study",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/18.png",
  },
  {
    title: "Robots Get the Hiccups Too",
    gradeBand: "1-2",
    subject: "ELA",
    topic: "retelling, story response, robot design",
    topicGroup: "Retelling, plot, and summarizing",
    tool: "Ozobot",
    readAloud: "Clink by Kelly DiPucchio (2011)",
    lessonUrl: "https://docs.google.com/document/d/1vI0QuExHGcW9uHQsUqV9tPBXwPv5EpJ5BzZuodw_7W8/copy",
    summary: "Students retell a story and connect key events to a robot-based task.",
    description: "In “Robots Get the Hiccups Too!” you read Clink by Kelly DiPucchio (2011). Clink is an outdated robot who can't seem to do anything right until he finds the right friend and learns that he can be himself. In this lesson, students design their own robot and help Ozobots re-tell the story of the book.",
    ctSkills: "abstraction, decomposition",
    bestUse: "Best for retelling and response after a read-aloud.",
    overlapFamily: "Retelling and story structure",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/19.png",
  },
  {
    title: "Seaside Sequence Adventure",
    gradeBand: "K-2",
    subject: "ELA / Writing",
    topic: "sequencing, procedural writing, debugging steps",
    topicGroup: "Sequencing and procedural writing",
    tool: "Unplugged",
    readAloud: "How to Code a Sandcastle by Josh Funk (2018)",
    lessonUrl: "https://docs.google.com/document/d/14-eVhLQWteoWKSfb9iOA9eLa5ksHln5C/copy",
    summary: "Students practice ordering steps and revising directions in a playful sequence lesson.",
    description: "In “Seaside Sequence Adventure,” you read How to Code a Sandcastle by Josh Funk (2018). Students explain and identify examples of constraints, write an algorithm for building a sandcastle, and practice debugging algorithms to correct errors and improve steps for clarity and specificity. This is a great lesson to use to introduce computational thinking to your class!",
    ctSkills: "algorithms, debugging, constraints",
    bestUse: "Best for early procedural writing and debugging language.",
    overlapFamily: "Sequencing and algorithms",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/20.png",
  },
  {
    title: "Seeds on the Move",
    gradeBand: "2",
    subject: "Science / ELA",
    topic: "seed dispersal, plant survival patterns",
    topicGroup: "Plants and seed dispersal",
    tool: "Sphero",
    readAloud: "Seeds Move! by Robin Page (2019)",
    lessonUrl: "https://docs.google.com/document/d/14NWEh61K8X9At_5H_5iXfkF3t7p6iHlewpCEyQKL2w8/copy?tab=t.0",
    summary: "Students explore how seeds move and survive through an interactive coding experience.",
    description: "In “Seeds on the Move: Modeling Dispersal Patterns with Sphero Indi,” Seeds Move! (2019) by Robin Page is read. Sphero Indi is used to simulate seed dispersal by animals and natural forces. They'll learn how plants rely on other organisms to move seeds, and they'll program sequences and loops to model these repeated interactions.",
    ctSkills: "algorithms, decomposition, pattern recognition",
    bestUse: "Best for plant science and movement-based modeling.",
    overlapFamily: "Life science and ecosystems",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/21.png",
  },
  {
    title: "Sphero Shapes",
    gradeBand: "3-4",
    subject: "Math / ELA",
    topic: "quadrilaterals, perimeter, area, prediction",
    topicGroup: "Geometry, perimeter, and quadrilaterals",
    tool: "Sphero",
    readAloud: "Shh! We Have a Plan by Chris Haughton (2014)",
    lessonUrl: "https://docs.google.com/document/d/1nwCi601pgzFhV2kvPNr_IIRCr1DS27kx/copy",
    summary: "A geometry lesson that combines shape vocabulary, perimeter, and area with robotics.",
    description: "In “Sphero Shapes,” Shh! We Have a Plan by Chris Haughton (2014) is read. After reading part of the book, students theorize why the plans in the story are not working and predict what will happen next. Then students code Sphero to make a quadrilateral shape and use the appropriate tools to create and measure a quadrilateral’s length and width and calculate the perimeter and area. This lesson utilizes conditional statements! And students get to check their predictions when the rest of the book is read.",
    ctSkills: "algorithms, conditional statements",
    bestUse: "Best for comparing shapes and extending into area.",
    overlapFamily: "Geometry and perimeter",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/22.png",
  },
  {
    title: "The Cleanup Code",
    gradeBand: "5",
    subject: "Science / ELA",
    topic: "environment, human impact, cause and effect",
    topicGroup: "Environment and human impact",
    tool: "Botley",
    readAloud: "The Mess That We Made by Michelle Lord (2020)",
    lessonUrl: "https://docs.google.com/document/d/10I3EB5kNgpWutGWNQ7ZJDQ0LdiMmQi8r/copy",
    summary: "Students investigate environmental problems and model solutions through coding.",
    description: "In “The Cleanup Code,” students will examine both positive and negative interactions with the environment with a reading of The Mess That We Made by Michelle Lord (2020). Following the reading, students will engage in a hands-on activity that reinforces cause-and-effect relationships using a deck of premade cards and Botley coding robots.",
    ctSkills: "pattern recognition",
    bestUse: "Best for environmental action and cause-effect discussion.",
    overlapFamily: "Life science and ecosystems",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/23.png",
  },
  {
    title: "Very Hungry Coding",
    gradeBand: "K",
    subject: "ELA / Math",
    topic: "sequencing, story order, early coding",
    topicGroup: "Sequencing and procedural writing",
    tool: "Bee-Bot",
    readAloud: "The Very Hungry Caterpillar by Eric Carle (1969)",
    lessonUrl: "https://docs.google.com/document/d/1AvduNwC6Sdb42iFkAXQi7qq2dKp_YkJu/copy",
    summary: "A foundational lesson that uses a familiar story to teach order and early coding routines.",
    description: "In “Very Hungry Coding,” the beloved story The Very Hungry Caterpillar by Eric Carle (1969) is combined with an introduction to coding using Bee-Bots. Students listen to the story, discuss the caterpillar's journey and the foods it eats, and then transition to a hands-on activity where they program Bee-Bots to follow the caterpillar's path. The lesson emphasizes the concept of sequencing and introduces basic algorithmic thinking through role-playing activities.",
    ctSkills: "algorithm",
    bestUse: "Best for kindergarten sequencing and first robot pathways.",
    overlapFamily: "Sequencing and algorithms",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/24.png",
  },
  {
    title: "We Can Sort it Out",
    gradeBand: "K",
    subject: "Math / Science",
    topic: "sorting, classification, categorization",
    topicGroup: "Sorting and classifying",
    tool: "Unplugged",
    readAloud: "The Animals Would Not Sleep by Sara Levine (2020)",
    lessonUrl: "https://docs.google.com/document/d/1q65Tw971mI2WgA1YtkNck5FXkrOq0Top_y3DzPzhiwQ/copy",
    summary: "Students sort objects by attributes and explain their thinking.",
    description: "In “We Can Sort It Out,” you will read the book The Animals Would Not Sleep by Sara Levine (2020). In the story, it is time for Marco to get ready for bed, but first, he must apply scientific thinking to sort his animals into groups so they can all rest for the night. Students will learn the importance of categorization in science while developing their own sorting skills in a fun and interactive way.",
    ctSkills: "abstraction, decomposition, pattern recognition, algorithms",
    bestUse: "Best for early math and science classification work.",
    overlapFamily: "Sorting and classifying",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/25.png",
  },
  {
    title: "Where is your Home?",
    gradeBand: "4",
    subject: "Social Studies / ELA / Writing",
    topic: "homes, culture, classification, historical homes",
    topicGroup: "Homes, culture, and communities",
    tool: "3Doodler",
    readAloud: "Home by Carson Ellis (2015)",
    lessonUrl: "https://docs.google.com/document/d/186OPQ6A6NmRCeGoJw4WA1O4cmzreNidUgsqBLv0XyI0/copy",
    summary: "Students examine homes and communities through culture, history, and design.",
    description: "In “Where is your home?,” you read Home by Carson Ellis (2015). This lesson explores the concept of \"home.\" Students reflect on the meaning of home and discuss the diverse representations of homes and create a classification system based on adjectives. The lesson includes researching historical U.S. homes from 1600-1850 and building a 3D model of a chosen home.",
    ctSkills: "abstraction, classification",
    bestUse: "Best for social studies and community units.",
    overlapFamily: "Homes, culture, and communities",
    coverImage: "https://raw.githubusercontent.com/stevenraymond8592-create/lessonrepositoryct/main/unboxing-ct-lesson-finder%2520(2)/bookcover/26.png",
  }
];

const gradeOptions = ["All Grades", "PK-2", "K", "K-2", "K-3", "1", "1-2", "1-5", "2", "3-4", "3-5", "3-6", "4", "4-5", "4-6", "5", "6"];
const subjectOptions = ["All Subjects", "ELA", "Math", "Science", "Social Studies", "Writing", "CS / Robotics", "Art"];
const toolOptions = ["All Tools", "Unplugged", "Bee-Bot", "Botley", "Ozobot", "Sphero", "Canva", "3Doodler"];
const topicOptions = [
  "All Topics",
  "Sequencing and procedural writing",
  "Retelling, plot, and summarizing",
  "Phonics and word study",
  "Writing and self-expression",
  "Writing and idea development",
  "Vocabulary and sequencing",
  "Sorting and classifying",
  "Geometry, perimeter, and quadrilaterals",
  "Fractions and patterns",
  "Solar system and planets",
  "Animal adaptations and survival",
  "Life cycles",
  "Ecosystems and relationships",
  "Plants and seed dispersal",
  "Environment and human impact",
  "Maps and geography",
  "Homes, culture, and communities",
  "Robotics foundations",
  "Design and communication",
];

const exactGrades = ["PK", "K", "1", "2", "3", "4", "5", "6"];
const wizardSubjects = ["ELA / Literacy", "Math", "Science", "Social Studies", "Writing / Creativity", "CS / Robotics", "Integrated"];
const wizardTools = ["Any", "Unplugged", "Bee-Bot", "Botley", "Ozobot", "Sphero", "Canva", "3Doodler"];

const subjectToTopics: Record<string, string[]> = {
  "ELA / Literacy": ["Sequencing and procedural writing", "Retelling, plot, and summarizing", "Phonics and word study", "Vocabulary and sequencing"],
  "Math": ["Sorting and classifying", "Geometry, perimeter, and quadrilaterals", "Fractions and patterns"],
  "Science": ["Solar system and planets", "Animal adaptations and survival", "Life cycles", "Ecosystems and relationships", "Plants and seed dispersal", "Environment and human impact", "Sorting and classifying"],
  "Social Studies": ["Maps and geography", "Homes, culture, and communities"],
  "Writing / Creativity": ["Writing and self-expression", "Writing and idea development", "Design and communication", "Sequencing and procedural writing"],
  "CS / Robotics": ["Robotics foundations", "Sequencing and procedural writing", "Geometry, perimeter, and quadrilaterals", "Life cycles", "Ecosystems and relationships", "Plants and seed dispersal", "Environment and human impact", "Retelling, plot, and summarizing"],
  "Integrated": topicOptions.filter(t => t !== "All Topics")
};

function includesWizardGrade(selectedGrade: string, lessonBand: string) {
  if (!selectedGrade || selectedGrade === "All Grades") return true;
  const map: Record<string, string[]> = {
    "PK": ["PK-2"],
    "K": ["K", "PK-2", "K-2", "K-3"],
    "1": ["1", "1-2", "K-2", "K-3", "1-5"],
    "2": ["2", "1-2", "K-2", "K-3", "1-5", "PK-2"],
    "3": ["3", "3-4", "3-5", "3-6", "1-5", "K-3"],
    "4": ["4", "4-5", "4-6", "3-4", "3-5", "3-6", "1-5"],
    "5": ["5", "4-5", "4-6", "3-5", "3-6", "1-5"],
    "6": ["6", "4-6", "3-6"]
  };
  return map[selectedGrade]?.includes(lessonBand) || false;
}

function includesWizardSubject(selectedSubject: string, lessonSubject: string) {
  if (!selectedSubject || selectedSubject === "All Subjects") return true;
  const ls = lessonSubject.toLowerCase();
  if (selectedSubject === "ELA / Literacy") return ls.includes("ela") || ls.includes("literacy");
  if (selectedSubject === "Math") return ls.includes("math");
  if (selectedSubject === "Science") return ls.includes("science");
  if (selectedSubject === "Social Studies") return ls.includes("social studies");
  if (selectedSubject === "Writing / Creativity") return ls.includes("writing") || ls.includes("art");
  if (selectedSubject === "CS / Robotics") return ls.includes("cs") || ls.includes("robotics") || ls.includes("computer science");
  if (selectedSubject === "Integrated") return true;
  return false;
}

function matchesGrade(selected: string, lessonBand: string) {
  if (selected === "All Grades") return true;
  return lessonBand === selected;
}

function matchesSubject(selected: string, subject: string) {
  if (selected === "All Subjects") return true;
  return subject.toLowerCase().includes(selected.toLowerCase());
}

function matchesTool(selected: string, tool: string) {
  if (selected === "All Tools") return true;
  return tool.toLowerCase().includes(selected.toLowerCase());
}

function getBookGradient(topicGroup: string) {
  if (topicGroup.includes("Solar")) return "bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400";
  if (topicGroup.includes("Geometry") || topicGroup.includes("Fractions")) return "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500";
  if (topicGroup.includes("Writing") || topicGroup.includes("Retelling") || topicGroup.includes("Vocabulary") || topicGroup.includes("Phonics")) return "bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-400";
  if (topicGroup.includes("Maps") || topicGroup.includes("Homes")) return "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500";
  if (topicGroup.includes("Life") || topicGroup.includes("Animal") || topicGroup.includes("Plants") || topicGroup.includes("Environment") || topicGroup.includes("Ecosystems")) return "bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500";
  if (topicGroup.includes("Robotics")) return "bg-gradient-to-br from-slate-600 via-slate-500 to-sky-500";
  return "bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500";
}

function coverTitle(text: string) {
  if (!text) return "Read-Aloud";
  return text.replace(/\s*\([^)]*\)\s*$/, "");
}

const FALLBACK_COVER = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop";

const BookCover = ({ coverImage, altText, className, style }: { coverImage?: string, altText: string, className?: string, style?: React.CSSProperties }) => {
  const [error, setError] = useState(false);

  // Reset error state when coverImage changes
  useEffect(() => {
    setError(false);
  }, [coverImage]);

  // If the user hasn't replaced "Link_here" yet, use the fallback placeholder
  const isPlaceholder = !coverImage || coverImage === "Link_here";
  const finalUrl = error || isPlaceholder ? FALLBACK_COVER : coverImage;

  return (
    <img 
      src={finalUrl} 
      alt={`Cover for ${altText}`} 
      className={`object-cover ${className}`}
      style={style}
      referrerPolicy="no-referrer"
      onError={() => {
        if (!isPlaceholder && !error) {
          console.error(`Failed to load image: ${coverImage}`);
          setError(true);
        }
      }}
    />
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"wizard" | "browse" | "families" | "skills">("wizard");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Wizard state
  const [step, setStep] = useState(1);
  const [wGrade, setWGrade] = useState("");
  const [wSubject, setWSubject] = useState("");
  const [wTopic, setWTopic] = useState("");
  const [wTool, setWTool] = useState("");

  // Quick browse state
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState("All Grades");
  const [subject, setSubject] = useState("All Subjects");
  const [topic, setTopic] = useState("All Topics");
  const [tool, setTool] = useState("All Tools");

  const filteredBrowseLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const q = search.trim().toLowerCase();
      const searchable = [
        lesson.title,
        lesson.subject,
        lesson.topic,
        lesson.topicGroup,
        lesson.tool,
        lesson.summary,
        lesson.description,
        lesson.ctSkills,
        lesson.bestUse,
        lesson.overlapFamily,
        lesson.readAloud,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!q || searchable.includes(q)) &&
        matchesGrade(grade, lesson.gradeBand) &&
        matchesSubject(subject, lesson.subject) &&
        (topic === "All Topics" || lesson.topicGroup === topic) &&
        matchesTool(tool, lesson.tool)
      );
    });
  }, [search, grade, subject, topic, tool]);

  const filteredWizardLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      return (
        includesWizardGrade(wGrade, lesson.gradeBand) &&
        includesWizardSubject(wSubject, lesson.subject) &&
        (!wTopic || lesson.topicGroup === wTopic) &&
        (!wTool || wTool === "Any" || lesson.tool === wTool)
      );
    });
  }, [wGrade, wSubject, wTopic, wTool]);

  const closestWizardLessons = useMemo(() => {
    if (filteredWizardLessons.length > 0) return [];

    const scoredLessons = lessons.map((lesson) => {
      let score = 0;
      const gradeMatch = includesWizardGrade(wGrade, lesson.gradeBand);
      const subjectMatch = includesWizardSubject(wSubject, lesson.subject);
      const topicMatch = !wTopic || lesson.topicGroup === wTopic;
      const toolMatch = !wTool || wTool === "Any" || lesson.tool === wTool;

      if (subjectMatch) score += 40;
      if (topicMatch) score += 30;
      if (gradeMatch) score += 20;
      if (toolMatch) score += 10;

      return { lesson, score };
    });

    const sorted = scoredLessons
      .filter((l) => l.score > 0)
      .sort((a, b) => b.score - a.score);

    return sorted.slice(0, 3).map((l) => l.lesson);
  }, [wGrade, wSubject, wTopic, wTool, filteredWizardLessons.length]);

  const overlapGroups = useMemo(() => {
    const groups: Record<string, typeof lessons> = {};
    lessons.forEach((lesson) => {
      if (!groups[lesson.overlapFamily]) groups[lesson.overlapFamily] = [];
      groups[lesson.overlapFamily].push(lesson);
    });
    return Object.entries(groups)
      .sort((a, b) => b[1].length - a[1].length);
  }, []);

  const ctSkillGroups = useMemo(() => {
    const skills = [
      { 
        id: "pattern", 
        name: "Pattern Recognition", 
        keywords: ["pattern recognition", "classification"],
        description: "Identifying trends and similarities within problems.",
        icon: <Fingerprint className="w-8 h-8 text-indigo-600" />
      },
      { 
        id: "abstraction", 
        name: "Abstraction", 
        keywords: ["abstraction"],
        description: "Focusing on the important information only.",
        icon: <Layers className="w-8 h-8 text-indigo-600" />
      },
      { 
        id: "algorithms", 
        name: "Algorithmic Thinking", 
        keywords: ["algorithm", "sequencing", "conditional statements"],
        description: "Creating step-by-step solutions to a problem.",
        icon: <Zap className="w-8 h-8 text-indigo-600" />
      },
      { 
        id: "decomposition", 
        name: "Decomposition", 
        keywords: ["decomposition"],
        description: "Breaking down complex problems into smaller parts.",
        icon: <Puzzle className="w-8 h-8 text-indigo-600" />
      }
    ];

    return skills.map(skill => {
      const items = lessons.filter(lesson => {
        const ct = (lesson.ctSkills || "").toLowerCase();
        return skill.keywords.some(keyword => ct.includes(keyword));
      });
      return { ...skill, items };
    });
  }, []);

  const resetBrowseFilters = () => {
    setSearch("");
    setGrade("All Grades");
    setSubject("All Subjects");
    setTopic("All Topics");
    setTool("All Tools");
  };

  const resetWizard = () => {
    setStep(1);
    setWGrade("");
    setWSubject("");
    setWTopic("");
    setWTool("");
  };

  const renderLessonCard = (lesson: typeof lessons[0]) => (
    <a key={lesson.title} href={lesson.lessonUrl} target="_blank" rel="noreferrer" className="block group">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row">
        {/* Book Cover Area */}
        <div className={`relative md:w-64 shrink-0 p-6 text-white flex flex-col justify-between overflow-hidden ${getBookGradient(lesson.topicGroup)}`}>
          <BookCover coverImage={lesson.coverImage} altText={lesson.readAloud} className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" />
          <div className="relative z-10 bg-black/20 border border-white/20 rounded-2xl p-5 h-full flex flex-col justify-between backdrop-blur-sm">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-white/80 mb-3">
                Read-Aloud Anchor
              </div>
              <h3 className="text-2xl font-extrabold leading-tight drop-shadow-md">
                {coverTitle(lesson.readAloud)}
              </h3>
              <div className="mt-4">
                <BookCover 
                  coverImage={lesson.coverImage} 
                  altText={lesson.readAloud} 
                  className="rounded shadow-sm border border-white/20" 
                  style={{ width: '80px', height: '110px' }} 
                />
              </div>
            </div>
            <div className="mt-6 text-sm font-medium text-white/90 drop-shadow-sm">
              <div>{lesson.gradeBand}</div>
              <div className="mt-1 opacity-80">{lesson.tool}</div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold">{lesson.gradeBand}</span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">{lesson.subject}</span>
            <span className="border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{lesson.tool}</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{lesson.title}</h2>
          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Inspired by {lesson.readAloud}
          </p>
          
          <p className="text-slate-700 mt-4 leading-relaxed">
            {lesson.description || lesson.summary}
          </p>

          {lesson.ctSkills && (
            <div className="mt-4 bg-indigo-50/50 border border-indigo-100 rounded-xl p-3">
              <div className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-1">CT Skills Integrated</div>
              <div className="text-sm text-indigo-900">{lesson.ctSkills}</div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 mb-6">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Topic focus</div>
              <div className="text-sm font-medium text-slate-800">{lesson.topicGroup}</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Best use</div>
              <div className="text-sm font-medium text-slate-800">{lesson.bestUse}</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Lesson family</div>
              <div className="text-sm font-medium text-slate-800">{lesson.overlapFamily}</div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm text-slate-500">
              Click to open lesson document
            </div>
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-xl text-sm font-bold transition-colors">
              Open Lesson <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Hero */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 flex-wrap mb-6">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-bold">Unboxing CT Lesson Finder</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-tight">
            Find the right lesson for what you're already teaching.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Explore CT-integrated lessons by grade, subject, topic, and tool. Open the lesson plan that best matches your classroom needs.
          </p>
          
          <div className="mt-8 flex gap-4 flex-wrap">
            <button 
              onClick={() => { setActiveTab("wizard"); resetWizard(); }}
              className={`px-6 py-3 rounded-xl font-bold transition-colors ${activeTab === "wizard" ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              Start with Grade (Wizard)
            </button>
            <button 
              onClick={() => setActiveTab("browse")}
              className={`px-6 py-3 rounded-xl font-bold transition-colors ${activeTab === "browse" ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              Browse All Lessons
            </button>
            <button 
              onClick={() => setActiveTab("families")}
              className={`px-6 py-3 rounded-xl font-bold transition-colors ${activeTab === "families" ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              Explore Lesson Families
            </button>
            <button 
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-3 rounded-xl font-bold transition-colors ${activeTab === "skills" ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              Group by CT Skills
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          
          {activeTab === "wizard" && (
            <div className="space-y-6">
              {/* Wizard Progress */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Guided Search</h2>
                  <button onClick={resetWizard} className="text-sm text-slate-500 hover:text-slate-900 font-medium">Start Over</button>
                </div>
                
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map(s => (
                    <div key={s} className={`h-2 flex-1 rounded-full ${step >= s ? "bg-indigo-600" : "bg-slate-100"}`} />
                  ))}
                </div>

                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">What grade do you teach?</h3>
                    <p className="text-slate-500 mb-6">Select your exact grade. We'll find lessons that include it.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {exactGrades.map(g => (
                        <button 
                          key={g}
                          onClick={() => { setWGrade(g); setStep(2); }}
                          className="py-4 px-6 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 rounded-2xl font-bold text-lg transition-all text-slate-700"
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">What subject are you planning for?</h3>
                    <p className="text-slate-500 mb-6">Grade {wGrade} selected.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {wizardSubjects.map(s => (
                        <button 
                          key={s}
                          onClick={() => { setWSubject(s); setStep(3); }}
                          className="py-4 px-6 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 rounded-2xl font-bold text-left transition-all text-slate-700"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep(1)} className="mt-6 text-sm text-slate-500 hover:text-slate-900 font-medium">← Back to Grade</button>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">What topic or skill are you teaching right now?</h3>
                    <p className="text-slate-500 mb-6">{wSubject} in Grade {wGrade}.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {subjectToTopics[wSubject]?.map(t => (
                        <button 
                          key={t}
                          onClick={() => { setWTopic(t); setStep(4); }}
                          className="py-4 px-6 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 rounded-2xl font-bold text-left transition-all text-slate-700"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep(2)} className="mt-6 text-sm text-slate-500 hover:text-slate-900 font-medium">← Back to Subject</button>
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">What tool or format do you want to use?</h3>
                    <p className="text-slate-500 mb-6">Topic: {wTopic}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {wizardTools.map(t => (
                        <button 
                          key={t}
                          onClick={() => { setWTool(t); setStep(5); }}
                          className="py-4 px-6 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 rounded-2xl font-bold transition-all text-slate-700"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep(3)} className="mt-6 text-sm text-slate-500 hover:text-slate-900 font-medium">← Back to Topic</button>
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Your Results</h3>
                        <p className="text-slate-500 mt-1">
                          Grade {wGrade} • {wSubject} • {wTopic} {wTool !== "Any" ? `• ${wTool}` : ""}
                        </p>
                      </div>
                      <button onClick={() => setStep(4)} className="text-sm text-slate-500 hover:text-slate-900 font-medium">← Edit choices</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Wizard Results */}
              {step === 5 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {filteredWizardLessons.length > 0 ? (
                    filteredWizardLessons.map(renderLessonCard)
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                            <Search className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Explore Related Lessons</h3>
                            <p className="text-slate-600 text-sm mb-3">
                              We couldn't find an exact match for this specific combination, but here are the closest available lessons.
                            </p>
                            <button onClick={() => setStep(4)} className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                              ← Adjust Choices
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {closestWizardLessons.length > 0 ? (
                        closestWizardLessons.map(renderLessonCard)
                      ) : (
                        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 shadow-sm">
                          <p className="text-slate-500">No related lessons found. Try adjusting your search criteria.</p>
                          <button onClick={() => setStep(4)} className="mt-4 px-6 py-2 bg-indigo-50 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 transition-colors">
                            Adjust Choices
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === "browse" && (
            <div className="space-y-6">
              {/* Quick Browse Filters */}
              <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Quick Browse</h2>
                <p className="text-slate-500 text-sm mb-6">Filter the entire repository directly.</p>
                
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="text"
                    placeholder="Search by lesson title, topic, subject, tool, or read-aloud..."
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <select className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={grade} onChange={(e) => setGrade(e.target.value)}>
                    {gradeOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                  <select className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={subject} onChange={(e) => setSubject(e.target.value)}>
                    {subjectOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                  <select className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={topic} onChange={(e) => setTopic(e.target.value)}>
                    {topicOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                  <select className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={tool} onChange={(e) => setTool(e.target.value)}>
                    {toolOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                  <div className="text-sm font-medium text-slate-500">
                    Showing <span className="text-slate-900 font-bold">{filteredBrowseLessons.length}</span> lesson{filteredBrowseLessons.length !== 1 ? 's' : ''}
                  </div>
                  <button onClick={resetBrowseFilters} className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                    <X className="w-4 h-4" /> Clear filters
                  </button>
                </div>
              </section>

              {/* Browse Lesson Cards */}
              <div className="space-y-6">
                {filteredBrowseLessons.map(renderLessonCard)}
                {filteredBrowseLessons.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 border-dashed">
                    <p className="text-slate-500">No lessons found matching your criteria.</p>
                    <button onClick={resetBrowseFilters} className="mt-4 text-indigo-600 font-semibold hover:underline">Reset filters</button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "families" && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Lesson Families</h2>
                <p className="text-slate-500 mb-8">These clusters help make overlap feel intentional. Explore lessons grouped by their core themes and concepts.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {overlapGroups.map(([group, items]) => (
                    <div key={group} className="border border-slate-200 rounded-3xl p-6 bg-slate-50 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                        {group}
                        <span className="bg-indigo-100 text-indigo-700 text-sm py-1 px-3 rounded-full font-bold">{items.length} lessons</span>
                      </h3>
                      <div className="space-y-3 flex-1">
                        {items.map(item => (
                          <a key={item.title} href={item.lessonUrl} target="_blank" rel="noreferrer" className="block bg-white hover:bg-indigo-50 hover:border-indigo-200 border border-slate-200 transition-colors rounded-2xl p-4 shadow-sm">
                            <div className="font-bold text-slate-800 text-base mb-1">{item.title}</div>
                            <div className="text-xs font-medium text-slate-500">
                              {item.gradeBand} • {item.subject} • {item.tool}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                {!selectedSkill ? (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Computational Thinking Skills</h2>
                    <p className="text-slate-500 mb-8">Lessons often integrate multiple CT skills. Select a core concept to explore how each lesson applies it to solve problems and build understanding.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {ctSkillGroups.map((group) => (
                        <button
                          key={group.id}
                          onClick={() => setSelectedSkill(group.id)}
                          className="group border border-slate-200 rounded-3xl p-8 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all text-left flex flex-col items-start"
                        >
                          <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                            {group.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{group.name}</h3>
                          <p className="text-slate-500 text-sm mb-6 flex-1">{group.description}</p>
                          <div className="flex items-center justify-between w-full">
                            <span className="bg-indigo-100 text-indigo-700 text-xs py-1 px-3 rounded-full font-bold">{group.items.length} lessons</span>
                            <span className="text-indigo-600 font-bold text-sm group-hover:translate-x-1 transition-transform">View Lessons →</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div>
                    <button 
                      onClick={() => setSelectedSkill(null)}
                      className="flex items-center text-indigo-600 font-bold mb-6 hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to All Skills
                    </button>
                    
                    {ctSkillGroups.filter(g => g.id === selectedSkill).map(group => (
                      <div key={group.id}>
                        <div className="flex items-center mb-8">
                          <div className="bg-indigo-50 p-4 rounded-2xl mr-6">
                            {group.icon}
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-slate-900">{group.name}</h2>
                            <p className="text-slate-500">{group.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {group.items.map(item => (
                            <a key={item.title} href={item.lessonUrl} target="_blank" rel="noreferrer" className="block bg-slate-50 hover:bg-white hover:border-indigo-200 border border-slate-200 transition-all rounded-3xl p-6 shadow-sm group">
                              <div className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</div>
                              <div className="text-sm font-medium text-slate-500 mb-4">
                                {item.gradeBand} • {item.subject} • {item.tool}
                              </div>
                              <div className="mt-auto pt-4 border-t border-slate-200">
                                <div className="text-[10px] uppercase tracking-wider font-bold text-indigo-600">
                                  {item.ctSkills}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
