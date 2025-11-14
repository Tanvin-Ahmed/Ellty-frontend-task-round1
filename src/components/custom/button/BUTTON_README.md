# Button Component

A fully customizable, reusable button component built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Multiple color variants (primary, secondary, danger, success)
- ✅ Three size options (small, medium, large)
- ✅ Full width option
- ✅ Loading state with spinner
- ✅ Disabled state
- ✅ Type support (button, submit, reset)
- ✅ Custom className support
- ✅ All standard button HTML attributes
- ✅ TypeScript support
- ✅ Accessible (focus states, keyboard navigation)

## Quick Start

```tsx
import Button from "./components/Button";

function MyComponent() {
  return <Button>Click Me</Button>;
}
```

## Props

| Prop        | Type                                                      | Default     | Description                               |
| ----------- | --------------------------------------------------------- | ----------- | ----------------------------------------- |
| `variant`   | `"primary"` \| `"secondary"` \| `"danger"` \| `"success"` | `"primary"` | Button color variant                      |
| `size`      | `"sm"` \| `"md"` \| `"lg"`                                | `"md"`      | Button size                               |
| `type`      | `"button"` \| `"submit"` \| `"reset"`                     | `"button"`  | HTML button type                          |
| `fullWidth` | `boolean`                                                 | `false`     | Makes button take full width of container |
| `isLoading` | `boolean`                                                 | `false`     | Shows loading spinner and disables button |
| `disabled`  | `boolean`                                                 | `false`     | Disables the button                       |
| `className` | `string`                                                  | `""`        | Additional Tailwind CSS classes           |
| `onClick`   | `function`                                                | -           | Click event handler                       |
| `children`  | `ReactNode`                                               | -           | Button content (required)                 |

All other standard HTML button attributes are also supported.

## Usage Examples

### Basic Button

```tsx
<Button>Click Me</Button>
```

### Submit Button (Primary Variant - Default Yellow)

```tsx
<Button type="submit" onClick={handleSubmit}>
  Submit Form
</Button>
```

### Different Variants

```tsx
<Button variant="primary">Primary (Yellow)</Button>
<Button variant="secondary">Secondary (Gray)</Button>
<Button variant="danger">Danger (Red)</Button>
<Button variant="success">Success (Green)</Button>
```

### Different Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Full Width Button

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Loading State

```tsx
<Button isLoading={isSubmitting}>Save Changes</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

### Combining Multiple Props

```tsx
<Button variant="danger" size="lg" fullWidth onClick={handleDelete}>
  Delete Account
</Button>
```

### With Custom Styling

```tsx
<Button variant="primary" className="shadow-2xl rounded-full uppercase">
  Custom Style
</Button>
```

### In a Form

```tsx
<form onSubmit={handleSubmit}>
  <input type="text" />

  <div className="flex gap-2 mt-4">
    <Button type="submit" variant="primary" isLoading={isSubmitting}>
      Save
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </div>
</form>
```

## Styling

The component uses Tailwind CSS for styling. The default (primary) variant uses the yellow color scheme from your design:

- Background: `bg-yellow-400`
- Hover: `bg-yellow-500`
- Text: `text-gray-900`

You can customize colors by:

1. Adding custom classes via the `className` prop
2. Modifying the `variantStyles` object in `Button.tsx`

## Accessibility

- Includes proper focus states with visible ring
- Supports keyboard navigation
- Properly disabled when `disabled` or `isLoading` is true
- Loading state is visible and prevents multiple submissions

## Demo

To see all button variations in action, temporarily import the `ButtonExamples` component:

```tsx
// In App.tsx
import ButtonExamples from "./components/ButtonExamples";

function App() {
  return <ButtonExamples />;
}
```

## Notes

- The default style matches Figma design (yellow primary button)
- The component is fully typed with TypeScript
- All HTML button attributes are supported through spread props
- The loading spinner animation is built-in with Tailwind CSS
