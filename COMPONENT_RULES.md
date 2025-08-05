# Component Creation Rules

## 📋 General Guidelines

### 1. File Structure
- **Location**: Always create components in appropriate folders
  - Profile components: `app/dashboard/profile/components/`
  - Global components: `components/`
  - Page-specific components: `app/[page]/components/`

### 2. Component Naming
- Use **PascalCase** for component names
- Use **camelCase** for file names
- Examples: `LogoutPopup.tsx`, `ProfileEditForm.tsx`

### 3. Import Structure
```typescript
'use client'
import React from 'react';
import { /* MUI components */ } from '@mui/material';
import { useRouter } from 'next/navigation';
// Other imports...
```

### 4. Component Structure
```typescript
interface ComponentProps {
    // Define props here
}

const ComponentName: React.FC<ComponentProps> = ({ props }) => {
    // Hooks
    const router = useRouter();
    
    // State
    const [state, setState] = React.useState(false);
    
    // Handlers
    const handleAction = () => {
        // Logic here
    };
    
    return (
        // JSX here
    );
};

export default ComponentName;
```

## 🎨 Styling Guidelines

### 1. MUI Theme Integration
- Always use `useTheme()` hook
- Access theme mode: `const mode = theme.palette.mode;`
- Use theme colors: `color="text.primary"`, `color="text.secondary"`

### 2. Color Scheme
- **Primary Blue**: `#3487c7`
- **Secondary Blue**: `#35558a`
- **Gradient**: `linear-gradient(to right, #35558a, #3487c7)`
- **Light Mode Border**: `#E5E7EB`
- **Dark Mode Border**: `#3B3B3B`

### 3. Common Styles
```typescript
// Button styles
sx={{
    backgroundColor: '#3487c7',
    '&:hover': {
        backgroundColor: '#2a6ba8'
    }
}}

// Outlined button
sx={{
    borderColor: '#3487c7',
    color: '#3487c7',
    '&:hover': {
        borderColor: '#3487c7',
        backgroundColor: 'rgba(52, 135, 199, 0.04)'
    }
}}
```

## 🔧 Specific Component Rules

### 1. Popup/Dialog Components
- Use MUI `Dialog` component
- Include `open` and `onClose` props
- Style with rounded corners: `borderRadius: '12px'`
- Set min/max width: `minWidth: '300px', maxWidth: '400px'`

### 2. Form Components
- Use MUI form components
- Include proper validation
- Handle form submission with router navigation

### 3. List Item Components
- Use `CardActionArea` for clickable items
- Include icon, title, and optional switch
- Use consistent spacing and styling

### 4. Navigation Components
- Always use `useRouter()` for navigation
- Use `router.push('/path')` for programmatic navigation

## 📱 Mobile-First Design

### 1. Responsive Design
- Use MUI's responsive breakpoints
- Ensure mobile-friendly touch targets
- Test on different screen sizes

### 2. Touch Interactions
- Use `onClick` handlers for touch events
- Provide visual feedback for interactions
- Ensure adequate spacing for touch targets

## 🔄 State Management

### 1. Local State
- Use `React.useState()` for component state
- Initialize with appropriate default values
- Use descriptive state variable names

### 2. Global State
- Use Zustand stores when needed
- Access stores with proper hooks
- Follow existing store patterns

## 🎯 Component Integration

### 1. Importing Components
```typescript
import ComponentName from './components/ComponentName';
```

### 2. Using Components
```typescript
<ComponentName 
    prop1={value1}
    prop2={value2}
    onAction={handleAction}
/>
```

## 📝 Code Quality

### 1. TypeScript
- Always use TypeScript
- Define proper interfaces for props
- Use proper type annotations

### 2. Comments
- Add comments for complex logic
- Document component purpose
- Explain non-obvious implementations

### 3. Error Handling
- Include proper error boundaries
- Handle edge cases
- Provide user-friendly error messages

## 🚀 Performance & Code Optimization

### 1. Component Optimization
- Use `React.memo()` for expensive components
- Avoid unnecessary re-renders
- Optimize bundle size
- Use proper dependency arrays in useEffect
- Implement lazy loading for heavy components

### 2. Code Reusability
- Create reusable components for common patterns
- Extract repeated logic into custom hooks
- Use composition over inheritance
- Create shared utility functions
- Implement proper prop interfaces for flexibility

### 3. CSS Organization & Reusability
- **PREFER style objects over inline styles** - create reusable style objects
- Create reusable style objects at the top of components
- Group related styles together
- Use consistent naming conventions for style objects
- **Only use inline styles when absolutely necessary** (dynamic values, conditional styling)

```typescript
// ✅ GOOD - Create reusable style objects
const buttonStyles = {
    backgroundColor: '#3487c7',
    padding: '10px 20px',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '#2a6ba8'
    }
};

const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px'
};

// Usage
<Button sx={buttonStyles}>Click me</Button>
<Box sx={containerStyles}>Content</Box>
```

```typescript
// ❌ BAD - Avoid inline styles for static values
<Button sx={{ backgroundColor: '#3487c7', padding: '10px 20px' }}>
    Click me
</Button>

// ✅ GOOD - Use inline styles only when necessary (dynamic values)
<Button sx={{ 
    backgroundColor: isActive ? '#3487c7' : '#f0f0f0',
    padding: `${dynamicPadding}px`
}}>
    Click me
</Button>
```

### 4. Style Object Guidelines
- Create style objects at the top of the component
- Use descriptive names: `cardStyles`, `headerStyles`, `buttonStyles`
- Group related styles: `primaryButtonStyles`, `secondaryButtonStyles`
- Use theme values when possible: `theme.spacing(2)`
- Create shared style objects for common patterns

### 5. Loading States
- Include loading indicators
- Handle async operations gracefully
- Provide skeleton screens when needed

## 📋 Checklist Before Creating Component

- [ ] Determine correct file location
- [ ] Choose appropriate component name
- [ ] Define TypeScript interfaces
- [ ] Set up proper imports
- [ ] Implement responsive design
- [ ] Add proper error handling
- [ ] Test component functionality
- [ ] Ensure accessibility compliance
- [ ] Optimize for performance
- [ ] Add proper documentation

## 🎨 Design System

### Colors
- Primary: `#3487c7`
- Secondary: `#35558a`
- Success: `#4caf50`
- Warning: `#ff9800`
- Error: `#f44336`
- Text Primary: Theme dependent
- Text Secondary: Theme dependent

### Typography
- Use MUI Typography components
- Follow hierarchy: h1, h2, h3, h4, h5, h6, body1, body2
- Use appropriate font weights

### Spacing
- Use MUI spacing system
- Common values: 8px, 16px, 24px, 32px
- Use theme.spacing() for consistency

---

**Note**: Always refer to this file when creating new components to maintain consistency across the application. 