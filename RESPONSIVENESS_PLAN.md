# 📱 Mobile Responsiveness Implementation Plan

> **Branch:** `responsiveness`  
> **Goal:** Ensure the IIAHM website looks and functions perfectly across all screen sizes.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Breakpoint Strategy](#breakpoint-strategy)
3. [Component Audit](#component-audit)
4. [Implementation Phases](#implementation-phases)
5. [Testing Strategy](#testing-strategy)
6. [Verification Checklist](#verification-checklist)

---

## Overview

This plan ensures every page and component is responsive across:
- **Mobile:** 320px - 480px (iPhone SE, older phones)
- **Mobile Large:** 481px - 640px (iPhone 14, modern phones)
- **Tablet:** 641px - 1024px (iPad, tablets)
- **Desktop:** 1025px - 1440px (laptops)
- **Wide:** 1441px+ (large monitors)

### Tailwind Breakpoint Reference
```
sm:  640px   → Mobile Large
md:  768px   → Tablet
lg:  1024px  → Desktop
xl:  1280px  → Wide
2xl: 1536px  → Ultra Wide
```

---

## Breakpoint Strategy

### Mobile-First Approach
All base styles target mobile. Larger screens use responsive prefixes.

```tsx
// ✅ Correct: Mobile-first
className="text-base md:text-lg lg:text-xl"

// ❌ Wrong: Desktop-first (avoid)
className="text-xl md:text-lg sm:text-base"
```

---

## Component Audit

### Layout Components
| Component | File | Priority | Status |
|-----------|------|----------|--------|
| Header | `components/layout/Header.tsx` | P0 | [ ] |
| Footer | `components/layout/Footer.tsx` | P1 | [ ] |
| PageTransition | `components/layout/PageTransition.tsx` | P2 | [ ] |

### Section Components
| Component | File | Priority | Status |
|-----------|------|----------|--------|
| Hero | `components/sections/Hero.tsx` | P0 | [ ] |
| Programs | `components/sections/Programs.tsx` | P0 | [ ] |
| Impact | `components/sections/Impact.tsx` | P1 | [ ] |

### Page Components
| Page | File | Priority | Status |
|------|------|----------|--------|
| Home | `app/page.tsx` | P0 | [ ] |
| Programs | `app/programs/page.tsx` | P0 | [ ] |
| Programs/[id] | `app/programs/[id]/page.tsx` | P1 | [ ] |
| Impact | `app/impact/page.tsx` | P1 | [ ] |
| About | `app/about/page.tsx` | P1 | [ ] |
| Contact | `app/contact/page.tsx` | P2 | [ ] |

### UI Components
| Component | File | Priority | Status |
|-----------|------|----------|--------|
| Button | `components/ui/button.tsx` | P0 | [ ] |
| ApplicationPopup | `components/ui/ApplicationPopup.tsx` | P0 | [ ] |
| Card | `components/ui/card.tsx` | P1 | [ ] |
| AnimatedCounter | `components/ui/AnimatedCounter.tsx` | P2 | [ ] |

---

## Implementation Phases

### Phase 1: Critical Layout (P0)
**Goal:** Fix navigation and hero for mobile usability.

#### 1.1 Header Component
```
File: src/components/layout/Header.tsx

Issues to check:
- [ ] Logo scales properly on small screens
- [ ] Mobile menu (hamburger) works correctly
- [ ] Navigation links collapse into mobile menu
- [ ] "Enquire Now" button is accessible on mobile
- [ ] Header doesn't overlap content on scroll

Responsive patterns:
- Hidden on mobile: `hidden md:flex`
- Visible on mobile: `flex md:hidden`
- Mobile menu state management
```

#### 1.2 Hero Section
```
File: src/components/sections/Hero.tsx

Issues to check:
- [ ] Headline font size scales (text-3xl md:text-5xl lg:text-7xl)
- [ ] Buttons stack vertically on mobile
- [ ] Padding adjusts for smaller screens
- [ ] Background elements don't overflow
- [ ] Trust indicators wrap properly

Responsive patterns:
- Stack buttons: `flex-col sm:flex-row`
- Adjust padding: `px-4 md:px-6 lg:px-8`
- Scale typography: `text-3xl md:text-5xl lg:text-7xl`
```

#### 1.3 Programs Section
```
File: src/components/sections/Programs.tsx

Issues to check:
- [ ] Grid becomes single column on mobile
- [ ] Card content doesn't overflow
- [ ] Images scale properly
- [ ] "View All" button is accessible

Responsive patterns:
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Card padding: `p-4 md:p-6 lg:p-8`
```

---

### Phase 2: Pages (P1)
**Goal:** Ensure all page layouts are responsive.

#### 2.1 Programs Page
```
File: src/app/programs/page.tsx

Issues to check:
- [ ] Course cards stack on mobile
- [ ] Filter/tabs are usable on touch
- [ ] Text doesn't overflow cards
```

#### 2.2 Programs Detail Page
```
File: src/app/programs/[id]/page.tsx

Issues to check:
- [ ] Sidebar moves below main content on mobile
- [ ] Module list is readable
- [ ] CTA buttons are full-width on mobile
```

#### 2.3 Impact Page
```
File: src/app/impact/page.tsx

Issues to check:
- [ ] Stats grid becomes 2x2 or 1-column on mobile
- [ ] Large numbers scale down appropriately
- [ ] Pillar cards stack vertically
```

#### 2.4 About Page
```
File: src/app/about/page.tsx

Issues to check:
- [ ] Timeline/milestones are readable on mobile
- [ ] Images don't overflow
- [ ] CTA section buttons stack
```

---

### Phase 3: UI Components (P1-P2)
**Goal:** Polish interactive elements for touch.

#### 3.1 ApplicationPopup
```
File: src/components/ui/ApplicationPopup.tsx

Issues to check:
- [ ] Modal is full-screen or near-full on mobile
- [ ] Form inputs are appropriately sized (min 44px touch target)
- [ ] Close button is accessible
- [ ] Keyboard doesn't cover inputs (viewport adjustment)
```

#### 3.2 Footer
```
File: src/components/layout/Footer.tsx

Issues to check:
- [ ] Columns stack vertically on mobile
- [ ] Social icons have adequate touch targets (min 44x44px)
- [ ] Links don't overflow
```

---

### Phase 4: Edge Cases & Polish (P2)
**Goal:** Handle edge cases and ensure consistency.

#### 4.1 Typography Scale
```css
/* Mobile typography scale */
h1: text-3xl (30px) → md:text-5xl → lg:text-7xl
h2: text-2xl (24px) → md:text-3xl → lg:text-4xl
h3: text-xl (20px) → md:text-2xl → lg:text-3xl
body: text-sm (14px) → md:text-base (16px)
```

#### 4.2 Spacing Scale
```css
/* Container padding */
Mobile: px-4 (16px)
Tablet: px-6 (24px)
Desktop: px-8 (32px)

/* Section vertical spacing */
Mobile: py-16 (64px)
Tablet: py-24 (96px)
Desktop: py-32 (128px)
```

#### 4.3 Touch Targets
All clickable elements must be at least 44x44px on mobile.

---

## Testing Strategy

### Device Matrix
| Device Category | Viewport | Test Priority |
|-----------------|----------|---------------|
| iPhone SE | 375x667 | P0 |
| iPhone 14 | 390x844 | P0 |
| iPad | 768x1024 | P1 |
| iPad Pro | 1024x1366 | P2 |
| Desktop | 1440x900 | P0 |
| Wide Monitor | 1920x1080 | P2 |

### Manual Testing Checklist

#### Per Page:
- [ ] No horizontal scrollbar appears
- [ ] All text is readable without zooming
- [ ] Buttons/links have adequate touch targets
- [ ] Images don't overflow containers
- [ ] Forms are usable on mobile
- [ ] Modals are accessible (can close, can scroll if needed)

#### Per Component:
- [ ] Works at 320px width (smallest mobile)
- [ ] Works at 768px width (tablet)
- [ ] Works at 1024px width (desktop start)
- [ ] Transitions smoothly between breakpoints

### Automated Testing with Playwright

```typescript
// E2E viewport tests to create
const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

// Test scenarios:
// 1. Navigate all pages at each viewport
// 2. Open mobile menu and navigate
// 3. Open ApplicationPopup and submit form
// 4. Scroll through all sections
// 5. Visual regression snapshots
```

---

## Verification Checklist

### Pre-Implementation
- [ ] Read this entire plan
- [ ] Review current site at each breakpoint
- [ ] Identify worst offenders first

### Post-Implementation
- [ ] All P0 components pass manual testing
- [ ] All P1 components pass manual testing
- [ ] No horizontal overflow on any page
- [ ] Mobile menu works correctly
- [ ] Forms are usable on mobile
- [ ] Animations don't cause jank on mobile
- [ ] Page load is acceptable on 3G

### Visual Regression (Optional)
- [ ] Take screenshots at each breakpoint before changes
- [ ] Compare after changes to ensure no regressions

---

## Execution Order

```
1. Header.tsx         (Mobile menu is critical)
2. Hero.tsx           (First impression)
3. Programs.tsx       (Key section)
4. Footer.tsx         (Common layout)
5. app/page.tsx       (Homepage assembly)
6. app/programs/page.tsx
7. app/programs/[id]/page.tsx
8. app/impact/page.tsx
9. app/about/page.tsx
10. app/contact/page.tsx
11. ApplicationPopup.tsx
12. Final testing pass
```

---

## Notes

- **Do not break desktop!** Test at all sizes after each change.
- **Use browser DevTools:** Toggle device toolbar (Cmd+Shift+M).
- **Test real devices if possible:** Simulators miss touch interactions.
- **Commit often:** Small, focused commits for each component.

---

> **Ready to implement?** Start with Phase 1.1 (Header) and work down the list.

---

## 🎨 Agentic Visual Verification

### Design Architect Review Protocol

After each phase is implemented, trigger an **agentic visual review** using `@[design-architect]` to ensure the responsive design maintains the brand's "Prestigious Academy" aesthetic.

### Verification Prompt Template

Use this prompt after completing each phase:

```
🎨 @[design-architect] VISUAL AUDIT REQUEST

**Page/Component:** [Name of component/page]
**Viewport:** [320px / 768px / 1440px]
**Branch:** responsiveness

Please review the current state of [component] at [viewport] and verify:

1. **WOW Test:**
   - Would a designer stop scrolling for this?
   - Is it memorable in 5 seconds?
   - Does it feel "Prestigious Academy" not "template"?

2. **Anti-Cliché Scan:**
   - ❌ No generic hero split layouts
   - ❌ No mesh/aurora gradients
   - ❌ No glassmorphism overuse
   - ❌ No purple/violet colors

3. **Mobile-Specific Design Quality:**
   - Does the mobile version feel intentional, not just "shrunk desktop"?
   - Is there adequate whitespace?
   - Are touch targets visually clear?
   - Does typography hierarchy survive the scale-down?

4. **Brand Consistency:**
   - Navy (#0f172a) + Sky Blue (#0ea5e9) palette intact?
   - Inter font family preserved?
   - Professional, institutional tone maintained?

Report format:
✅ PASS: [What looks good]
⚠️ CONCERN: [What needs attention]
❌ FAIL: [What must be fixed before proceeding]
```

### Visual Verification Checkpoints

| Checkpoint | Trigger | Agent | Focus |
|------------|---------|-------|-------|
| V1 | After Header + Hero (Phase 1) | design-architect | First impression on mobile |
| V2 | After Programs section | design-architect | Card layouts and grid |
| V3 | After all pages complete | design-architect | Cross-page consistency |
| V4 | After ApplicationPopup | design-architect | Modal UX on mobile |
| V5 | Final review | design-architect + qa-automation | Full audit |

### Browser-Based Visual Verification

Use browser subagent to capture and verify:

```
BROWSER VERIFICATION TASK:

1. Navigate to http://localhost:3000
2. Resize viewport to 375x667 (iPhone SE)
3. Capture screenshot
4. Navigate through all pages:
   - / (Home)
   - /programs
   - /programs/aviation
   - /impact
   - /about
   - /contact
5. Open mobile menu, verify navigation
6. Open ApplicationPopup, verify form usability
7. Report any visual issues:
   - Overflow
   - Overlapping elements
   - Unreadable text
   - Broken layouts
```

### Quality Gates

Before merging `responsiveness` branch:

1. **Functional Gate (test-engineer):**
   - All pages load without errors
   - All interactive elements work
   - No console errors

2. **Visual Gate (design-architect):**
   - All V1-V5 checkpoints pass
   - No ❌ FAIL items outstanding
   - Brand consistency confirmed

3. **Automation Gate (qa-automation-engineer):**
   - Playwright viewport tests pass
   - No horizontal overflow detected
   - Touch target sizes validated

---

## Agent Collaboration Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    IMPLEMENTATION LOOP                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Implement responsive changes (frontend-specialist)      │
│                         ↓                                   │
│  2. Functional test (test-engineer)                         │
│     - Does it work?                                         │
│     - Any console errors?                                   │
│                         ↓                                   │
│  3. Visual review (design-architect)                        │
│     - Does it look good?                                    │
│     - Brand consistency?                                    │
│                         ↓                                   │
│  4. Automation check (qa-automation-engineer)               │
│     - Viewport tests pass?                                  │
│     - Edge cases covered?                                   │
│                         ↓                                   │
│  5. If all pass → Next component                            │
│     If any fail → Fix and repeat from step 1                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Summary

This plan combines:
- **Systematic implementation** (Phase 1-4)
- **Multi-agent verification** (test-engineer, design-architect, qa-automation)
- **Clear quality gates** before merge

Follow the execution order, trigger visual verification at each checkpoint, and ensure all gates pass before merging to main.
