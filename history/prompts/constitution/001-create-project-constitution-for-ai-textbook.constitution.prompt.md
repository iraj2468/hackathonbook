---
id: 1
title: Create Project Constitution for AI Textbook
stage: constitution
date: 2025-12-12
surface: agent
model: Gemini
feature: none
branch: master
user: {{USER}}
command: /sp.constitution
labels: [constitution, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/tasks-template.md
tests:
  []
---

## Prompt

/sp.constitution Project: Physical AI & Humanoid Robotics Textbook

Core principles:
- Accuracy through primary source verification (ROS2, Gazebo, Isaac, VLA, robotics)
- Clarity for academic audience (university-level students, computer science/AI background)
- Reproducibility (all code examples, exercises, simulations must work)
- Rigor (verified technical correctness, peer-reviewed or official docs preferred)

Key standards:
- All technical claims must be verifiable with official docs or peer-reviewed sources
- Citation format: APA style (where applicable)
- Source types: minimum 50% peer-reviewed articles or official robotics/AI documentation
- Plagiarism check: 0% tolerance
- Writing clarity: Flesch-Kincaid grade 10-12, academic and student-friendly
- Include diagrams, tables, code blocks, and exercises in every chapter

Constraints:
- Chapters must follow the 13-week course outline exactly
- Format: Docusaurus markdown (.md/.mdx)
- Total book length: ~200-250 pages (approx. 13 chapters)
- All AI and robotics examples must run with Spec-Kit Plus workflow
- Deployment ready for GitHub Pages

Roles:
- Book Architect: Design complete book structure, chapter flow, sidebars
- Lead Author: Write textbook chapters in Docusaurus markdown
- Research Assistant: Gather accurate references, technical examples, and verified sources
- Instructional Designer: Add learning outcomes, exercises, summaries, diagrams descriptions, and quizzes
- Technical Reviewer: Check accuracy of AI/robotics algorithms, simulations, and examples
- Docusaurus Publisher: Format chapters for Docusaurus, maintain sidebars, prepare deployment
- Deployment Manager: Ensure successful build and GitHub Pages deployment

Success criteria:
- All chapters generated and formatted correctly
- Technical content fully verified
- Sidebar/navigation structure correct
- Docusaurus build runs without errors
- Book fully ready for GitHub Pages deployment

## Response snapshot

I have successfully created the project constitution and updated the relevant templates.

- Created `.specify/memory/constitution.md` with the project's principles, standards, roles, and governance.
- Updated `.specify/templates/plan-template.md` to include constitution checks.
- Updated `.specify/templates/tasks-template.md` to include tasks related to the constitution's principles.

## Outcome

- ✅ Impact: High. The constitution is a foundational document for the project.
- 🧪 Tests: None.
- 📁 Files: 3 files modified.
- 🔁 Next prompts: The user can now proceed with other commands.
- 🧠 Reflection: The process of creating the constitution and updating the templates went smoothly. The user provided all the necessary information.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
