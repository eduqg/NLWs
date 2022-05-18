import { useState } from 'react'

interface ButtonProps {
  text?: string;
}

// 1rem = 16px por padrão nos navegadores
// Tailwind p-1 0.25 unidades, p-4 é 16px, p-2 é 8px
// px-4 na lateral pading
function Button(props: ButtonProps) {
  return (
    <button className='bg-[#8257e6] p-2 px-4 h-10 rounded text-violet-100 hover:bg-violet-600 transition-colors'>
      {props.text ?? 'Default'}
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button />
    </div>
  )
}

export default App
