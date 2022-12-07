import React from "react"

const notes = [
  {id: "1",
      title: "nota 1",
      text:""
  },

  {id: "2",
  title: "nota 1",
  text:""
}
]

export const getNoteById = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(notes.find(note => note.id === id))
    },2000 ) 
  })
}