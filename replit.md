# DGRP Baysound Record Label Website

## Overview

DGRP Baysound is a luxury record label website built with a modern full-stack architecture. The application showcases a sophisticated, dark-themed design with gold accents, emphasizing artistic credibility and professional excellence in the music industry. The site features artist profiles, music showcases, and content management capabilities designed to convey exclusivity and high-end creative industry standards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system

**Design System:**
- Dark mode primary theme with sophisticated minimalism
- Custom color palette: Rich black backgrounds (#0a0a0a) with warm gold accents (#c6a679)
- Typography: Playfair Display for elegant serif headings, Inter for body text
- Component library based on "New York" style from Shadcn/ui
- Responsive design with mobile-first approach

**Key Design Decisions:**
- Chose Shadcn/ui over pre-built component libraries for maximum customization and design control
- Implemented comprehensive accessibility through Radix UI primitives
- Used CSS variables for theming to support potential future theme variations
- Google Fonts CDN integration for typography performance

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Build Tool**: esbuild for production bundling
- **Development**: tsx for TypeScript execution in development

**API Structure:**
- RESTful API design with `/api` prefix for all endpoints
- Middleware-based request logging and error handling
- JSON-based request/response format
- Credential-based authentication support

**Server Configuration:**
- Development mode with Vite middleware integration for HMR
- Production mode serving static built assets
- Environment-based configuration (NODE_ENV)
- Custom error handling with status code support

### Data Storage

**Database Technology:**
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (via Neon serverless driver)
- **Schema Management**: Drizzle Kit for migrations

**Storage Architecture:**
- In-memory storage implementation (`MemStorage`) for development/testing
- Interface-based design (`IStorage`) allowing easy swap to database implementation
- UUID-based primary keys for all entities
- Schema validation using Zod integration

**Current Schema:**
- User entity with username/password authentication
- Extensible design ready for artist profiles, music tracks, and content

### Authentication & Authorization

**Current Implementation:**
- Basic user storage structure with username/password fields
- Session-based approach ready for implementation (connect-pg-simple available)
- Credential inclusion in API requests

**Future Considerations:**
- Session management with PostgreSQL session store
- Password hashing (bcrypt or similar)
- Role-based access control for admin/artist management

### External Dependencies

**UI Component Libraries:**
- Radix UI primitives (accordion, dialog, dropdown, navigation, etc.)
- Embla Carousel for content carousels
- cmdk for command palette interfaces
- Lucide React for iconography

**Development Tools:**
- Replit plugins for enhanced development experience (cartographer, dev banner, runtime error overlay)
- TypeScript for type safety across the stack
- PostCSS with Tailwind CSS and Autoprefixer

**Database & ORM:**
- Neon Database (serverless PostgreSQL)
- Drizzle ORM with PostgreSQL dialect
- Drizzle Zod for schema validation

**Forms & Validation:**
- React Hook Form for form state management
- Hookform resolvers for validation integration
- Zod for schema validation

**Utilities:**
- date-fns for date manipulation
- class-variance-authority for component variant management
- clsx and tailwind-merge for className composition

**Third-Party Services:**
- Google Fonts (Playfair Display, Inter)
- Potential for music streaming API integration
- Asset storage for artist images and media (currently using attached_assets directory)