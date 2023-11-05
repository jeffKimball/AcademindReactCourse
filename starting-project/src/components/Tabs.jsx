// If the interface requires a wrapper other than menu, set the ButtonsContainer to 
// the appropriate element: 'div','aside', or a custom component from Example.jsx
// custom component example: ButtonsContainer =  Section 
// Of course the Section component would have to be imported as well

const Tabs = ({children, buttons, ButtonsContainer = 'menu'}) => {    
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}

export default Tabs