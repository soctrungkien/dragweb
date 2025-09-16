import React, { useState } from 'react'

export default function App() {
  const [items, setItems] = useState(["Header", "Paragraph", "Button"])
  const [canvas, setCanvas] = useState([])

  const onDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item)
  }

  const onDrop = (e) => {
    e.preventDefault()
    const item = e.dataTransfer.getData("text/plain")
    setCanvas([...canvas, item])
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Components</h2>
        {items.map((item, i) => (
          <div
            key={i}
            draggable
            onDragStart={(e) => onDragStart(e, item)}
            className="p-2 mb-2 bg-gray-700 rounded cursor-move"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Canvas */}
      <div
        className="flex-1 bg-white p-4"
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <h2 className="text-lg font-bold mb-4">Canvas</h2>
        <div className="border border-dashed border-gray-400 h-full p-4">
          {canvas.map((item, i) => (
            <div key={i} className="p-2 mb-2 border rounded">
              {item === "Header" && <h1 className="text-2xl font-bold">This is a header</h1>}
              {item === "Paragraph" && <p className="text-gray-600">This is a paragraph</p>}
              {item === "Button" && <button className="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}