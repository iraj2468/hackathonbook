import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'glossary',
    'appendix',
    'course-outline',
    {
      type: 'category',
      label: 'Module 1: Robotic Nervous System (ROS 2)',
      items: [
        'module1-ros2/chapter1',
        'module1-ros2/chapter2',
        'module1-ros2/lab1',
        'module1-ros2/assignment1',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin (Gazebo + Unity)',
      items: [
        'module2-digital-twin/chapter3',
        'module2-digital-twin/chapter4',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'module3-nvidia-isaac/chapter5',
        'module3-nvidia-isaac/chapter6',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: VLA Systems + Capstone (Autonomous Humanoid)',
      items: [
        'module4-vla-capstone/chapter7',
        'module4-vla-capstone/chapter8',
      ],
    },
  ],
};

export default sidebars;
