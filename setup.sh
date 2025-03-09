#!/bin/bash

# Define the folder structure
folders=(
    "public"
    "src/assets/images"
    "src/assets/fonts"
    "src/assets/styles"
    "src/components"
    "src/features/auth"
    "src/features/dashboard"
    "src/hooks"
    "src/layouts"
    "src/pages/dashboard"
    "src/providers"
    "src/redux/slices"
    "src/routes"
    "src/services"
    "src/utils"
    "src/tests/components"
    "src/tests/features"
    "src/tests/hooks"
    "src/tests/utils"
    "src/e2e"
)

# Create folders
for folder in "${folders[@]}"; do
    mkdir -p "$folder"
done

# Create base files with minimal content
echo "export {};" > src/components/index.ts
echo "export {};" > src/features/auth/index.ts
echo "export {};" > src/features/dashboard/index.ts
echo "export {};" > src/hooks/index.ts
echo "export {};" > src/layouts/index.ts
echo "export {};" > src/pages/dashboard/index.ts
echo "export {};" > src/providers/index.ts
echo "export {};" > src/redux/slices/index.ts
echo "export {};" > src/routes/index.ts
echo "export {};" > src/services/index.ts
echo "export {};" > src/utils/index.ts

# Sample React components
echo "import React from 'react'; export default function Button() { return <button>Click me</button>; }" > src/components/Button.tsx

echo "import React from 'react'; export default function Dashboard() { return <div>Dashboard</div>; }" > src/features/dashboard/Dashboard.tsx

# Sample Redux slice
echo "import { createSlice } from '@reduxjs/toolkit'; const authSlice = createSlice({ name: 'auth', initialState: {}, reducers: {} }); export default authSlice.reducer;" > src/redux/slices/authSlice.ts

# Sample service file
echo "export const authService = { login: () => Promise.resolve('Logged in') };" > src/services/authService.ts

# Sample hook
echo "import { useState } from 'react'; export function useAuth() { const [user, setUser] = useState(null); return { user, setUser }; }" > src/hooks/useAuth.ts

# Sample route file
echo "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; export default function AppRoutes() { return <Router><Routes><Route path='/' element={<div>Home</div>} /></Routes></Router>; }" > src/routes/AppRoutes.tsx

# Sample test setup
echo "import '@testing-library/jest-dom';" > src/tests/setupTests.ts

# .env file
echo "VITE_API_URL=http://localhost:3000" > .env

echo "✅ Project structure created successfully!"
