# Data Model: Physical AI & Humanoid Robotics Textbook

This document defines the key entities for the textbook project.

## Entities

### Book

The top-level entity representing the entire textbook.

- **Fields**:
    - `title`: The title of the book.
    - `modules`: A list of modules in the book.
- **Relationships**:
    - Has many Modules.

### Module

A collection of chapters representing a major topic area.

- **Fields**:
    - `title`: The title of the module.
    - `chapters`: A list of chapters in the module.
- **Relationships**:
    - Belongs to a Book.
    - Has many Chapters.

### Chapter

A single section of the book, containing content, labs, and assignments.

- **Fields**:
    - `title`: The title of the chapter.
    - `content`: The main text of the chapter (in Markdown).
    - `labs`: A list of labs associated with the chapter.
    - `assignments`: A list of assignments associated with the chapter.
- **Relationships**:
    - Belongs to a Module.
    - Has many Labs.
    - Has many Assignments.

### Lab

A hands-on exercise with code examples.

- **Fields**:
    - `title`: The title of the lab.
    - `description`: A description of the lab.
    - `code`: The code examples for the lab.
- **Relationships**:
    - Belongs to a Chapter.

### Assignment

A task for the student to complete.

- **Fields**:
    - `title`: The title of the assignment.
    - `description`: A description of the assignment.
- **Relationships**:
    - Belongs to a Chapter.
