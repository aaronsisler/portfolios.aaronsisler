# portfolios.aaronsisler

## Notes

- README is from ChatGPT giving some suggestions on how to build out the site
- This link is from Bolt.new and is more fleshed out: https://stackblitz.com/edit/sb1-taktvuhs?file=index.html
- This link is from the actual Bolt.new website: https://bolt.new/~/sb1-taktvuhs

## Next Steps

- See what we want to showcase
- Do we need a cool 'icon'?
- What projects are "refined" enough to show up in the projects list?

## Below are ideas from ChatGPT

# 🧑‍💻 Developer Portfolio – Angular + Tailwind

This project is a personal developer portfolio site built with **Angular 17+** and **Tailwind CSS**, designed to showcase:

- 🌐 Frontend websites
- 🔌 RESTful APIs
- 👤 Developer profile and contact

## ✨ Features

- Responsive layout with modern grid
- Clean, minimalist design using Tailwind
- Componentized architecture (Websites + APIs)
- Easy to extend with new sections

## 📁 Pages & Structure

| Page        | Description                          |
| ----------- | ------------------------------------ |
| `/`         | Hero + CTA                           |
| `/projects` | Separate lists for Websites and APIs |
| `/about`    | Background, tech stack               |
| `/contact`  | Email form, social links             |

## 🧱 Layout Tips

- Use `grid-cols-3` for desktop card layout
- Stack vertically on small screens using `grid-cols-1`
- Tailwind `@apply` simplifies reusable button/input styles
- Use small animations via Framer Motion (optional)
- Consider hosting with Netlify or Vercel for simplicity

## 📸 Example API Card

## Project Structure Overview

src/
├── app/
│ ├── home/
│ ├── projects/
│ │ ├── websites/
│ │ └── apis/
│ ├── about/
│ └── contact/
├── assets/
├── index.html
├── styles.css <-- Tailwind CSS
