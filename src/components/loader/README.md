# Loader

## Standalone

```jsx
import { Loader } from '@capybara-design/core';

<Loader />;
```

## Size

```jsx
import { Loader, RowLayout } from '@capybara-design/core';

<RowLayout>
  <Loader size={48} />
  <Loader size="2em" />
</RowLayout>;
```

## Color

```jsx
import { Loader, RowLayout } from '@capybara-design/core';

<RowLayout>
  <Loader size="2em" color="#66ccff" />
  <Loader size="2em" color="var(--cd-color-primary)" />
</RowLayout>;
```

## With Button and Input

```jsx
import { Button, Input, Loader, RowLayout } from '@capybara-design/core';

<RowLayout>
  <Input iconEnd={<Loader />} />
  <Button variant="fill" color="primary" iconStart={<Loader />}>
    Submit
  </Button>
</RowLayout>;
```
