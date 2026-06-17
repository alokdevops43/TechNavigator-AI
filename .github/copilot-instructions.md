# TechNavigator Development Guide

## Project Overview

TechNavigator is an industry-level SaaS frontend application built with React, TypeScript, Tailwind CSS, and Framer Motion. It helps users discover technology career paths and generates personalized 12-month learning roadmaps.

## Development Standards

### Code Organization

- Keep components small and focused
- Use TypeScript for type safety
- Follow the established folder structure
- Use meaningful file and variable names

### Component Guidelines

- Functional components with hooks only
- Props should be typed with interfaces
- Use React Context for global state
- Implement proper error handling

### Styling

- Use Tailwind CSS utility classes
- Implement glassmorphism effects using custom classes
- Apply consistent spacing and sizing
- Use gradient-text class for typography effects

### Animations

- Use Framer Motion for all animations
- Keep animations smooth and purposeful
- Avoid excessive animations that distract
- Use proper transition timing

## Key Technologies

- **React 18**: Component library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **React Router DOM**: Routing
- **Lucide React**: Icons
- **Vite**: Build tool

## File Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page-level components
├── data/           # Static data and constants
├── context/        # React Context providers
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Development Workflow

1. Create components in `src/components/`
2. Create pages in `src/pages/`
3. Define types in `src/types/`
4. Add helpers in `src/utils/`
5. Export from component index files
6. Test in development server

## Styling Approach

- Use Tailwind CSS classes
- Apply responsive design with breakpoints
- Implement dark theme consistently
- Use CSS variables from Tailwind config
- Leverage glassmorphism effect class

## Performance Considerations

- Lazy load routes with React Router
- Optimize animations for smooth 60fps
- Use React.memo for expensive components
- Implement proper key props in lists
- Minimize re-renders with Context

## Testing Guidelines

- Test component rendering
- Verify navigation and routing
- Check responsive design
- Validate data persistence
- Test accessibility features

## Deployment Instructions

1. Build: `npm run build`
2. Test build: `npm run preview`
3. Deploy to Vercel using Git integration
4. Set environment variables if needed
5. Monitor performance and errors

## Common Tasks

### Adding a New Career

1. Update `src/data/careers.ts`
2. Add career object to CAREERS array
3. Include 12-month roadmap
4. Add resource channels

### Modifying Components

1. Update component in `src/components/`
2. Update exports in `src/components/index.ts`
3. Update any affected types
4. Test rendering and interactions

### Styling Updates

1. Modify Tailwind config if needed
2. Update component classes
3. Ensure responsive design
4. Check animation smoothness

## Debugging Tips

- Use React DevTools browser extension
- Check Framer Motion animation playback
- Verify TypeScript types compilation
- Monitor network requests
- Test LocalStorage persistence

## Code Review Checklist

- [ ] Types are properly defined
- [ ] Components follow naming conventions
- [ ] Animations are smooth and purposeful
- [ ] Responsive design implemented
- [ ] No console errors or warnings
- [ ] Proper error handling
- [ ] Code is DRY (Don't Repeat Yourself)
- [ ] Components are reusable

## Future Improvements

- Backend API integration
- User authentication
- Data persistence on server
- Real-time progress syncing
- Community features
- Advanced filtering and recommendations
- Mobile app version
- Offline support

## Resources

- React Documentation: https://react.dev
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev
