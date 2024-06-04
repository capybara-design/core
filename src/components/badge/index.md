# Badge

## Colors

```jsx
import { Badge } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Badge count={5} />
  <Badge count={10} color="primary" />
  <Badge count={25} color="secondary" />
  <Badge count={100} max={99} color="error" />
  <Badge content="New" color="success" />
</div>;
```

## Use with Button

```jsx
import { Badge, Button } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Button>
    Button&nbsp;
    <Badge count={5} color="primary" />
  </Button>
  <Button variant="fill" color="primary">
    Button
    <Badge
      count={10}
      color="error"
      style={{
        position: 'absolute',
        top: '-0.5em',
        right: '-0.75em',
      }}
    />
  </Button>
</div>;
```
