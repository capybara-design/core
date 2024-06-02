# Button

## Variants & Colors

### Normal

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button>Outline</Button>
  <Button variant="text">Text</Button>
</div>;
```

### Primary

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="primary">Outline</Button>
  <Button color="primary" variant="solid">
    Solid
  </Button>
  <Button color="primary" variant="ghost">
    Ghost
  </Button>
  <Button color="primary" variant="text">
    Text
  </Button>
</div>;
```

### Secondary

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="secondary">Outline</Button>
  <Button color="secondary" variant="solid">
    Solid
  </Button>
  <Button color="secondary" variant="ghost">
    Ghost
  </Button>
  <Button color="secondary" variant="text">
    Text
  </Button>
</div>;
```

### Success

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="success">Outline</Button>
  <Button color="success" variant="solid">
    Solid
  </Button>
  <Button color="success" variant="ghost">
    Ghost
  </Button>
  <Button color="success" variant="text">
    Text
  </Button>
</div>;
```

### Warning

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="warning">Outline</Button>
  <Button color="warning" variant="solid">
    Solid
  </Button>
  <Button color="warning" variant="ghost">
    Ghost
  </Button>
  <Button color="warning" variant="text">
    Text
  </Button>
</div>;
```

### Error

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button color="error">Outline</Button>
  <Button color="error" variant="solid">
    Solid
  </Button>
  <Button color="error" variant="ghost">
    Ghost
  </Button>
  <Button color="error" variant="text">
    Text
  </Button>
</div>;
```

## Sizes

### Small

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button size="small" color="primary">
    Outline
  </Button>
  <Button size="small" color="primary" variant="solid">
    Solid
  </Button>
  <Button size="small" color="primary" variant="ghost">
    Ghost
  </Button>
  <Button size="small" color="primary" variant="text">
    Text
  </Button>
</div>;
```

### Large

```jsx
import { Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button size="large" color="primary">
    Outline
  </Button>
  <Button size="large" color="primary" variant="solid">
    Solid
  </Button>
  <Button size="large" color="primary" variant="ghost">
    Ghost
  </Button>
  <Button size="large" color="primary" variant="text">
    Text
  </Button>
</div>;
```

## Icons

Capybara Design doesn't provide icon set. But it supports most SVG icons, including [Bootstrap Icons](https://github.com/guoyunhe/react-bootstrap-icons-pro), [Remix Icon](https://github.com/Remix-Design/RemixIcon).

```jsx
import { Button } from '@capybara-design/core';
import { BiArrowLeft, BiArrowRight, BiBoxArrowUpRight } from 'react-bootstrap-icons-pro';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button iconStart={<BiArrowLeft />} color="primary" size="small">
    Previous
  </Button>
  <Button iconEnd={<BiArrowRight />} variant="solid" color="primary" size="small">
    Next
  </Button>
  <Button iconStart={<BiBoxArrowUpRight />} variant="text" color="primary" size="small">
    Preview
  </Button>
  <Button iconStart={<BiArrowLeft />} color="primary">
    Previous
  </Button>
  <Button iconEnd={<BiArrowRight />} variant="solid" color="primary">
    Next
  </Button>
  <Button iconStart={<BiBoxArrowUpRight />} variant="text" color="primary">
    Preview
  </Button>
  <Button iconStart={<BiArrowLeft />} color="primary" size="large">
    Previous
  </Button>
  <Button iconEnd={<BiArrowRight />} variant="solid" color="primary" size="large">
    Next
  </Button>
  <Button iconStart={<BiBoxArrowUpRight />} variant="text" color="primary" size="large">
    Preview
  </Button>
</div>;
```
