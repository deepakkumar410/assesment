# AI Interface Prototype

A polished frontend-only prototype of an AI interface combining the best features from leading AI platforms. Built with Next.js, TypeScript, Tailwind CSS, and Storybook.

## 🚀 Live Demo

**Live URL:** [Add your Vercel/Netlify URL here after deployment]

Example: `https://your-project.vercel.app`

## 📋 Table of Contents

- [Research](#research)
- [Design](#design)
- [Development](#development)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## 🔍 Research

### AI Platforms Reviewed

#### 1. OpenAI Playground
**Standout Features:**
- Clean, intuitive parameter controls with real-time sliders
- Model selector with clear descriptions of each model's capabilities
- Excellent dark mode implementation with smooth transitions
- Well-organized sidebar layout separating controls from the main content area

#### 2. Anthropic Claude UI
**Standout Features:**
- Elegant chat interface with distinct visual styling for prompts vs responses
- Excellent copy-to-clipboard functionality with visual feedback
- Smooth animations for message appearance and interactions
- Strong focus on readability with proper spacing and typography

#### 3. Hugging Face Spaces
**Standout Features:**
- Template system for saving and loading common prompts
- Responsive design that works well across all device sizes
- Clear visual hierarchy with cards and sections
- Good use of loading states and error handling

#### 4. Microsoft Copilot Lab
**Standout Features:**
- Comprehensive parameter panel with tooltips explaining each setting
- Download functionality for saving conversations as JSON
- Accessible keyboard navigation throughout the interface
- Consistent design language with proper focus states

#### 5. Google Bard (Gemini)
**Standout Features:**
- Clean, modern UI with excellent use of whitespace
- Smooth theme switching between light and dark modes
- Well-implemented responsive breakpoints
- Clear visual feedback for user actions

### Chosen Features

Based on the research above, I've selected **6 core features** to combine into this prototype:

1. **Model Selector** - Dropdown/sidebar to choose between different AI models (inspired by OpenAI Playground)
2. **Prompt Editor with Templates** - Text area with save/load template functionality (inspired by Hugging Face Spaces)
3. **Comprehensive Parameters Panel** - Sliders and inputs for temperature, max tokens, top P, frequency penalty, and presence penalty (inspired by OpenAI Playground and Microsoft Copilot Lab)
4. **Chat/Output Area** - Display prompt → response with copy and download JSON actions (inspired by Anthropic Claude UI and Microsoft Copilot Lab)
5. **Theme Toggle** - Light/dark mode switch with localStorage persistence (inspired by Google Bard and OpenAI Playground)
6. **Responsive Layout** - Mobile-first design that adapts across all breakpoints (inspired by Hugging Face Spaces)

---

## 🎨 Design

### Design Mockup

**Design Approach:** This prototype follows a clean, modern design inspired by leading AI platforms. The interface uses a card-based layout with clear visual hierarchy.

**Screenshots:**
- Light Mode: Clean white background with blue accents
- Dark Mode: Dark slate background with proper contrast
- Mobile View: Responsive single-column layout

*Note: Add Figma/XD link or screenshots here if available*

**Design Principles:**
- **Clean & Minimal**: Focus on content with generous whitespace
- **Consistent Spacing**: Using Tailwind's spacing scale for rhythm
- **Clear Hierarchy**: Visual distinction between prompts and responses
- **Accessible Colors**: High contrast ratios for readability
- **Smooth Transitions**: Subtle animations for better UX

### Tailwind Token Mapping

#### Colors

```typescript
// Primary Colors (Blue scale)
primary-50: '#f0f9ff'   // Lightest background tints
primary-500: '#0ea5e9'  // Main brand color
primary-600: '#0284c7'  // Hover states
primary-900: '#0c4a6e'  // Darkest accents

// Background Colors
background-light: '#ffffff'  // Light mode background
background-dark: '#0f172a'   // Dark mode background
surface-light: '#f8fafc'     // Card/surface light
surface-dark: '#1e293b'      // Card/surface dark

// Text Colors
text-primary-light: '#0f172a'    // Main text light mode
text-primary-dark: '#f1f5f9'     // Main text dark mode
text-secondary-light: '#64748b'  // Secondary text light
text-secondary-dark: '#94a3b8'  // Secondary text dark
```

#### Spacing

```typescript
// Custom spacing tokens
spacing-18: '4.5rem'  // 72px - Large component spacing
spacing-88: '22rem'   // 352px - Sidebar width
```

#### Typography

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif']
}

// Font sizes use Tailwind defaults:
// text-xs: 0.75rem (12px)
// text-sm: 0.875rem (14px)
// text-base: 1rem (16px)
// text-lg: 1.125rem (18px)
// text-xl: 1.25rem (20px)
// text-2xl: 1.5rem (24px)
```

#### Border Radius

```typescript
borderRadius: {
  xl: '1rem',    // 16px - Cards and containers
  '2xl': '1.5rem' // 24px - Chat bubbles
}
```

### Design to Code Translation

| Design Element | Implementation |
|---------------|----------------|
| **Card Components** | `bg-surface-light dark:bg-surface-dark rounded-xl p-6 border` |
| **Chat Bubbles** | `rounded-2xl px-4 py-3` with conditional colors based on type |
| **Primary Buttons** | `bg-primary-500 hover:bg-primary-600 text-white rounded-lg` |
| **Input Fields** | `bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus-ring` |
| **Spacing Between Sections** | `space-y-6` for vertical rhythm, `gap-6` for grid spacing |
| **Responsive Grid** | `grid-cols-1 lg:grid-cols-12` for mobile-first layout |
| **Focus States** | Custom `focus-ring` utility class for accessibility |
| **Animations** | Framer Motion for entrance animations and hover effects |

---

## 💻 Development

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Component Documentation**: Storybook
- **State Management**: React Context API

### Key Features Implemented

#### 1. Model Selector
- Dropdown component fetching models from `/api/models`
- Loading and error states
- Accessible with ARIA labels
- Smooth animations on mount

#### 2. Prompt Editor
- Large textarea for prompt input
- Save template functionality (stores in localStorage)
- Load template dropdown menu
- Template data fetched from `/api/templates`
- Proper error handling

#### 3. Parameters Panel
- Five parameter sliders:
  - Temperature (0-2, step 0.1)
  - Max Tokens (1-4000, step 100)
  - Top P (0-1, step 0.05)
  - Frequency Penalty (-2 to 2, step 0.1)
  - Presence Penalty (-2 to 2, step 0.1)
- Real-time value display
- Keyboard accessible

#### 4. Chat/Output Area
- Displays prompt and response in chat bubbles
- Copy to clipboard functionality with visual feedback
- Download JSON action for each message
- Clear chat functionality
- Smooth animations for message appearance
- Scrollable container with max height

#### 5. Theme Toggle
- Light/dark mode switch in header
- Persisted in localStorage
- Respects system preference on first load
- Smooth transitions between themes
- Icon changes based on current theme

#### 6. Responsive Layout
- Mobile-first approach
- Sidebar collapses on mobile
- Grid layout adapts: `grid-cols-1 lg:grid-cols-12`
- Touch-friendly button sizes
- Proper spacing adjustments per breakpoint

### Mock API Setup

The project includes Next.js API routes for mock data:

- **`/app/api/models/route.ts`**: Returns array of AI models
- **`/app/api/templates/route.ts`**: Returns array of prompt templates

Both routes simulate network delay and return JSON data.

### State Management

Three React Context providers:

1. **ThemeContext**: Manages theme state and localStorage persistence
2. **SessionContext**: Manages chat messages and conversation history
3. **FormContext**: Manages form state (prompt, selected model, parameters)

### Accessibility Features

- ✅ Keyboard navigation throughout
- ✅ ARIA labels on all interactive elements
- ✅ Focus states with visible rings
- ✅ Semantic HTML elements
- ✅ Proper heading hierarchy
- ✅ Screen reader friendly labels

### Animations

- Entrance animations using Framer Motion
- Hover effects on buttons and interactive elements
- Smooth transitions for theme changes
- Message appearance animations
- Button press feedback

### Component Library (Storybook)

Storybook is configured with stories for:

1. **Button** - Primary, secondary, danger variants
2. **Slider** - Parameter control component
3. **Modal** - Dialog component
4. **ChatBubble** - Prompt and response display

Run `npm run storybook` to view the component library.

### Project Structure

```
├── app/
│   ├── api/
│   │   ├── models/
│   │   │   └── route.ts          # Mock models API
│   │   └── templates/
│   │       └── route.ts          # Mock templates API
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── Button.tsx                # Reusable button component
│   ├── Button.stories.tsx        # Button Storybook story
│   ├── ChatArea.tsx              # Main chat/output component
│   ├── ChatBubble.tsx             # Individual message bubble
│   ├── ChatBubble.stories.tsx    # ChatBubble Storybook story
│   ├── ModelSelector.tsx         # Model dropdown
│   ├── Modal.tsx                  # Modal dialog component
│   ├── Modal.stories.tsx         # Modal Storybook story
│   ├── ParametersPanel.tsx       # Parameter controls
│   ├── PromptEditor.tsx          # Prompt input with templates
│   ├── Slider.tsx                 # Slider input component
│   ├── Slider.stories.tsx        # Slider Storybook story
│   └── ThemeToggle.tsx           # Theme switcher
├── contexts/
│   ├── FormContext.tsx           # Form state management
│   ├── SessionContext.tsx        # Chat session management
│   └── ThemeContext.tsx          # Theme management
├── .storybook/
│   ├── main.ts                   # Storybook config
│   └── preview.ts                # Storybook preview config
├── package.json
├── tsconfig.json                 # TypeScript config (strict mode)
├── tailwind.config.ts            # Tailwind configuration
└── README.md
```

### Known Limitations

1. **Mock API Responses**: The chat responses are simulated with mock data. In a production environment, this would connect to actual AI APIs.

2. **Template Persistence**: Templates saved via "Save Template" are stored in localStorage but not synced with the API. A full implementation would persist to a backend.

3. **No Real AI Integration**: This is a frontend-only prototype, so it doesn't make actual API calls to AI services.

4. **Single Session**: Chat history is stored in memory and doesn't persist across page refreshes (except templates).

5. **No Authentication**: The prototype doesn't include user authentication or multi-user support.

### Future Enhancements

- Connect to real AI APIs (OpenAI, Anthropic, etc.)
- Backend integration for template persistence
- User authentication and session management
- Export conversations in multiple formats
- Advanced parameter presets
- Conversation history persistence
- Multi-language support

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd Assisment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Storybook

To view the component library:

```bash
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006)

### Build for Production

```bash
npm run build
npm start
```

### Deployment

The project can be deployed to:
- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `out` folder or connect via Git
- **GitHub Pages**: Use `npm run build` and deploy the `out` folder

---

## 📝 License

This project is created for assessment purposes.

---

## 👤 Author

[Your Name]

---

## 🙏 Acknowledgments

- OpenAI Playground for design inspiration
- Anthropic Claude UI for chat interface patterns
- Hugging Face Spaces for template system ideas
- Microsoft Copilot Lab for accessibility patterns
- Google Bard for theme implementation ideas

