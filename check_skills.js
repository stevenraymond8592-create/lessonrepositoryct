
const lessons = [
  { title: "Binary Bracelets", ctSkills: "abstraction, decomposition, pattern recognition, algorithms" },
  { title: "Conditionals with Cards", ctSkills: "algorithms, debugging" },
  { title: "Graph Paper Programming", ctSkills: "abstraction, pattern recognition" },
  { title: "Introduction to Debugging", ctSkills: "algorithms, debugging, constraints" },
  { title: "Loops with Cheerios", ctSkills: "algorithms, pattern recognition" },
  { title: "My Robotic Friends", ctSkills: "algorithms, abstraction, decomposition, pattern recognition" },
  { title: "Real-Life Algorithms: Plant a Seed", ctSkills: "decomposition" },
  { title: "Songwriting with Parameters", ctSkills: "abstraction, algorithm, decomposition" },
  { title: "The Big Event", ctSkills: "abstraction, pattern recognition, algorithms" },
  { title: "Variables in Envelopes", ctSkills: "decomposition, pattern recognition, algorithms" },
  { title: "Debugging with Scrat", ctSkills: "algorithms, debugging" },
  { title: "Events in Bounce", ctSkills: "abstraction, decomposition, algorithms" },
  { title: "Functions in Minecraft", ctSkills: "abstraction, algorithms, decomposition" },
  { title: "Loops in Ice Age", ctSkills: "abstraction, algorithms, pattern recognition" },
  { title: "Nested Loops in Maze", ctSkills: "abstraction, algorithms, pattern recognition" },
  { title: "Variables with Artist", ctSkills: "decomposition, debugging, pattern recognition" },
  { title: "While Loops in Farmer", ctSkills: "algorithms, debugging, decomposition" },
  { title: "Conditionals in Minecraft", ctSkills: "algorithms, sequencing" },
  { title: "Functions in Harvester", ctSkills: "abstraction, decomposition" },
  { title: "Variables in Play Lab", ctSkills: "algorithms, debugging, constraints" },
  { title: "For Loops with Bee", ctSkills: "algorithms, decomposition, pattern recognition" },
  { title: "Until Loops in Maze", ctSkills: "algorithms, conditional statements" },
  { title: "Classification of Animals", ctSkills: "pattern recognition" },
  { title: "Sorting Networks", ctSkills: "algorithm" },
  { title: "The Internet", ctSkills: "abstraction, decomposition, pattern recognition, algorithms" },
  { title: "Web Design", ctSkills: "abstraction, classification" }
];

const skills = [
  { id: "pattern", name: "Pattern Recognition", keywords: ["pattern recognition"] },
  { id: "abstraction", name: "Abstraction", keywords: ["abstraction"] },
  { id: "algorithms", name: "Algorithmic Thinking", keywords: ["algorithm", "sequencing", "conditional statements"] },
  { id: "decomposition", name: "Decomposition", keywords: ["decomposition"] }
];

const results = lessons.map(lesson => {
  const ct = (lesson.ctSkills || "").toLowerCase();
  const matched = skills.filter(skill => skill.keywords.some(keyword => ct.includes(keyword)));
  return { title: lesson.title, matched: matched.map(m => m.name) };
});

const missing = results.filter(r => r.matched.length === 0);
console.log("Lessons with no matched skills:", JSON.stringify(missing, null, 2));
