import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BaseStyles} from '@primer/react'
import {ThemeProvider} from '@primer/react-brand'
import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/primitives/dist/css/functional/typography/typography.css'
import '@primer/primitives/dist/css/functional/size/size.css'
import '@primer/primitives/dist/css/base/motion/motion.css'
import '@primer/react-brand/lib/css/main.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider colorMode="light">
      <BaseStyles>
        <StrictMode>
              <App />
        </StrictMode>
      </BaseStyles>
    </ThemeProvider>
)
