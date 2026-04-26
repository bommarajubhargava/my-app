import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading with name', () => {
  render(<App />)
  expect(screen.getByText(/Hey, I am Bhargava/i)).toBeInTheDocument()
})

test('renders deployment subtext', () => {
  render(<App />)
  expect(screen.getByText(/This is my first CI\/CD deployment on AWS/i)).toBeInTheDocument()
})

