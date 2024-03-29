import { useRef }from 'react'
import React from 'react'
import Input from './Input'

const NewProject = (onAdd) => {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    const handleSave = () => {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        // validation...

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    function handleAddProject(projectData) {
        setProjectState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            }
            return {
                ...prevState,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    return (
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <button className='px-6 text-stone-800 hover:text-stone-950'>
                        Cancel
                    </button>
                    <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={title} label="Title" />
                <Input ref={description} label="Description" textarea/>
                <Input ref={dueDate} label="Due Date" />
            </div>
        </div>
    )
}

export default NewProject