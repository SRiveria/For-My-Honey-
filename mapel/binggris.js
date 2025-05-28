const materi = {
  judul: "English: Reading Comprehension and Conversation Analysis",
  deskripsi: `This material focuses on understanding written texts and conversations about technology and industry, with emphasis on vocabulary, grammar, and comprehension skills.
  
  **Text 1: The Electrical Industry: Powering Progress**
  
  The electrical industry is essential for modern development, providing energy for homes, businesses, and technology. Some argue that newer industries, like IT, are more important, but without electricity, these fields wouldn't function.
  
  This industry drives economic growth, supports infrastructure, and fosters innovation. While concerns about environmental impact exist, advancements in renewable energy are transforming the sector into a force for sustainability.
  
  Moreover, the electrical industry plays a crucial role in improving global connectivity. Reliable electrical infrastructure enables communication networks, digital services, and smart technology, making everyday life more efficient and interconnected.
  
  Additionally, continued investment in electrical technology leads to groundbreaking advancements, such as smart grids and energy storage solutions. These innovations improve efficiency and reliability, ensuring a sustainable energy future.
  
  In conclusion, the electrical industry remains a key contributor to progress, powering economies and shaping the future.
  
  **Text 2: Conversation**
  
  Alex: "Hey, have you noticed how rapidly the electronics industry is evolving? It feels like every month there's a new breakthrough."
  
  Jordan: "Absolutely! Especially with advancements in AI and semiconductor technology. Companies are racing to develop more efficient chips while also dealing with global supply chain issues."
  
  Alex: "Right? The push for smaller, faster, and more energy-efficient processors is intense. And then there is the whole sustainability aspect. Companies are trying to balance performance with environmental impact."
  
  Jordan: "That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans."
  
  Alex: "Agreed! Also, have you seen how consumer electronics are integrating AI? Smart homes, wearable tech, and even AI-driven customer support systems are changing the way we interact with technology."
  
  Jordan: "It's fascinating. And let's not forget electric vehicles—they rely heavily on advancements in battery tech, power electronics, and efficient semiconductors."
  
  Alex: "It's all connected! The electronic industry is driving innovation across multiple sectors."
  `
};

const soal = [
  {
    question: `Read the following excerpt from Text 1:
    "The electrical industry is essential for modern development, providing energy for homes, businesses, and technology."
    
    According to this text, what is essential for modern development?`,
    answers: [
      { text: "The IT industry", correct: false },
      { text: "The electrical industry", correct: true },
      { text: "Smart technology", correct: false },
      { text: "Renewable energy", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: `Read the following excerpt from Text 1:
    "The electrical industry is essential for modern development, providing energy for homes, businesses, and technology."
    
    Which word in this sentence is a synonym for 'important'?`,
    answers: [
      { text: "Essential", correct: true },
      { text: "Modern", correct: false },
      { text: "Reliable", correct: false },
      { text: "Sustainable", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: `Read the following excerpt from Text 1:
    "Some argue that newer industries, like IT, are more important, but without electricity, these fields wouldn't function."
    
    Which grammatical structure is used in this sentence?`,
    answers: [
      { text: "Present conditional", correct: false },
      { text: "Second conditional", correct: true },
      { text: "Past perfect", correct: false },
      { text: "Future continuous", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Based on Text 1:
    "This industry drives economic growth, supports infrastructure, and fosters innovation. While concerns about environmental impact exist, advancements in renewable energy are transforming the sector into a force for sustainability."
    
    Which of the following is NOT mentioned as a benefit of the electrical industry?`,
    answers: [
      { text: "Supporting economic growth", correct: false },
      { text: "Improving global connectivity", correct: false },
      { text: "Creating job opportunities", correct: true },
      { text: "Enabling technological innovation", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 1:
    "Additionally, continued investment in electrical technology leads to groundbreaking advancements, such as smart grids and energy storage solutions."
    
    What do 'groundbreaking advancements' refer to in this context?`,
    answers: [
      { text: "Smart grids and energy storage solutions", correct: true },
      { text: "IT and communication technologies", correct: false },
      { text: "Economic growth and infrastructure", correct: false },
      { text: "Digital services and smart technology", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Jordan: 'Absolutely! Especially with advancements in AI and semiconductor technology. Companies are racing to develop more efficient chips while also dealing with global supply chain issues.'"
    
    In this conversation, who mentions AI and semiconductor technology?`,
    answers: [
      { text: "Alex", correct: false },
      { text: "Jordan", correct: true },
      { text: "Both Alex and Jordan", correct: false },
      { text: "Neither Alex nor Jordan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Jordan: 'That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans.'"
    
    What environmental issue is specifically mentioned in this part of the conversation?`,
    answers: [
      { text: "Air pollution", correct: false },
      { text: "Carbon emissions", correct: false },
      { text: "E-waste", correct: true },
      { text: "Water contamination", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Jordan: 'That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans.'"
    
    From this text, which innovation helps extend product lifespans?`,
    answers: [
      { text: "AI-driven customer support systems", correct: false },
      { text: "Efficient semiconductors", correct: false },
      { text: "Smart homes", correct: false },
      { text: "Modular devices", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Alex: 'It's all connected! The electronic industry is driving innovation across multiple sectors.'"
    
    The phrase 'It's all connected!' in this context implies that:`,
    answers: [
      { text: "All electronic devices are physically connected", correct: false },
      { text: "Alex and Jordan agree on everything", correct: false },
      { text: "The electronic industry influences multiple sectors", correct: true },
      { text: "Electronic devices require internet connectivity", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Alex: 'Right? The push for smaller, faster, and more energy-efficient processors is intense. And then there is the whole sustainability aspect. Companies are trying to balance performance with environmental impact.'"
    
    What is the main challenge mentioned in this part of the conversation regarding the electronics industry?`,
    answers: [
      { text: "Balancing performance with environmental impact", correct: true },
      { text: "Creating faster processors", correct: false },
      { text: "Developing AI technologies", correct: false },
      { text: "Making smaller devices", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 1:
    "Some argue that newer industries, like IT, are more important, but without electricity, these fields wouldn't function."
    
    Which grammatical structure is used in the second part of this sentence?`,
    answers: [
      { text: "Present conditional", correct: false },
      { text: "Second conditional", correct: true },
      { text: "Past perfect", correct: false },
      { text: "Future continuous", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: `Read the following excerpt from Text 1:
    "While concerns about environmental impact exist, advancements in renewable energy are transforming the sector into a force for sustainability."
    
    What type of sentence is this?`,
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: `Read the following excerpt from Text 1:
    "In conclusion, the electrical industry remains a key contributor to progress, powering economies and shaping the future."
    
    In this context, what is described as 'a key contributor to progress'?`,
    answers: [
      { text: "Smart grids", correct: false },
      { text: "Energy storage solutions", correct: false },
      { text: "Modern development", correct: false },
      { text: "The electrical industry", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: `After reading Text 2, which includes mentions of:
    "Smart homes, wearable tech, and even AI-driven customer support systems" and "electric vehicles—they rely heavily on advancements in battery tech, power electronics, and efficient semiconductors."
    
    Which technology is NOT mentioned as relying on advancements in the electronics industry?`,
    answers: [
      { text: "Smart homes", correct: false },
      { text: "Wearable tech", correct: false },
      { text: "Electric vehicles", correct: false },
      { text: "Quantum computing", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Jordan: 'Absolutely! Especially with advancements in AI and semiconductor technology. Companies are racing to develop more efficient chips while also dealing with global supply chain issues.'"
    
    What does the phrase 'racing to develop' suggest about companies in the electronics industry?`,
    answers: [
      { text: "They are competing intensely", correct: true },
      { text: "They are physically moving quickly", correct: false },
      { text: "They are carelessly hurrying", correct: false },
      { text: "They are participating in motorsports", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Jordan: 'That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans.'"
    
    From this text, what can be inferred about biodegradable circuit boards?`,
    answers: [
      { text: "They are already widely used", correct: false },
      { text: "They are a potential solution to e-waste", correct: true },
      { text: "They are less efficient than traditional circuit boards", correct: false },
      { text: "They are too expensive to produce", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `After reading the complete Text 1, which begins with "The electrical industry is essential for modern development" and ends with "powering economies and shaping the future," which of the following best describes the tone of this text?`,
    answers: [
      { text: "Critical and skeptical", correct: false },
      { text: "Humorous and entertaining", correct: false },
      { text: "Informative and persuasive", correct: true },
      { text: "Pessimistic and alarming", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Alex: 'Right? The push for smaller, faster, and more energy-efficient processors is intense.'"
    
    In this statement, the expression 'Right?' at the beginning functions as:`,
    answers: [
      { text: "A question asking for confirmation", correct: true },
      { text: "An indication that Alex is correct", correct: false },
      { text: "A direction to move to the right", correct: false },
      { text: "A statement about human rights", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `After reading Text 1, which discusses how "the electrical industry is essential for modern development" and concludes that it "remains a key contributor to progress, powering economies and shaping the future," what is the main purpose of this text?`,
    answers: [
      { text: "To criticize the electrical industry", correct: false },
      { text: "To highlight the importance of the electrical industry", correct: true },
      { text: "To compare different industries", correct: false },
      { text: "To explain how electricity works", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: `Read the following excerpt from Text 1:
    "Some argue that newer industries, like IT, are more important, but without electricity, these fields wouldn't function."
    
    Which of these statements expresses an opinion rather than a fact?`,
    answers: [
      { text: "The electrical industry is essential for modern development.", correct: false },
      { text: "Some argue that newer industries, like IT, are more important.", correct: true },
      { text: "This industry drives economic growth, supports infrastructure, and fosters innovation.", correct: false },
      { text: "The electrical industry plays a crucial role in improving global connectivity.", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Jordan: 'Absolutely! Especially with advancements in AI and semiconductor technology.'"
    
    In this sentence, what part of speech is 'especially'?`,
    answers: [
      { text: "Adjective", correct: false },
      { text: "Adverb", correct: true },
      { text: "Conjunction", correct: false },
      { text: "Preposition", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: `Read the following excerpt from Text 1:
    "While concerns about environmental impact exist, advancements in renewable energy are transforming the sector into a force for sustainability."
    
    According to this text, why are advancements in renewable energy important?`,
    answers: [
      { text: "They are transforming the sector into a force for sustainability", correct: true },
      { text: "They are making electricity cheaper", correct: false },
      { text: "They are creating more jobs", correct: false },
      { text: "They are replacing the electrical industry", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Alex: 'Right? The push for smaller, faster, and more energy-efficient processors is intense. And then there is the whole sustainability aspect. Companies are trying to balance performance with environmental impact.'
    Jordan: 'That's a big challenge.'"
    
    In this exchange, what does Jordan mean by 'That's a big challenge'?`,
    answers: [
      { text: "Creating new electronics is difficult", correct: false },
      { text: "Understanding technology is complicated", correct: false },
      { text: "Balancing performance with environmental impact is difficult", correct: true },
      { text: "Developing AI systems is problematic", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 1:
    "Additionally, continued investment in electrical technology leads to groundbreaking advancements, such as smart grids and energy storage solutions."
    
    What does 'groundbreaking' mean in this context?`,
    answers: [
      { text: "Breaking the ground for construction", correct: false },
      { text: "Causing earthquakes", correct: false },
      { text: "Innovative and revolutionary", correct: true },
      { text: "Fundamental and basic", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: `After reading both Text 1 and Text 2, which discuss the electrical industry and the electronics industry respectively, what connects these industries according to the texts?`,
    answers: [
      { text: "They all require skilled workers", correct: false },
      { text: "They all depend on electrical infrastructure", correct: true },
      { text: "They all produce consumer goods", correct: false },
      { text: "They all originated in the same time period", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 1:
    "The electrical industry is essential for modern development, providing energy for homes, businesses, and technology."
    
    Which part of this sentence contains a list of three items?`,
    answers: [
      { text: "providing energy for homes, businesses, and technology", correct: true },
      { text: "The electrical industry is essential", correct: false },
      { text: "essential for modern development", correct: false },
      { text: "electrical industry", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Jordan: 'Absolutely! Especially with advancements in AI and semiconductor technology. Companies are racing to develop more efficient chips while also dealing with global supply chain issues.'"
    
    The phrase 'Companies are racing to develop more efficient chips while also dealing with global supply chain issues' contains which type of clause relationship?`,
    answers: [
      { text: "Cause and effect", correct: false },
      { text: "Contrast", correct: false },
      { text: "Simultaneous actions", correct: true },
      { text: "Sequential events", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: `After reading the complete Text 2, which is a conversation between Alex and Jordan discussing technology trends, what is the relationship between the two speakers?`,
    answers: [
      { text: "Teacher and student", correct: false },
      { text: "Boss and employee", correct: false },
      { text: "Peers discussing a shared interest", correct: true },
      { text: "Customer and salesperson", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: `Based on both Text 1, which states "Without electricity, these fields wouldn't function" and Text 2, which mentions "The electronic industry is driving innovation across multiple sectors," which statement is accurate?`,
    answers: [
      { text: "The electrical industry is declining in importance", correct: false },
      { text: "Technology sectors operate independently of each other", correct: false },
      { text: "Environmental concerns are irrelevant to technological development", correct: false },
      { text: "Innovations in electronics rely on advancements in electrical technology", correct: true }
    ],
    difficulty: "susah"
  },
  {
    question: `Read the following excerpt from Text 2:
    "Alex: 'Hey, have you noticed how rapidly the electronics industry is evolving? It feels like every month there's a new breakthrough.'"
    
    The sentence 'It feels like every month there's a new breakthrough' uses which grammatical structure?`,
    answers: [
      { text: "Present simple", correct: false },
      { text: "Present continuous", correct: false },
      { text: "Present perfect", correct: false },
      { text: "Present simple with 'there is/are' construction", correct: true }
    ],
    difficulty: "susah"
  },
  {
    question: `After reading Text 1, which mentions "advancements in renewable energy are transforming the sector into a force for sustainability" and Text 2, which states "Companies are trying to balance performance with environmental impact," what do both texts suggest about the future of technology?`,
    answers: [
      { text: "It will be primarily focused on entertainment", correct: false },
      { text: "It will involve balancing innovation with sustainability", correct: true },
      { text: "It will completely replace human workers", correct: false },
      { text: "It will be dominated by a single type of technology", correct: false }
    ],
    difficulty: "susah"
  }
];
