Menu App – Final PoE
Project Overview

This is a React + TypeScript restaurant menu app. It has two main pages:

Home Page – Displays the full menu, lets guests filter by course, and shows a dashboard with total items, average price, and total revenue per course.

Manage Menu Page – Allows the chef to add and remove menu items. Changes are reflected in real-time on the Home page.

Features
Home Page

Displays all menu items in a list.

Filter items by course: Starter, Main, Dessert, or All.

Dashboard shows:

Total menu items

Average price per course

Total revenue per course

Manage Menu Page

Add new menu items with Name, Course, Description, and Price.

Remove existing menu items.

Changes update the Home page immediately.

Components

Home.tsx – Dashboard + filter + menu display

ManageMenu.tsx – Add/Remove menu items

MenuItemForm.tsx – Form for adding new items

MenuList.tsx – Reusable component to display menu items

types.ts – Type definition for menu items

Changelog
Part 3 – Final PoE Changes

Moved Add/Remove menu feature to a separate screen (ManageMenu)

Home page is read-only, displays full menu

Added filter by course on Home page

Added Remove button for chef on Manage Menu page

Dashboard added to Home page (total items, avg price, total revenue)

Refactored code:

Created MenuList component

Created MenuItemForm component

Improved folder structure and code organization
