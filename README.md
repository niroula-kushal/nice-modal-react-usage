# Admin Dashboard (Vite + React)

This project uses **`@ebay/nice-modal-react`** to manage modal state and orchestration in a clean, composable way.

## How NiceModal is used

### 1) Provider at the app root
The app is wrapped in `NiceModal.Provider` in `src/main.jsx` so any component can open/close modals without prop drilling.

### 2) Modals are declared with `NiceModal.create`
Both modal components are created with NiceModal:
- `src/side-modal.jsx` → parent right-side drawer
- `src/child-modal.jsx` → nested right-side drawer

Each modal uses `useModal()` to access visibility and close behavior.

### 3) Open modal with payload
The dashboard opens the parent drawer from `src/App.jsx` with:

```js
NiceModal.show(SideModal, { name: "Nate" })
```

This passes runtime data into the modal component.

### 4) Stacked side modals
Inside `src/side-modal.jsx`, the child modal is opened with:

```js
NiceModal.show(ChildModal, { name })
```

Because both are side drawers with different z-index layers, they stack visually.

## Why this approach

- Centralized modal state management.
- No prop drilling for open/close handlers.
- Easy to pass runtime data into modals.
- Reusable modal components that can be launched from anywhere.
