# Button

## Variants & Colors

Button has three variants: line (default), fill, text.

And six colors (three theming + three functional): normal (default), primary, secondary, success, warning, error.

```jsx filename="Normal color"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button>Line</Button>
  <Button variant="fill">Line</Button>
  <Button variant="text">Text</Button>
  <Button disabled>Line disabled</Button>
</div>;
```

```jsx filename="Primary color"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="primary">Line</Button>
  <Button color="primary" variant="fill">
    Fill
  </Button>
  <Button color="primary" variant="text">
    Text
  </Button>
  <Button color="primary" disabled>
    Line disabled
  </Button>
  <Button color="primary" variant="fill" disabled>
    Fill disabled
  </Button>
  <Button color="primary" variant="text" disabled>
    Text disabled
  </Button>
</div>;
```

```jsx filename="Secondary color"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="secondary">Line</Button>
  <Button color="secondary" variant="fill">
    Fill
  </Button>
  <Button color="secondary" variant="text">
    Text
  </Button>
</div>;
```

```jsx filename="Success color"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="success">Line</Button>
  <Button color="success" variant="fill">
    Fill
  </Button>
  <Button color="success" variant="text">
    Text
  </Button>
</div>;
```

```jsx filename="Warning color"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="warning">Line</Button>
  <Button color="warning" variant="fill">
    Fill
  </Button>
  <Button color="warning" variant="text">
    Text
  </Button>
</div>;
```

```jsx filename="Error color"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="error">Line</Button>
  <Button color="error" variant="fill">
    Fill
  </Button>
  <Button color="error" variant="text">
    Text
  </Button>
</div>;
```

## Sizes

Button has three sizes: small, medium (default) and large.

```jsx filename="Small size"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button size="small" color="primary">
    Line
  </Button>
  <Button size="small" color="primary" variant="fill">
    Fill
  </Button>
  <Button size="small" color="primary" variant="text">
    Text
  </Button>
</div>;
```

```jsx filename="Large size"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button size="large" color="primary">
    Line
  </Button>
  <Button size="large" color="primary" variant="fill">
    Fill
  </Button>
  <Button size="large" color="primary" variant="text">
    Text
  </Button>
</div>;
```

## Icons

Capybara Design doesn't provide icon set. But it supports most SVG icons, including [Bootstrap Icons](https://github.com/guoyunhe/react-bootstrap-icons-pro), [Remix Icon](https://github.com/Remix-Design/RemixIcon).

```jsx filename="Button icon: small size"
import { Button } from '@capybara-design/core';
import { BiArrowLeft, BiArrowRight, BiBoxArrowUpRight } from 'react-bootstrap-icons-pro';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button iconStart={<BiArrowLeft />} color="primary" size="small">
    Previous
  </Button>
  <Button iconEnd={<BiArrowRight />} variant="fill" color="primary" size="small">
    Next
  </Button>
  <Button iconStart={<BiBoxArrowUpRight />} variant="text" color="primary" size="small">
    Preview
  </Button>
</div>;
```

```jsx filename="Button icon: medium size"
import { Button } from '@capybara-design/core';
import { BiArrowLeft, BiArrowRight, BiBoxArrowUpRight } from 'react-bootstrap-icons-pro';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button iconStart={<BiArrowLeft />} color="primary">
    Previous
  </Button>
  <Button iconEnd={<BiArrowRight />} variant="fill" color="primary">
    Next
  </Button>
  <Button iconStart={<BiBoxArrowUpRight />} variant="text" color="primary">
    Preview
  </Button>
</div>;
```

```jsx filename="Button icon: large size"
import { Button } from '@capybara-design/core';
import { BiArrowLeft, BiArrowRight, BiBoxArrowUpRight } from 'react-bootstrap-icons-pro';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button iconStart={<BiArrowLeft />} color="primary" size="large">
    Previous
  </Button>
  <Button iconEnd={<BiArrowRight />} variant="fill" color="primary" size="large">
    Next
  </Button>
  <Button iconStart={<BiBoxArrowUpRight />} variant="text" color="primary" size="large">
    Preview
  </Button>
</div>;
```

## Components

By default, Buttons are rendered as `<button>` element. You can render Button to any HTML elements or React components with `component` property.

```jsx filename="Button icon: large size"
import { Button } from '@capybara-design/core';
import { Link } from 'react-router-dom';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button component="a" href="https://github.com/guoyunhe" target="_blank" color="primary">
    Link
  </Button>
  <Button component={Link} to="/" variant="fill" color="primary">
    React Router
  </Button>
</div>;
```

## Loading

```jsx filename="Button icon: large size"
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button loading color="primary">
    Previous
  </Button>
  <Button loading variant="fill" color="primary">
    Next
  </Button>
  <Button loading variant="text" color="primary">
    Preview
  </Button>
</div>;
```

## Compare with other libraries

| Features                 | Capybara Design | Ant Design | Fusion Design | Material UI | React Bootstrap |
| ------------------------ | --------------- | ---------- | ------------- | ----------- | --------------- |
| as `<a>`                 | ✅              | ✅         | ✅            | ✅          | ✅              |
| as React Router `<Link>` | ✅              | ❌         | ✅            | ✅          | ✅              |
