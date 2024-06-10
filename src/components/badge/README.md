# Badge

## Number

Badge is invisible when `count` is 0. And by default it show 99 as maximum. If you want to change the limit, set `max` property.

```jsx
import { Badge } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Badge count={0} />
  <Badge count={5} />
  <Badge count={10} />
  <Badge count={100} />
  <Badge count={1000} max={999} />
</div>;
```

## Text

Badge can also show text with `content` property.

```jsx
import { Badge } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Badge content="New" />
  <Badge content="Hot" />
  <Badge content="Try!" />
</div>;
```

## Colors

```jsx
import { Badge } from '@capybara-design/core';

<div style={{ display: 'flex', gap: 8 }}>
  <Badge count={5} />
  <Badge count={10} color="primary" />
  <Badge count={100} color="secondary" />
  <Badge count={1000} max={999} color="error" />
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
