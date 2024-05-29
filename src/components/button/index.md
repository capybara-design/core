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
